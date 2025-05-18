
import { Analytics } from "@vercel/analytics/next"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card.jsx';
import { Users, MapPin, ShieldCheck, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Card className="glass-card h-full hover:shadow-xl hover:shadow-primary/20 transition-shadow duration-300">
      <CardHeader className="items-center">
        {React.cloneElement(icon, { className: "h-12 w-12 text-primary mb-4" })}
        <CardTitle className="text-2xl gradient-text">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const testimonials = [
  {
    id: 1,
    quote: "La mejor experiencia de RP que he tenido. El staff es increíble y la comunidad muy amable.",
    name: "faiht5m",
    role: "Líder de Mafia",
    imageUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373630891846537337/image.png?ex=682b1cf5&is=6829cb75&hm=b6d111dd0ab9f226c71b1e6354660180d8e903e05a194d0fcbd3298a98fba104&",
    alt: "Avatar de faith5m"
  },
  {
    id: 2,
    quote: "He probado muchos servidores, pero en Sevilla RP encontré el equilibrio perfecto entre rol serio y buen ambiente. Aquí sí hay historias que enganchan.",
    name: "arnauet",
    role: "Ciudadano",
    imageUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373631445041680465/image.png?ex=682b1d79&is=6829cbf9&hm=6ae4c7b745df8351651d239c9e6759ab89ef22780f66a37b5c81d58d51fd83bd&",
    alt: "Avatar de arnauet"
  },
  {
    id: 3,
    quote: "Desde que entré a Sevilla RP, cada día ha sido distinto. Buen soporte, eventos únicos y una comunidad que sí sabe lo que es rolear bien.",
    name: ".sanchez69_",
    role: "Mecánico",
    imageUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373635012167204914/image.png?ex=682b20cb&is=6829cf4b&hm=7513c7ec018edd65e9788185a8712f1cfa1dc364b70e812df0e64c05777555ca&",
    alt: "Avatar de .sanchez69_"
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 text-white hero-gradient clip-path-slant"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 text-shadow"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Bienvenido a <span className="gradient-text">Sevilla RP</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto text-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Sumérgete en una experiencia de roleplay única en la vibrante ciudad de Sevilla. Crea tu historia, forja alianzas y vive momentos inolvidables.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/join">
              <Button size="lg" variant="default" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6 red-glow">
                ¡Únete Ahora!
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 gradient-text"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ¿Qué nos hace únicos?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users />} 
              title="Comunidad Activa" 
              description="Una comunidad amigable y dedicada al roleplay de calidad."
              delay={0.3}
            />
            <FeatureCard 
              icon={<MapPin />} 
              title="Mapa Detallado" 
              description="Explora una recreación fiel y detallada de Sevilla con zonas exclusivas."
              delay={0.5}
            />
            <FeatureCard 
              icon={<ShieldCheck />} 
              title="Staff Dedicado" 
              description="Un equipo de administración activo y justo para garantizar la mejor experiencia."
              delay={0.7}
            />
            <FeatureCard 
              icon={<MessageSquare />} 
              title="Historias Inmersivas" 
              description="Crea y vive tramas emocionantes con otros jugadores."
              delay={0.9}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-secondary/30 clip-path-slant-reverse">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para empezar tu aventura?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lee nuestras normativas, conoce a la comunidad y prepárate para una experiencia de roleplay sin igual.
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/rules">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                Ver Normativas
              </Button>
            </Link>
            <a href="https://discord.gg/Uwe2r2HQx4" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white red-glow">
                Únete al Discord
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial/Community Spotlight Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Lo que dice nuestra comunidad</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
              >
                <Card className="glass-card h-full flex flex-col">
                  <CardContent className="pt-6 flex-grow flex flex-col">
                    <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center mt-auto">
                      <img className="h-12 w-12 rounded-full mr-4 object-cover" alt={testimonial.alt} src={testimonial.imageUrl} />
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
