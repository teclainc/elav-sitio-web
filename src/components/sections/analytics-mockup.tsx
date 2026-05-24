"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Heart, DollarSign, Activity, Home } from "lucide-react";

export function AnalyticsMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-5xl"
    >
      <div className="rounded-2xl border border-zinc-200/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[11px] font-medium text-zinc-400 ml-2">Estadísticas y Crecimiento</span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-6 text-xs">
            <span className="px-3 py-1 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] font-medium">12 meses</span>
            <span className="px-3 py-1 rounded-full text-zinc-500">6 meses</span>
            <span className="px-3 py-1 rounded-full text-zinc-500">30 días</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
            {[
              { icon: Users, label: "Miembros", value: "1,284", change: "+12%", color: "#7c3aed" },
              { icon: Activity, label: "Asistencia", value: "76%", change: "+8%", color: "#8b5cf6" },
              { icon: Home, label: "Células", value: "48", change: "+5", color: "#f59e0b" },
              { icon: Heart, label: "Participación", value: "64%", change: "+15%", color: "#f97316" },
              { icon: DollarSign, label: "Donaciones", value: "$12.4k", change: "+22%", color: "#06b6d4" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-zinc-100 p-4"
              >
                <div className="h-8 w-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: `${stat.color}15` }}>
                  <stat.icon className="h-4 w-4" style={{ color: stat.color }} />
                </div>
                <p className="text-xs text-zinc-500">{stat.label}</p>
                <p className="text-lg font-bold text-zinc-800">{stat.value}</p>
                <span className="text-[11px] font-medium text-emerald-600">{stat.change}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-zinc-100 p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-[#7c3aed]" />
                <p className="text-sm font-semibold text-zinc-700">Crecimiento de membresía</p>
              </div>
              <div className="h-40 flex items-end gap-2">
                {[30, 35, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05, duration: 0.5 }}
                      className="w-full rounded-t-sm bg-gradient-to-t from-[#7c3aed]/80 to-[#a78bfa]/40"
                    />
                    <span className="text-[9px] text-zinc-400">
                      {["E","F","M","A","M","J","J","A","S","O","N","D"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-zinc-100 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-[#f59e0b]" />
                <p className="text-sm font-semibold text-zinc-700">Distribución por campus</p>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Campus Central", value: 62, color: "#7c3aed" },
                  { label: "Campus Norte", value: 24, color: "#8b5cf6" },
                  { label: "Campus Sur", value: 14, color: "#f59e0b" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-zinc-600">{item.label}</span>
                      <span className="text-zinc-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -top-8 -right-8 h-36 w-36 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}
