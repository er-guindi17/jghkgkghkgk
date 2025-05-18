
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      color: "hsl(var(--primary))",
      transition: { duration: 0.2 }
    }
  };

  return (
    <footer className="bg-background/80 border-t border-border/50 mt-auto py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Sevilla RP</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Vive la experiencia de roleplay más inmersiva en la ciudad de Sevilla.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center md:text-left">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/rules" className="text-sm text-muted-foreground hover:text-primary transition-colors">Normativas</Link></li>
              <li><Link to="/join" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cómo Unirse</Link></li>
              <li><Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Galería</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center md:text-left">Síguenos</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                <Twitter className="h-6 w-6 text-muted-foreground" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                <Instagram className="h-6 w-6 text-muted-foreground" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover="hover">
                <Github className="h-6 w-6 text-muted-foreground" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Sevilla RP. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            Diseñado con <span className="text-red-500">&hearts;</span> por la comunidad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
