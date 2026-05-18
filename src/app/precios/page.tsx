import type { Metadata } from "next";
import { SectionWrapper, PricingCard, CtaSection, FaqSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Precios",
  description: "Planes de CRM y sitios web para iglesias. Desde $29/mes. Prueba gratis 30 días sin tarjeta de crédito. Precios transparentes y sin costos ocultos.",
  openGraph: {
    title: "Precios Elav — CRM y Sitios Web para iglesias",
    description: "Planes desde $29/mes. Prueba gratis 30 días. Sin tarjeta de crédito. Precios transparentes.",
  },
};

export default function PreciosPage() {
  return (
    <>
      <SectionWrapper variant="default" className="pt-32 lg:pt-36">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Precios</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Planes simples y transparentes
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            Sin costos ocultos. Sin contratos forzosos. Prueba gratis durante 30 días. Cancela cuando quieras.
          </p>
        </div>
      </SectionWrapper>

      {/* CRM PRICING */}
      <SectionWrapper variant="alt">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">CRM</h2>
          <p className="mt-2 text-text-secondary">Plataforma de gestión para tu iglesia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            name="Start"
            description="Para iglesias que están comenzando a organizarse digitalmente."
            price="$29"
            period="/mes"
            features={[
              "Hasta 150 miembros",
              "2 administradores",
              "1 campus",
              "Formularios de contacto",
              "Calendario de eventos",
              "Estadísticas básicas",
              "Soporte por chat",
            ]}
            cta="Empieza gratis"
            variant="crm"
          />
          <PricingCard
            name="Grow"
            description="Para iglesias en crecimiento con necesidades más completas."
            price="$79"
            period="/mes"
            features={[
              "Hasta 800 miembros",
              "8 administradores",
              "Automatizaciones",
              "Finanzas integradas",
              "Crecimiento celular",
              "Analytics avanzadas",
              "Soporte prioritario",
            ]}
            cta="Empieza gratis"
            popular
            variant="crm"
          />
          <PricingCard
            name="Advance"
            description="Para iglesias con múltiples campus y equipos grandes."
            price="$179"
            period="/mes"
            features={[
              "Multi iglesia / multi campus",
              "Administradores ilimitados",
              "Onboarding personalizado",
              "Soporte prioritario 24/7",
              "API de integración",
              "Reportes personalizados",
              "Gerente de cuenta dedicado",
            ]}
            cta="Empieza gratis"
            variant="crm"
          />
        </div>
      </SectionWrapper>

      {/* WEBSITE PRICING */}
      <SectionWrapper variant="default">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">Sitios Web</h2>
          <p className="mt-2 text-text-secondary">Presencia digital profesional para tu iglesia</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PricingCard
            name="Landing Start"
            description="Una página de inicio profesional con información esencial de tu iglesia."
            price="$390"
            features={[
              "Diseño responsive moderno",
              "Hasta 5 secciones",
              "Formulario de contacto",
              "Integración con redes sociales",
              "Optimización SEO básica",
              "1 ronda de revisiones",
            ]}
            cta="Solicitar"
            variant="website"
          />
          <PricingCard
            name="Website Pro"
            description="Sitio web completo con páginas para todos tus ministerios."
            price="$990"
            popular
            features={[
              "Hasta 10 páginas",
              "Diseño personalizado",
              "Blog / Sermones",
              "Formularios integrados CRM",
              "SEO avanzado",
              "3 rondas de revisiones",
              "Capacitación incluida",
            ]}
            cta="Solicitar"
            variant="website"
          />
          <PricingCard
            name="Website Custom"
            description="Solución a medida para iglesias con necesidades específicas."
            price="Desde $1,900"
            features={[
              "Páginas ilimitadas",
              "Diseño 100% personalizado",
              "Funcionalidades a medida",
              "Integración completa CRM",
              "SEO y analíticas avanzadas",
              "Soporte post-lanzamiento",
              "Estrategia de contenido",
            ]}
            cta="Solicitar"
            variant="website"
          />
        </div>
      </SectionWrapper>

      {/* MAINTENANCE PRICING */}
      <SectionWrapper variant="alt">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold tracking-tight text-text-primary">Mantenimiento</h2>
          <p className="mt-2 text-text-secondary">Mantén tu sitio web siempre actualizado y seguro</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <PricingCard
            name="Care Basic"
            description="Mantenimiento esencial para tu sitio web."
            price="$29"
            period="/mes"
            features={[
              "Hosting incluido",
              "Actualizaciones de seguridad",
              "Backups semanales",
              "SSL gratuito",
              "Soporte por email",
              "1 cambio menor al mes",
            ]}
            cta="Contratar"
            variant="maintenance"
          />
          <PricingCard
            name="Care Active"
            description="Mantenimiento completo con actualizaciones de contenido."
            price="$89"
            period="/mes"
            popular
            features={[
              "Todo lo de Care Basic",
              "Actualizaciones de contenido",
              "Cambios ilimitados",
              "Soporte prioritario 24h",
              "Reporte mensual de analytics",
              "Optimización SEO continua",
            ]}
            cta="Contratar"
            variant="maintenance"
          />
        </div>
      </SectionWrapper>

      <FaqSection />

      <CtaSection
        title="Empieza gratis durante 30 días"
        subtitle="Sin tarjeta de crédito. Sin compromiso. Descubre por ti mismo cómo Elav puede ayudar a tu iglesia."
        primaryCta="Empieza gratis ahora"
        primaryHref="#"
        secondaryCta="Hablar con ventas"
        secondaryHref="/contacto"
      />
    </>
  );
}
