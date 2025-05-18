
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion.jsx";
import { AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';

const rulesData = [
  {
    category: "Normas Generales del Servidor",
    icon: <BookOpen className="h-5 w-5 mr-2 text-primary" />,
    rules: [
      { title: "Respeto Mutuo", description: "Trata a todos los jugadores y miembros del staff con respeto. No se tolerará ningún tipo de acoso, discriminación o toxicidad." },
      { title: "Uso del Micrófono", description: "Es obligatorio el uso de micrófono para una comunicación fluida. Asegúrate de que tu micrófono funcione correctamente y no genere ruido excesivo." },
      { title: "Prohibido el Metagaming (MG)", description: "No utilices información obtenida fuera del juego (OOC) para beneficiar a tu personaje dentro del juego (IC)." },
      { title: "Prohibido el Powergaming (PG)", description: "No fuerces situaciones de rol ni realices acciones que tu personaje no podría hacer de forma realista. No impongas tu rol sobre otros." },
    ]
  },
  {
    category: "Normas de Roleplay (In Character - IC)",
    icon: <CheckCircle className="h-5 w-5 mr-2 text-green-500" />,
    rules: [
      { title: "Valorar tu Vida (NVVP)", description: "Actúa siempre valorando la vida de tu personaje. No te expongas a situaciones de peligro innecesarias o irrealistas." },
      { title: "Interpretación de Personaje", description: "Mantén una interpretación coherente de tu personaje. Sus acciones, decisiones y diálogos deben ser acordes a su trasfondo y personalidad." },
      { title: "No Interrumpir Rol Ajeno (NIR)", description: "Evita interrumpir o sabotear situaciones de rol en las que no estés directamente involucrado, a menos que tu personaje tenga una razón IC válida." },
      { title: "Uso de /me y /do", description: "Utiliza /me para describir acciones y /do para describir estados o hechos del entorno. No uses /do para forzar acciones en otros." },
    ]
  },
  {
    category: "Normas de Zonas Seguras y Combate",
    icon: <AlertTriangle className="h-5 w-5 mr-2 text-yellow-500" />,
    rules: [
      { title: "Zonas Seguras", description: "Hospitales, comisarías y ciertas áreas designadas son zonas seguras. No se permite iniciar actos hostiles en estas zonas, a menos que el rol lo justifique y sea aprobado por staff." },
      { title: "Roleplay de Heridas (RDM/VDM)", description: "Random Death Match (RDM) y Vehicle Death Match (VDM) están estrictamente prohibidos. Todo acto hostil debe tener una justificación IC sólida." },
      { title: "Robos y Secuestros", description: "Deben seguirse las normativas específicas para robos y secuestros, incluyendo límites de tiempo, número de participantes y condiciones." },
    ]
  }
];

const RulesPage = () => {
  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  });

  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn()}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">Normativas de Sevilla RP</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Para garantizar una experiencia justa y divertida para todos, es crucial conocer y seguir nuestras reglas.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          {...fadeIn(0.2)}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {rulesData.map((categoryItem, index) => (
              <motion.div 
                key={categoryItem.category}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="bg-card/80 glass-card rounded-lg shadow-lg border-border/50">
                  <AccordionTrigger className="text-xl font-semibold px-6 py-4 hover:no-underline text-foreground hover:bg-primary/10 rounded-t-lg transition-colors">
                    <div className="flex items-center">
                      {categoryItem.icon}
                      {categoryItem.category}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 border-t border-border/30">
                    <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                      {categoryItem.rules.map((rule) => (
                        <li key={rule.title}>
                          <strong className="text-foreground/90">{rule.title}:</strong> {rule.description}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-16 text-center p-8 bg-red-900/30 glass-card rounded-lg shadow-xl border border-red-500/50"
          {...fadeIn(0.5 + rulesData.length * 0.1)}
        >
          <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-300 mb-3">Importante</h2>
          <p className="text-red-200/80 max-w-2xl mx-auto">
            El desconocimiento de estas normas no exime de su cumplimiento. Las sanciones pueden variar desde advertencias verbales hasta la expulsión permanente del servidor. El staff se reserva el derecho de modificar estas normas según sea necesario para el buen funcionamiento de la comunidad. ¡Juega con responsabilidad y diviértete!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RulesPage;
