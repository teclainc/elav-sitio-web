"use client";

import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Building2, Activity } from "lucide-react";

export function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto max-w-5xl"
    >
      <div className="rounded-2xl border border-zinc-200/60 bg-white shadow-[0_8px_40px_rgba(0,0,0,0.06)] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-zinc-100 bg-zinc-50/50">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] font-medium text-zinc-400">Elav — Panel de Iglesia</span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Dashboard</p>
              <h3 className="text-lg font-semibold text-zinc-800">Iglesia Centro de Vida</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 bg-zinc-100 rounded-lg px-3 py-1.5">
              <Calendar className="h-3.5 w-3.5" />
              Mayo 2026
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { icon: Users, label: "Miembros", value: "1,284", change: "+12%", color: "text-[#7c3aed]" },
              { icon: Building2, label: "Campus", value: "3", change: "Activos", color: "text-[#8b5cf6]" },
              { icon: Activity, label: "Células", value: "48", change: "+5%", color: "text-[#f59e0b]" },
              { icon: TrendingUp, label: "Asistencia", value: "842", change: "+8%", color: "text-[#f97316]" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4"
              >
                <stat.icon className={`h-4 w-4 mb-2 ${stat.color}`} />
                <p className="text-xs text-zinc-500">{stat.label}</p>
                <p className="text-xl font-bold text-zinc-800 mt-0.5">{stat.value}</p>
                <span className="text-[11px] font-medium text-emerald-600">{stat.change}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="md:col-span-2 rounded-xl border border-zinc-100 bg-white p-5"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-zinc-700">Crecimiento de miembros</p>
                <span className="text-[11px] text-zinc-400">Últimos 6 meses</span>
              </div>
              <div className="h-32 flex items-end gap-2">
                {[40, 55, 48, 70, 65, 85].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                      className="w-full rounded-t-md bg-gradient-to-t from-[#7c3aed]/80 to-[#a78bfa]/60"
                    />
                    <span className="text-[10px] text-zinc-400">{["D","E","F","M","A","M"][i]}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl border border-zinc-100 bg-white p-5"
            >
              <p className="text-sm font-semibold text-zinc-700 mb-4">Eventos próximos</p>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Servicio Dominical", date: "Dom 9:00 AM", color: "bg-[#7c3aed]/10 text-[#7c3aed]" },
                  { name: "Reunión de líderes", date: "Lun 7:00 PM", color: "bg-[#f59e0b]/10 text-[#f59e0b]" },
                  { name: "Ensayo de alabanza", date: "Jue 6:00 PM", color: "bg-[#8b5cf6]/10 text-[#8b5cf6]" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${event.color.split(" ")[0]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-zinc-700 truncate">{event.name}</p>
                      <p className="text-[10px] text-zinc-400">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -top-10 -right-10 h-40 w-40 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 h-40 w-40 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}
