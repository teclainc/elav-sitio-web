"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe, Zap, Search } from "lucide-react";

export function WebsitesMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-5xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-zinc-200/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-100 bg-zinc-50/50">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center gap-2 ml-4 text-xs text-zinc-400">
                <Globe className="h-3 w-3" />
                iglesiacentrodevida.org
              </div>
            </div>

            <div className="p-0">
              <div className="bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#7c3aed] h-32 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                <div className="relative text-center">
                  <p className="text-white/70 text-xs font-medium tracking-widest uppercase mb-1">Bienvenido a</p>
                  <h2 className="text-white text-2xl font-bold">Iglesia Centro de Vida</h2>
                  <p className="text-white/60 text-xs mt-1">Una comunidad de fe, amor y crecimiento</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-3 p-4">
                {[
                  { icon: Monitor, label: "Inicio", active: true },
                  { icon: Users, label: "Conócenos" },
                  { icon: Calendar, label: "Eventos" },
                  { icon: Share2, label: "Conectar" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center gap-1 p-2 rounded-lg text-center ${
                      item.active ? "bg-[#7c3aed]/10 text-[#7c3aed]" : "text-zinc-400"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-[10px] font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="px-4 pb-4 space-y-2">
                <div className="rounded-lg bg-zinc-50 p-3">
                  <p className="text-[11px] font-semibold text-zinc-700">Próximo servicio</p>
                  <p className="text-xs text-zinc-500 mt-0.5">Domingo 24 de Mayo — 9:00 AM y 11:30 AM</p>
                </div>
                <div className="rounded-lg bg-gradient-to-r from-[#7c3aed]/5 to-[#f59e0b]/5 p-3">
                  <p className="text-[11px] font-semibold text-zinc-700">Serie actual</p>
                  <p className="text-xs text-zinc-500 mt-0.5">&quot;Caminando en propósito&quot; — Nuevo mensaje cada semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-zinc-200/60 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="h-4 w-4 text-amber-500" />
              <p className="text-xs font-semibold text-zinc-700">Velocidad</p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-emerald-600">98</span>
              <span className="text-xs text-zinc-400 mb-1">/100</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Google PageSpeed</p>
            <div className="mt-2 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="h-full bg-emerald-500 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-zinc-200/60 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="h-4 w-4 text-[#7c3aed]" />
              <p className="text-xs font-semibold text-zinc-700">Responsive</p>
            </div>
            <div className="flex justify-center gap-4">
              <div className="h-16 w-10 rounded-md border-2 border-zinc-200 flex items-center justify-center">
                <div className="h-8 w-6 rounded-sm bg-[#7c3aed]/20" />
              </div>
              <div className="h-16 w-14 rounded-md border-2 border-[#7c3aed] flex items-center justify-center bg-[#7c3aed]/5">
                <div className="h-10 w-9 rounded-sm bg-[#7c3aed]/20" />
              </div>
              <div className="h-16 w-20 rounded-md border-2 border-zinc-200 flex items-center justify-center">
                <div className="h-12 w-16 rounded-sm bg-zinc-100" />
              </div>
            </div>
            <p className="text-[11px] text-zinc-500 text-center mt-2">Adaptable a cualquier dispositivo</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-xl border border-zinc-200/60 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-4"
          >
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-4 w-4 text-[#f59e0b]" />
              <p className="text-xs font-semibold text-zinc-700">SEO Optimizado</p>
            </div>
            <div className="space-y-1.5">
              <div className="h-2 bg-zinc-100 rounded w-full" />
              <div className="h-2 bg-zinc-100 rounded w-3/4" />
              <div className="h-2 bg-[#7c3aed]/20 rounded w-1/2" />
            </div>
            <p className="text-[11px] text-zinc-500 mt-2">Meta tags, OpenGraph, schema markup</p>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-6 -left-6 h-32 w-32 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}

function Users(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function Share2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}
