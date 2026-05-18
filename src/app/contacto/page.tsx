import type { Metadata } from "next";
import { SectionWrapper } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos. Solicita una demo personalizada de Elav, la plataforma para iglesias. Estamos aquí para ayudarte.",
  openGraph: {
    title: "Contacto — Elav",
    description: "Solicita una demo personalizada de Elav. Estamos aquí para ayudarte.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <SectionWrapper variant="default" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Contacto</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Hablemos
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            Cuéntanos sobre tu iglesia. Estamos aquí para escucharte y ayudarte a encontrar la mejor solución.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">Envíanos un mensaje</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="church" className="block text-sm font-medium text-text-primary mb-1.5">
                  Nombre de tu iglesia
                </label>
                <input
                  type="text"
                  id="church"
                  name="church"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all"
                  placeholder="Iglesia Centro de Vida"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-1.5">
                  Tu rol en la iglesia
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>Selecciona tu rol</option>
                  <option value="pastor">Pastor principal</option>
                  <option value="pastor-asociado">Pastor asociado</option>
                  <option value="lider">Líder de ministerio</option>
                  <option value="admin">Administrador</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu iglesia y cómo podemos ayudarte..."
                />
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">Otras formas de contactarnos</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-[#7c3aed]" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">WhatsApp</h3>
                  <p className="text-sm text-text-secondary mt-1">Escríbenos por WhatsApp para consultas rápidas.</p>
                  <a href="#" className="text-sm font-medium text-[#7c3aed] hover:underline mt-1 inline-block">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#7c3aed]" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Email</h3>
                  <p className="text-sm text-text-secondary mt-1">Para consultas detalladas o propuestas.</p>
                  <a href="#" className="text-sm font-medium text-[#7c3aed] hover:underline mt-1 inline-block">
                    hola@elav.app
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#7c3aed]" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Horario de atención</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Lunes a Viernes: 9:00 AM — 6:00 PM (GMT-6)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#7c3aed]" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">Ubicación</h3>
                  <p className="text-sm text-text-secondary mt-1">
                    Operamos desde Latinoamérica, sirviendo a iglesias en todo el mundo hispanohablante.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#7c3aed]/5 to-[#f59e0b]/5 border border-zinc-200/60">
              <h3 className="font-semibold text-text-primary mb-2">¿Prefieres una demo personalizada?</h3>
              <p className="text-sm text-text-secondary mb-4">
                Agenda una videollamada de 30 minutos. Te mostramos la plataforma y respondemos todas tus preguntas.
              </p>
              <Button variant="gradient" size="sm" asChild>
                <a href="#">Agendar demo</a>
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
