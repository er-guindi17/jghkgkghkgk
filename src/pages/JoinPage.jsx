
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx';
import { CheckSquare, Download, Users, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-8 w-8 text-primary" />,
    title: "Instala FiveM",
    description: "Asegúrate de tener una copia legítima de Grand Theft Auto V y descarga el cliente de FiveM desde su web oficial.",
    link: "https://fivem.net/",
    buttonText: "Descargar FiveM"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Únete a nuestro Discord",
    description: "Es esencial unirse a nuestro servidor de Discord para estar al tanto de las últimas noticias, normativas y whitelist (si aplica).",
    link: "https://discord.gg/yourdiscord", 
    buttonText: "Unirse al Discord"
  },
  {
    icon: <CheckSquare className="h-8 w-8 text-primary" />,
    title: "Lee las Normativas",
    description: "Familiarízate con nuestras normativas para asegurar una experiencia de roleplay positiva para todos.",
    linkPath: "/rules",
    buttonText: "Ver Normativas"
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: "Conéctate al Servidor",
    description: "Una vez en FiveM, busca 'Sevilla RP' en la lista de servidores o conéctate directamente usando nuestra IP: connect cfx.re/join/xxxxxx", 
    buttonText: "Buscar Servidor (en FiveM)"
  }
];

const JoinPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Únete a la Aventura</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Sigue estos sencillos pasos para comenzar tu nueva vida en Sevilla RP. ¡Te esperamos!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <Card className="glass-card h-full flex flex-col hover:shadow-primary/20 hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex-row items-center space-x-4">
                  {step.icon}
                  <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-muted-foreground mb-6">{step.description}</CardDescription>
                </CardContent>
                <div className="p-6 pt-0">
                  {step.linkPath ? (
                     <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white red-glow">
                        <Link to={step.linkPath}>{step.buttonText}</Link>
                     </Button>
                  ) : step.link ? (
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white red-glow">
                      <a href={step.link} target="_blank" rel="noopener noreferrer">{step.buttonText}</a>
                    </Button>
                  ) : (
                    <Button className="w-full bg-red-700/80 text-white/90 cursor-not-allowed" disabled>{step.buttonText}</Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center p-8 bg-green-900/30 glass-card rounded-lg shadow-xl border border-green-500/50"
          {...fadeIn(0.3 + steps.length * 0.15)}
        >
          <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-300 mb-3">¿Necesitas Ayuda?</h2>
          <p className="text-green-200/80 max-w-2xl mx-auto">
            Si tienes alguna pregunta o problema durante el proceso de unirte, no dudes en contactar a nuestro equipo de soporte en Discord. ¡Estamos aquí para ayudarte!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinPage;
