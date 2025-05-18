
import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar.jsx';
import Footer from '@/components/Footer.jsx';
import { ScrollToTop } from '@/components/ScrollToTop.jsx';
import { Shield } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background hero-gradient"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            >
              <Shield className="h-24 w-24 text-primary mb-4" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold gradient-text text-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Sevilla RP
            </motion.h1>
            <motion.div 
              className="mt-8 w-32 h-1 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.7, ease: "circOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
