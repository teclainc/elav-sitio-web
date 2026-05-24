import type { Metadata } from "next";
import { SectionWrapper, FeatureCard, CtaSection } from "@/components/sections";
import { Heart, Target, Eye, Users } from "lucide-react";

const iconCls = "h-5 w-5 text-[#7c3aed]";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce al equipo detrás de Elav. Tecnología con propósito pastoral. Ayudamos a iglesias modernas a ser mejores administradores.",
  openGraph: {
    title: "Nosotros — Elav",
    description: "Conoce al equipo detrás de Elav. Tecnología con propósito pastoral para iglesias modernas.",
  },
};

export default function NosotrosPage() {
  return (
    <>
      <SectionWrapper variant="default" className="pt-32 lg:pt-36">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[#7c3aed] uppercase tracking-wider">Nosotros</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Tecnología con propósito pastoral
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-2xl">
            No somos una corporación gigante. Somos un equipo de personas que aman a la iglesia y creen que la 
            tecnología bien usada puede ayudar a ser mejores administradores de lo que Dios nos ha dado.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">¿Por qué nació Elav?</h2>
            <div className="mt-6 flex flex-col gap-4 text-text-secondary leading-relaxed">
              <p>
                Vimos de primera mano cómo las iglesias luchan con herramientas que no fueron diseñadas para ellas. 
                Pastores usando Excel para llevar membresías, líderes manejando todo por WhatsApp, finanzas en cuadernos 
                y comunicación que nunca llega a todos.
              </p>
              <p>
                Hablamos con más de 200 pastores y líderes en Latinoamérica. Escuchamos sus dolores, sus necesidades 
                y sus sueños. La conclusión fue clara: necesitaban una herramienta que entendiera cómo funciona una 
                iglesia de verdad.
              </p>
              <p>
                Así nació Elav. No como un software corporativo adaptado, sino como una plataforma diseñada desde 
                cero para la realidad de las iglesias modernas.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-gradient-to-br from-[#7c3aed]/10 via-white to-[#f59e0b]/10 border border-zinc-200/60 p-8">
              <div className="flex flex-col gap-6">
                {[
                  { icon: Heart, title: "Nuestra pasión", desc: "Ayudar a las iglesias a ser más efectivas en su misión a través de herramientas tecnológicas bien diseñadas." },
                  { icon: Target, title: "Nuestro enfoque", desc: "Crear software que se sienta humano, cercano y fácil de usar. La tecnología debe servir, no complicar." },
                  { icon: Eye, title: "Nuestra visión", desc: "Ser la plataforma de referencia para iglesias que quieren administrarse con excelencia en la era digital." },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-[#7c3aed]/10 to-[#f59e0b]/10 flex items-center justify-center">
                        <ItemIcon className="h-5 w-5 text-[#7c3aed]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">{item.title}</h3>
                        <p className="text-sm text-text-secondary mt-1">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-[#7c3aed]/10 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">Nuestros valores</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Lo que guía cada decisión que tomamos al construir Elav.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard icon={<Heart className={iconCls} />} title="Propósito antes que producto" description="No vendemos software, ayudamos a iglesias a cumplir su misión. Si nuestra herramienta no sirve a ese propósito, no la construimos." />
          <FeatureCard icon={<Users className={iconCls} />} title="Cercanía real" description="Conocemos a nuestros clientes por nombre. Entendemos sus desafíos porque hemos estado en sus zapatos." />
          <FeatureCard icon={<Eye className={iconCls} />} title="Excelencia con humildad" description="Buscamos la excelencia técnica sin perder la sencillez. Hacer las cosas bien no significa hacerlas complicadas." />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alt">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">No somos una corporación</h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
            Somos un equipo pequeño, apasionado y comprometido. Esto es lo que creemos.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-gradient-to-br from-[#7c3aed]/5 via-white to-[#f59e0b]/5 border border-zinc-200/60 p-8 lg:p-10">
            <div className="flex flex-col gap-5 text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Creemos en la iglesia local.</strong> Es la esperanza del mundo. 
                Y creemos que merece herramientas a la altura de su llamado, no las sobras tecnológicas que nadie más quiere usar.
              </p>
              <p>
                <strong className="text-text-primary">Creemos en la buena administración.</strong> Cada miembro, cada 
                recurso, cada ministerio es un encargo de Dios. Administrarlo bien es un acto de fidelidad.
              </p>
              <p>
                <strong className="text-text-primary">Creemos que la tecnología puede ser pastoral.</strong> No para 
                reemplazar el contacto humano, sino para potenciarlo. Para que los pastores tengan más tiempo para 
                lo que realmente importa: las personas.
              </p>
              <p>
                <strong className="text-text-primary">Creemos en la transparencia.</strong> Precios claros, sin 
                letra pequeña. Producto honesto, sin promesas falsas. Si no podemos ayudarte, te lo diremos.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CtaSection
        title="¿Quieres conocer más sobre Elav?"
        subtitle="Agenda una demo personalizada y descubre cómo podemos ayudar a tu iglesia."
        primaryCta="Solicitar demo"
        primaryHref="/contacto"
        secondaryCta="Ver plataforma"
        secondaryHref="/plataforma"
      />
    </>
  );
}
