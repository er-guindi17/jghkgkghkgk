
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const navItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Sobre Nosotros', path: '/about' },
  { name: 'Normativas', path: '/rules' },
  { name: 'Galería', path: '/gallery' },
  { name: 'Únete', path: '/join' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const mobileMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.nav 
      className="sticky top-0 z-40 w-full nav-blur shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">Sevilla RP</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div key={item.name} variants={linkVariants} whileHover="hover" whileTap="tap">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-foreground hover:text-primary/80'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
            <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700 text-white red-glow">
              Discord
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-0 w-full bg-background/95 shadow-xl pb-4 nav-blur"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center space-y-4 pt-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary/80 hover:bg-primary/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Button variant="default" className="w-3/4 bg-red-600 hover:bg-red-700 text-white red-glow">
                Discord
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
