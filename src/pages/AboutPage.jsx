
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Users, Target, History, Shield } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    { name: "Fundador 1", role: "Desarrollador Principal", imgKey: "Fundador uno" },
    { name: "Admin 1", role: "Jefe de Comunidad", imgKey: "Admin uno" },
    { name: "Mod 1", role: "Soporte al Jugador", imgKey: "Mod uno" },
  ];

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Sobre Sevilla RP</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Descubre la pasión y dedicación detrás de la experiencia de roleplay más auténtica de Sevilla.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
          <motion.div {...fadeIn(0.2)}>
            <img  class="rounded-lg shadow-xl w-full h-auto object-cover aspect-video red-glow" alt="Equipo de Sevilla RP trabajando" src="https://media.discordapp.net/attachments/1357412125307306134/1357412222250258643/banner_sevilla_rp.png?ex=682ac6e5&is=68297565&hm=a550f720e9ceb813dbfe3526f5933edd69dfd33a0f3d6ac22d374c6175f8072a&=&format=webp&quality=lossless&width=1353&height=902" />
          </motion.div>
          <motion.div {...fadeIn(0.4)}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-3xl text-primary flex items-center">
                  <History className="mr-3 h-8 w-8" /> Nuestra Historia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Sevilla RP nació de un grupo de amigos apasionados por el roleplay y la cultura andaluza. Con la visión de crear un servidor único, nos embarcamos en la misión de construir una comunidad vibrante y un entorno de juego inmersivo.</p>
                <p>Desde nuestros humildes comienzos, hemos crecido gracias al apoyo de nuestros jugadores y al arduo trabajo de nuestro equipo. Cada rincón de Sevilla RP está diseñado con atención al detalle, buscando ofrecer una experiencia auténtica y memorable.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div className="mb-16" {...fadeIn(0.6)}>
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users className="h-10 w-10 text-primary mb-3" />, title: "Comunidad", text: "Fomentamos un ambiente de respeto, colaboración y diversión para todos nuestros miembros." },
              { icon: <Target className="h-10 w-10 text-primary mb-3" />, title: "Calidad", text: "Nos esforzamos por ofrecer un roleplay de alta calidad, con mecánicas innovadoras y un lore rico." },
              { icon: <Shield className="h-10 w-10 text-primary mb-3" />, title: "Transparencia", text: "Mantenemos una comunicación abierta con nuestra comunidad y un staff justo y accesible." },
            ].map((value, index) => (
              <motion.div key={value.title} {...fadeIn(0.7 + index * 0.1)}>
                <Card className="glass-card h-full text-center p-6 hover:shadow-primary/20 transition-shadow">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.text}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeIn(0.9)}>
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Conoce al Equipo</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div key={member.name} {...fadeIn(1 + index * 0.1)}>
                <Card className="glass-card text-center p-6 hover:shadow-primary/20 transition-shadow">
                  <img  class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary red-glow" alt={`Foto de ${member.name}`} src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
