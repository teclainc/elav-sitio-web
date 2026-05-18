import type { Metadata } from "next";
import { SectionWrapper, DashboardMockup, AnalyticsMockup, FeatureCard, CtaSection } from "@/components/sections";
import { Users, Shield, BarChart3, MessageSquare, TrendingUp, Smartphone, Heart, Calendar, DollarSign, Building2, Bell } from "lucide-react";

const iconCls = "h-5 w-5 text-[#7c3aed]";

export const metadata: Metadata = {
  title: "Plataforma",
  description: "Descubre el CRM completo para iglesias. Gestión de miembros, multi campus, finanzas, células, notificaciones y estadísticas en un solo lugar.",
  openGraph: {
    title: "Plataforma Elav — CRM para iglesias",
    description: "Gestión de miembros, multi campus, finanzas, células, notificaciones y estadísticas en un solo lugar.",
  },
};

export default function PlataformaPage() {
  return (
    <>
      <SectionWrapper variant="default" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Plataforma</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            El CRM que tu iglesia merece
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            Diseñado desde cero para iglesias. No es una hoja de Excel sofisticada ni un CRM corporativo adaptado. 
            Es la herramienta que necesitas para ser un buen administrador.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Gestión de miembros</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Toda la información de tu congregación en un solo lugar, organizada y siempre actualizada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard icon={<Users className={iconCls} />} title="Perfiles completos" description="Nombre, contacto, familia, fecha de conversión, bautismo, ministerio y notas pastorales." />
          <FeatureCard icon={<Heart className={iconCls} />} title="Seguimiento pastoral" description="Registra visitas, llamadas y consejería. Nunca pierdas el hilo de a quién estás acompañando." />
          <FeatureCard icon={<Smartphone className={iconCls} />} title="Check-in digital" description="Registro de asistencia rápido desde cualquier dispositivo. Sin papeles ni planillas." />
        </div>
        <DashboardMockup />
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Multi campus</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Administra múltiples ubicaciones desde un solo panel unificado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard icon={<Building2 className={iconCls} />} title="Campus independientes" description="Cada campus gestiona sus propios miembros, eventos y finanzas, todo visible desde la cuenta principal." />
          <FeatureCard icon={<Shield className={iconCls} />} title="Roles por campus" description="Define pastores y líderes por ubicación. Cada persona accede solo a la información que le corresponde." />
          <FeatureCard icon={<BarChart3 className={iconCls} />} title="Vista consolidada" description="Dashboard unificado con métricas de todos los campus. Compara, analiza y toma decisiones informadas." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Crecimiento celular</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Organiza tus células, casas de paz y grupos pequeños con herramientas diseñadas para la multiplicación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard icon={<Users className={iconCls} />} title="Estructura de células" description="Crea redes, zonas y distritos. Visualiza el árbol completo de tu estructura celular." />
          <FeatureCard icon={<TrendingUp className={iconCls} />} title="Métrica de multiplicación" description="Monitorea el crecimiento de cada célula. Identifica cuáles están listas para multiplicarse." />
          <FeatureCard icon={<Heart className={iconCls} />} title="Seguimiento de líderes" description="Capacitación, asistencias a reuniones de líderes y acompañamiento personalizado." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Finanzas</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Administración financiera clara y transparente para tu iglesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<DollarSign className={iconCls} />} title="Diezmos y ofrendas" description="Registro de ingresos con categorías. Visualiza tendencias de generosidad mensual." />
          <FeatureCard icon={<BarChart3 className={iconCls} />} title="Reportes financieros" description="Balances, ingresos vs gastos, proyecciones. Todo lo que necesitas para rendir cuentas." />
          <FeatureCard icon={<Shield className={iconCls} />} title="Transparencia" description="Múltiples niveles de acceso financiero. Ideal para juntas directivas y tesorería." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Formularios inteligentes</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Conecta con nuevas personas y recibe información valiosa automáticamente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<Smartphone className={iconCls} />} title="Primer contacto" description="Formularios de visitantes que se integran directamente al CRM. Haz seguimiento automático." />
          <FeatureCard icon={<MessageSquare className={iconCls} />} title="Peticiones de oración" description="Recibe y organiza peticiones de oración. Asígnelas a pastores o intercesores." />
          <FeatureCard icon={<Users className={iconCls} />} title="Inscripción a eventos" description="Formularios con registro y cupo limitado. Notificaciones automáticas de confirmación." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Notificaciones</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Comunicación instantánea con toda tu congregación.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard icon={<Bell className={iconCls} />} title="Push notifications" description="Envía anuncios y recordatorios al instante. Segmenta por campus, ministerio o célula." />
          <FeatureCard icon={<Calendar className={iconCls} />} title="Recordatorios automáticos" description="Recordatorios de eventos, servicios y reuniones. Reduce las inasistencias." />
          <FeatureCard icon={<MessageSquare className={iconCls} />} title="Mensajes dirigidos" description="Comunicación personalizada por grupo. Anuncios generales o mensajes pastorales específicos." />
        </div>
        <DashboardMockup />
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Analytics</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Visualiza el crecimiento y la salud de tu iglesia con dashboards intuitivos.
          </p>
        </div>
        <AnalyticsMockup />
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Roles y permisos</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Seguridad y control de acceso para equipos de cualquier tamaño.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<Shield className={iconCls} />} title="Pastor principal" description="Acceso completo a todos los campus, finanzas, reportes y configuraciones." />
          <FeatureCard icon={<Users className={iconCls} />} title="Líderes de ministerio" description="Acceso a los miembros de su ministerio, eventos y comunicación de su equipo." />
          <FeatureCard icon={<Building2 className={iconCls} />} title="Administradores" description="Gestión operativa sin acceso a datos sensibles. Ideal para staff administrativo." />
        </div>
      </SectionWrapper>

      <CtaSection
        title="¿Listo para organizar tu iglesia?"
        subtitle="Prueba Elav gratis durante 30 días y descubre lo simple que puede ser administrar tu iglesia."
        primaryCta="Empieza gratis"
        primaryHref="/precios"
        secondaryCta="Solicitar demo"
        secondaryHref="/contacto"
      />
    </>
  );
}
