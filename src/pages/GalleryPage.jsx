
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
    alt: "Evento de coches en Sevilla RP", 
    description: "Concentración de coches deportivos en el centro.",
    thumbnailUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 3, 
    alt: "Acción policial en Sevilla RP", 
    description: "Persecución policial a alta velocidad.",
    thumbnailUrl: "https://images.unsplash.com/photo-1570067782641-c8394959ab3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9saWNlJTIwY2FyJTIwY2hhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1570067782641-c8394959ab3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9saWNlJTIwY2FyJTIwY2hhc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 4, 
    alt: "Roleplay en el hospital de Sevilla RP", 
    description: "Equipo médico atendiendo una emergencia.",
    thumbnailUrl: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBlbWVyZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9zcGl0YWwlMjBlbWVyZ2VuY3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 5, 
    alt: "Negocios en Sevilla RP", 
    description: "Jugadores interactuando en un negocio local.",
    thumbnailUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnRlcmFjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnRlcmFjdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 6, 
    alt: "Paisaje nocturno de Sevilla RP", 
    description: "La Giralda iluminada por la noche.",
    thumbnailUrl: "https://images.unsplash.com/photo-1578453143482-830999877044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V2aWxsYSUyMG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1578453143482-830999877044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2V2aWxsYSUyMG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 7, 
    alt: "Grupo de amigos en Sevilla RP", 
    description: "Un grupo de amigos disfrutando de un día soleado en el parque.",
    thumbnailUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjBvZiUyMGZyaWVuZHMlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvdXAlMjBvZiUyMGZyaWVuZHMlMjBnYW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&q=80"
  },
  { 
    id: 8, 
    alt: "Interior de una casa en Sevilla RP", 
    description: "Interior lujoso de una mansión en el servidor.",
    thumbnailUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    fullUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG91c2UlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&q=80"
  },
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
