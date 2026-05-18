"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  variant?: "default" | "dark";
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  primaryHref?: string;
  secondaryCta?: string;
  secondaryHref?: string;
}

export function CtaSection({
  variant = "default",
  title = "Empieza hoy con 30 días gratis",
  subtitle = "Descubre cómo Elav puede transformar la gestión de tu iglesia. Sin compromiso, sin tarjeta de crédito.",
  primaryCta = "Empieza gratis",
  primaryHref = "/precios",
  secondaryCta,
  secondaryHref = "/contacto",
}: CtaSectionProps) {
  return (
    <section className={cn("py-24 lg:py-32 relative overflow-hidden", variant === "dark" ? "bg-zinc-900" : "bg-gradient-to-br from-[#7c3aed]/5 via-white to-[#f59e0b]/5")}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#7c3aed]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-[#f59e0b]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn("text-3xl font-bold tracking-tight sm:text-4xl", variant === "dark" ? "text-white" : "text-text-primary")}
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn("mt-4 text-lg leading-relaxed", variant === "dark" ? "text-zinc-400" : "text-text-secondary")}
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gradient" size="xl" asChild>
            <Link href={primaryHref}>{primaryCta}</Link>
          </Button>
          {secondaryCta && (
            <Button variant={variant === "dark" ? "secondary" : "outline"} size="xl" asChild>
              <Link href={secondaryHref}>{secondaryCta}</Link>
            </Button>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={cn("mt-6 text-xs", variant === "dark" ? "text-zinc-600" : "text-text-tertiary")}
        >
          Sin tarjeta de crédito &middot; Configuración en 5 minutos &middot; Soporte incluido
        </motion.p>
      </div>
    </section>
  );
}
