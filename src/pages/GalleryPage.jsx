
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Maximize } from 'lucide-react';

const galleryImages = [
  { id: 1, alt: "Vista panorámica de Sevilla RP", description: "Atardecer sobre el río Guadalquivir en Sevilla RP." },
  { id: 2, alt: "Evento de coches en Sevilla RP", description: "Concentración de coches deportivos en el centro." },
  { id: 3, alt: "Acción policial en Sevilla RP", description: "Persecución policial a alta velocidad." },
  { id: 4, alt: "Roleplay en el hospital de Sevilla RP", description: "Equipo médico atendiendo una emergencia." },
  { id: 5, alt: "Negocios en Sevilla RP", description: "Jugadores interactuando en un negocio local." },
  { id: 6, alt: "Paisaje nocturno de Sevilla RP", description: "La Giralda iluminada por la noche." },
  { id: 7, alt: "Grupo de amigos en Sevilla RP", description: "Un grupo de amigos disfrutando de un día soleado en el parque." },
  { id: 8, alt: "Interior de una casa en Sevilla RP", description: "Interior lujoso de una mansión en el servidor." },
];

const GalleryPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Galería de Sevilla RP</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Explora los momentos más memorables y los rincones más espectaculares de nuestra ciudad virtual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden glass-card group cursor-pointer hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 red-glow">
                    <div className="relative aspect-square">
                      <img  
                        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        alt={image.alt}
                       src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground truncate">{image.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl p-0 border-0 bg-transparent">
                   <img  
                      class="w-full h-auto object-contain rounded-lg shadow-2xl" 
                      alt={image.alt}
                     src="https://images.unsplash.com/photo-1695778481317-501df66db788" />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          {...fadeIn(galleryImages.length * 0.1 + 0.2)}
        >
          <p className="text-lg text-muted-foreground">
            ¿Tienes capturas increíbles de Sevilla RP? ¡Compártelas en nuestro Discord!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GalleryPage;
