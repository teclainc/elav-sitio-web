import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const footerLinks = {
  producto: [
    { href: "/plataforma", label: "Plataforma" },
    { href: "/sitios-web", label: "Sitios Web" },
    { href: "/precios", label: "Precios" },
  ],
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "#", label: "Privacidad" },
    { href: "#", label: "Términos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo-transparente.png"
                alt="Elav"
                width={140}
                height={35}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed">
              El corazón inteligente de tu iglesia. Plataforma SaaS que centraliza la presencia digital, comunicación y administración en un solo lugar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Producto</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Empresa</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary">Legal</h3>
            <ul className="mt-3 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-secondary hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-tertiary">
            &copy; {new Date().getFullYear()} Elav. Todos los derechos reservados.
          </p>
          <p className="text-xs text-text-tertiary flex items-center gap-1">
            Hecho con propósito <Heart className="h-3 w-3 text-red-400 fill-red-400" /> para iglesias modernas
          </p>
        </div>
      </div>
    </footer>
  );
}
