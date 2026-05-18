import { SectionWrapper, DashboardMockup, WebsitesMockup, AnalyticsMockup, FeatureCard, ProblemCard, PricingCard, CtaSection, FaqSection } from "@/components/sections";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, BarChart3, MessageSquare, AlertTriangle, Smartphone, TrendingUp, Shield } from "lucide-react";
import Link from "next/link";

const iconCls = "h-5 w-5 text-[#7c3aed]";
const problemIconCls = "h-5 w-5 text-red-500";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-[#1a1030]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/20 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 h-[400px] w-[400px] rounded-full bg-[#f59e0b]/15 blur-[100px]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-[#8b5cf6]/10 blur-[80px]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              La plataforma que conecta y organiza tu iglesia
            </h1>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Sitio web, gestión de miembros, comunicación y administración en un solo lugar. <br />
              Sé un buen administrador de lo que Dios te ha encomendado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="gradient" size="xl" asChild>
                <Link href="/precios">Empieza gratis durante 30 días</Link>
              </Button>
              <Button variant="secondary" size="xl" className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border-0" asChild>
                <Link href="/plataforma">
                  Ver plataforma
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 text-sm text-zinc-600">
              Sin tarjeta de crédito &middot; Configuración en 5 minutos &middot; Cancela cuando quieras
            </p>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">El problema</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            ¿Tu iglesia sufre de esto?
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            La mayoría de iglesias operan con herramientas dispersas, procesos manuales y poca visibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard icon={<AlertTriangle className={problemIconCls} />} title="Miembros desinformados" description="La comunicación depende de cadenas de WhatsApp donde los anuncios se pierden y la gente no se entera." delay={0} />
          <ProblemCard icon={<Users className={problemIconCls} />} title="Gestión manual" description="Listas en Excel, papeles, notas sueltas. La información de los miembros está dispersa y desactualizada." delay={0.1} />
          <ProblemCard icon={<Globe className={problemIconCls} />} title="Poca presencia digital" description="No tener sitio web o tener uno anticuado hace que la iglesia sea invisible para nuevas familias." delay={0.2} />
          <ProblemCard icon={<MessageSquare className={problemIconCls} />} title="Dependencia de WhatsApp" description="Grupos saturados, mensajes ignorados, información importante que se pierde en el ruido digital." delay={0.3} />
          <ProblemCard icon={<TrendingUp className={problemIconCls} />} title="Falta de seguimiento" description="Sin datos claros, es difícil saber quién dejó de asistir, quién necesita ayuda o cómo están las células." delay={0.4} />
          <ProblemCard icon={<Smartphone className={problemIconCls} />} title="Herramientas dispersas" description="Una app para donaciones, otra para eventos, Excel para miembros. Nada está conectado ni centralizado." delay={0.5} />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Plataforma</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Todo lo que tu iglesia necesita
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Un CRM diseñado específicamente para iglesias. No es una herramienta genérica adaptada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <FeatureCard icon={<Users className={iconCls} />} title="Gestión de miembros" description="Registro completo, perfiles, familias, historial de asistencia y notas pastorales." />
          <FeatureCard icon={<Globe className={iconCls} />} title="Multi campus" description="Administra múltiples ubicaciones desde un solo panel. Cada campus con sus propios datos." />
          <FeatureCard icon={<Shield className={iconCls} />} title="Roles y permisos" description="Pastores, líderes, administradores. Cada rol ve solo lo que necesita." />
          <FeatureCard icon={<BarChart3 className={iconCls} />} title="Estadísticas y reportes" description="Dashboard visual con métricas de crecimiento, asistencia, células y más." />
          <FeatureCard icon={<Users className={iconCls} />} title="Crecimiento celular" description="Organiza células, casas de paz, grupos pequeños. Seguimiento de multiplicación." />
          <FeatureCard icon={<TrendingUp className={iconCls} />} title="Finanzas integradas" description="Registro de diezmos, ofrendas y donaciones. Reportes financieros claros." />
          <FeatureCard icon={<MessageSquare className={iconCls} />} title="Notificaciones push" description="Envía anuncios, recordatorios y mensajes a toda tu congregación al instante." />
          <FeatureCard icon={<Smartphone className={iconCls} />} title="Formularios inteligentes" description="Formularios de primer contacto, registro de visitas, peticiones de oración." />
        </div>

        <DashboardMockup />
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Sitios Web</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Presencia digital que representa tu iglesia
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Sitios web modernos, rápidos y conectados directamente con tu CRM. No necesitas saber de tecnología.
          </p>
        </div>

        <WebsitesMockup />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <FeatureCard icon={<Globe className={iconCls} />} title="Optimizado para SEO" description="Aparece en Google cuando las familias busquen una iglesia en tu zona." />
          <FeatureCard icon={<Smartphone className={iconCls} />} title="100% responsive" description="Se ve perfecto en celular, tablet y computadora. Donde sea que te busquen." />
          <FeatureCard icon={<Shield className={iconCls} />} title="Conectado al CRM" description="Los formularios de contacto y registro se integran directamente con tu base de miembros." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Estadísticas</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Toma decisiones con datos reales
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Visualiza el crecimiento, la asistencia y la salud de tu iglesia con dashboards intuitivos y actualizados.
          </p>
        </div>

        <AnalyticsMockup />
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Precios</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            Planes que crecen con tu iglesia
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Sin costos ocultos. Prueba gratis por 30 días. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <PricingCard
            name="Start"
            description="Para iglesias que están comenzando a organizarse digitalmente."
            price="$29"
            period="/mes"
            features={["Hasta 150 miembros", "2 administradores", "1 campus", "Formularios de contacto", "Calendario de eventos", "Estadísticas básicas"]}
            cta="Empieza gratis"
            variant="crm"
          />
          <PricingCard
            name="Grow"
            description="Para iglesias en crecimiento con necesidades más completas."
            price="$79"
            period="/mes"
            features={["Hasta 800 miembros", "8 administradores", "Automatizaciones", "Finanzas integradas", "Crecimiento celular", "Analytics avanzadas"]}
            cta="Empieza gratis"
            popular
            variant="crm"
          />
          <PricingCard
            name="Advance"
            description="Para iglesias con múltiples campus y equipos grandes."
            price="$179"
            period="/mes"
            features={["Multi iglesia / multi campus", "Administradores ilimitados", "Onboarding personalizado", "Soporte prioritario", "API de integración", "Reportes personalizados"]}
            cta="Empieza gratis"
            variant="crm"
          />
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/precios" className="inline-flex items-center gap-2">
              Ver todos los planes
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      <FaqSection />

      <CtaSection
        title="Empieza hoy con 30 días gratis"
        subtitle="Descubre cómo Elav puede transformar la gestión de tu iglesia. Sin compromiso, sin tarjeta de crédito."
        primaryCta="Empieza gratis"
        primaryHref="/precios"
        secondaryCta="Solicitar demo"
        secondaryHref="/contacto"
      />
    </>
  );
}
