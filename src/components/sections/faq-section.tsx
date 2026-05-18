"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Necesito tarjeta de crédito para empezar la prueba gratuita?",
    a: "No. Puedes empezar tu prueba gratuita de 30 días sin ingresar ningún método de pago. Solo necesitas tu nombre y correo electrónico.",
  },
  {
    q: "¿Cuánto tiempo toma configurar Elav para mi iglesia?",
    a: "La configuración inicial toma menos de 5 minutos. Puedes importar miembros, crear campus y empezar a usar la plataforma inmediatamente. La mayoría de las iglesias están completamente operativas en menos de una semana.",
  },
  {
    q: "¿Puedo migrar mis datos desde otra plataforma o desde Excel?",
    a: "Sí. Elav permite importar miembros desde archivos CSV o Excel. También ofrecemos asistencia gratuita para migraciones desde otras plataformas en planes Advance.",
  },
  {
    q: "¿Elav funciona para iglesias con múltiples campus?",
    a: "Absolutamente. Elav está diseñado para manejar múltiples campus, cada uno con sus propios miembros, eventos, finanzas y estadísticas, todo visible desde un solo panel unificado.",
  },
  {
    q: "¿Qué tipo de soporte ofrecen?",
    a: "Todos los planes incluyen soporte por chat y email. Los planes Grow incluyen soporte prioritario, y los planes Advance cuentan con un gerente de cuenta dedicado y sesiones de onboarding personalizadas.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Utilizamos encriptación de grado bancario, backups automáticos diarios y cumplimos con los más altos estándares de seguridad. Tus datos son tuyos y puedes exportarlos cuando quieras.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí. No hay contratos forzosos ni permanencia mínima. Puedes cancelar tu suscripción en cualquier momento desde tu panel de administración.",
  },
  {
    q: "¿Ofrecen descuentos para iglesias pequeñas o ministerios?",
    a: "Sí. Tenemos precios especiales para iglesias con menos de 50 miembros. Contáctanos para conocer las opciones disponibles para tu congregación.",
  },
];

export function FaqSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-text-secondary">
            Todo lo que necesitas saber sobre Elav
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
