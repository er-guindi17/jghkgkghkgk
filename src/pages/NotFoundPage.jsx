
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-background via-red-900/10 to-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <AlertTriangle className="h-32 w-32 text-red-500 mb-8" />
      </motion.div>
      
      <motion.h1 
        className="text-6xl md:text-8xl font-extrabold text-red-400 mb-4 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        404
      </motion.h1>
      
      <motion.p 
        className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        ¡Ups! Página no encontrada.
      </motion.p>
      
      <motion.p 
        className="text-lg text-muted-foreground mb-10 max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        Parece que te has perdido en las calles de Sevilla. No te preocupes, podemos guiarte de vuelta.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Link to="/">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 red-glow">
            Volver al Inicio
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
