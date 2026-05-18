"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "dark" | "gradient";
}

export function SectionWrapper({ children, className, id, variant = "default" }: SectionWrapperProps) {
  const bgClasses = {
    default: "bg-white",
    alt: "bg-zinc-50/50",
    dark: "bg-zinc-900 text-white",
    gradient: "bg-gradient-to-br from-[#7c3aed]/5 via-white to-[#f59e0b]/5",
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-20 lg:py-28", bgClasses[variant], className)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}
