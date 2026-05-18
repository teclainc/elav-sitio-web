import type { Metadata } from "next";
import { SectionWrapper, WebsitesMockup, FeatureCard, CtaSection } from "@/components/sections";
import { Globe, Smartphone, Zap, Search, Shield, Palette, Code, Cloud, Users } from "lucide-react";

const iconCls = "h-5 w-5 text-[#7c3aed]";

export const metadata: Metadata = {
  title: "Sitios Web",
  description: "Sitios web modernos para iglesias. Diseño profesional, rápido, responsive e integrado con tu CRM. Presencia digital que conecta con tu comunidad.",
  openGraph: {
    title: "Sitios Web para Iglesias — Elav",
    description: "Sitios web modernos, rápidos, responsive e integrados con tu CRM. Presencia digital profesional para tu iglesia.",
  },
};

export default function SitiosWebPage() {
  return (
    <>
      <SectionWrapper variant="default" className="pt-32 lg:pt-36">
        <div className="max-w-3xl mb-16">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Sitios web</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Tu iglesia merece una presencia digital extraordinaria
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            Sitios web modernos, rápidos y diseñados específicamente para iglesias. Conectados con tu CRM para que todo fluya sin esfuerzo.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Así se ven</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Diseño limpio, profesional y enfocado en conectar con las personas.
          </p>
        </div>
        <WebsitesMockup />
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">¿Por qué un sitio web profesional?</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            El 87% de las personas busca en internet antes de visitar una iglesia. ¿Te van a encontrar?
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FeatureCard icon={<Search className={iconCls} />} title="SEO optimizado" description="Aparece en los primeros resultados cuando alguien busque 'iglesia cerca de mí' o 'iglesia en [tu ciudad]'." delay={0} />
          <FeatureCard icon={<Smartphone className={iconCls} />} title="100% responsive" description="Más del 70% de visitas vienen de teléfonos. Tu sitio se verá perfecto en cualquier pantalla." delay={0.1} />
          <FeatureCard icon={<Zap className={iconCls} />} title="Velocidad superior" description="Puntuación 95+ en Google PageSpeed. Los sitios rápidos retienen más visitantes y rankean mejor." delay={0.2} />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Diseñado para iglesias</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            No es una plantilla genérica. Cada elemento está pensado para comunicar el corazón de tu iglesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={<Globe className={iconCls} />} title="Página de inicio impactante" description="Hero section con video o imagen, bienvenida cálida y llamado claro a la acción." />
          <FeatureCard icon={<Users className={iconCls} />} title="Sección de ministerios" description="Muestra todos tus ministerios con información clara para que las personas se conecten." />
          <FeatureCard icon={<Palette className={iconCls} />} title="Personalización total" description="Colores, tipografías y estilos que reflejan la identidad única de tu iglesia." />
          <FeatureCard icon={<Cloud className={iconCls} />} title="Sermones y recursos" description="Biblioteca de sermones, notas y recursos descargables para tu congregación." />
          <FeatureCard icon={<Smartphone className={iconCls} />} title="Formularios integrados" description="Formularios de contacto, registro de visitas y peticiones conectados al CRM automáticamente." />
          <FeatureCard icon={<Code className={iconCls} />} title="Código moderno y seguro" description="Desarrollado con Next.js. Rápido, seguro y fácil de mantener. Sin plugins pesados ni vulnerabilidades." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Conectado con tu CRM</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            La integración más valiosa. Tu sitio web no es solo una vitrina, es una herramienta de crecimiento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<Users className={iconCls} />} title="Registro automático" description="Cuando alguien llena un formulario en tu sitio, se crea automáticamente un perfil en tu CRM." />
          <FeatureCard icon={<Shield className={iconCls} />} title="Datos centralizados" description="No más exportar e importar datos. Todo fluye entre tu sitio web y tu base de miembros." />
          <FeatureCard icon={<Search className={iconCls} />} title="Seguimiento inteligente" description="Identifica visitantes recurrentes y facilita el seguimiento pastoral desde el primer contacto." />
        </div>
      </SectionWrapper>

      <CtaSection
        title="¿Listo para tener un sitio web extraordinario?"
        subtitle="Empieza hoy con una consultoría gratuita. Te ayudamos a definir el sitio perfecto para tu iglesia."
        primaryCta="Solicitar demo"
        primaryHref="/contacto"
        secondaryCta="Ver precios"
        secondaryHref="/precios"
      />
    </>
  );
}
