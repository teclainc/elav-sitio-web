"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group rounded-2xl border border-zinc-200/60 bg-white p-6 transition-all duration-300 hover:border-[#7c3aed]/30 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)]",
        className
      )}
    >
      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function ProblemCard({ icon, title, description, delay = 0 }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group rounded-2xl border border-red-100 bg-red-50/50 p-6 transition-all duration-300 hover:border-red-200"
    >
      <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </motion.div>
  );
}

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  popular?: boolean;
  variant?: "crm" | "website" | "maintenance";
}

export function PricingCard({ name, description, price, period, features, cta, popular, variant = "crm" }: PricingCardProps) {
  const borderColors = {
    crm: popular ? "border-[#7c3aed] ring-2 ring-[#7c3aed]/20" : "border-zinc-200/60",
    website: "border-zinc-200/60",
    maintenance: "border-zinc-200/60",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-2xl border bg-white p-8 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
        variant === "crm" && !popular && "hover:border-[#7c3aed]/30",
        borderColors[variant]
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] text-white text-xs font-semibold px-4 py-1 rounded-full">
          Más popular
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-bold text-text-primary">{name}</h3>
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-text-primary">{price}</span>
          {period && <span className="text-sm text-text-tertiary">{period}</span>}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary">
            <svg className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={cn(
          "w-full rounded-xl py-3 text-sm font-semibold transition-all duration-300",
          popular
            ? "bg-gradient-to-r from-[#7c3aed] to-[#8b5cf6] text-white hover:opacity-90 shadow-lg shadow-purple-500/25"
            : "bg-zinc-100 text-text-primary hover:bg-zinc-200"
        )}
      >
        {cta}
      </button>
    </motion.div>
  );
}
