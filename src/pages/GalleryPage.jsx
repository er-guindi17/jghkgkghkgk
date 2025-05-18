
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog.jsx';
import { Maximize } from 'lucide-react';

const galleryImages = [
  { 
    id: 1, 
    alt: "Vista bonita de Sevilla RP", 
    description: "Vista bonita de Sevilla RP.",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373653588353486919/image.png?ex=682b3218&is=6829e098&hm=74a524e38727d554c198063f85fbd2ad01570e0913607b04bc251d3b489a58da&",
    fullUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373653588353486919/image.png?ex=682b3218&is=6829e098&hm=74a524e38727d554c198063f85fbd2ad01570e0913607b04bc251d3b489a58da&"
  },
  { 
    id: 2, 
    alt: "Sevilla RP nevando", 
    description: "Sevilla RP nevando.",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373654331521499167/image.png?ex=682b32c9&is=6829e149&hm=c9e2e9b0c2943f6411e11d6fff4c319e676d0dd46620969fc9f1f374120f3c3e&",
    fullUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373654331521499167/image.png?ex=682b32c9&is=6829e149&hm=c9e2e9b0c2943f6411e11d6fff4c319e676d0dd46620969fc9f1f374120f3c3e&"
  },
  { 
    id: 3, 
    alt: "La feria de Sevilla RP", 
    description: "Feria de Sevilla.",
    thumbnailUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373669269019037827/image.png?ex=682b40b3&is=6829ef33&hm=a0fa1f9e70cc378906fbc86209bb3d17137a2dd8973a046fb4ed120f030b2761&",
    fullUrl: "https://cdn.discordapp.com/attachments/1356324859160035471/1373669269019037827/image.png?ex=682b40b3&is=6829ef33&hm=a0fa1f9e70cc378906fbc86209bb3d17137a2dd8973a046fb4ed120f030b2761&"
  },
  { 
    id: 4, 
    alt: "Hospital de Sevilla RP", 
    description: "Equipo médico atendiendo una emergencia.",
    thumbnailUrl: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBlbWVyZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBlbWVyZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
  }
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                        alt={image.alt}
                        src={image.thumbnailUrl} />
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
                      className="w-full h-auto object-contain rounded-lg shadow-2xl" 
                      alt={image.alt}
                      src={image.fullUrl} />
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
