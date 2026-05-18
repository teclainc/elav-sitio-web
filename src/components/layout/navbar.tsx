"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/plataforma", label: "Plataforma" },
  { href: "/sitios-web", label: "Sitios Web" },
  { href: "/precios", label: "Precios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const opacity = Math.min(1, Math.max(0, (y - 20) / 80));
      setScrollOpacity(opacity);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navOpacity = isHome ? scrollOpacity : 1;

  const blend = (start: number, end: number) =>
    Math.round(start + (end - start) * navOpacity);

  const bgColor = `rgba(255, 255, 255, ${(navOpacity * 0.85).toFixed(2)})`;
  const borderColor = `rgba(228, 228, 231, ${(navOpacity * 0.6).toFixed(2)})`;
  const shadowOpacity = (navOpacity * 0.04).toFixed(2);
  const blurAmount = navOpacity > 0.05 ? `${(navOpacity * 12).toFixed(1)}px` : "0px";

  const textSecondary = `rgb(${blend(255, 82)}, ${blend(255, 82)}, ${blend(255, 91)})`;
  const hamburgerColor = `rgb(${blend(255, 24)}, ${blend(255, 24)}, ${blend(255, 27)})`;
  const hamburgerHover = navOpacity > 0.5
    ? "hover:bg-zinc-100"
    : "hover:bg-white/10";

  const logoFilter = isHome && navOpacity < 0.4 ? "brightness(0) invert(1)" : "none";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: bgColor,
          backdropFilter: `blur(${blurAmount})`,
          WebkitBackdropFilter: `blur(${blurAmount})`,
          borderBottom: `1px solid ${borderColor}`,
          boxShadow:
            navOpacity > 0.5
              ? `0 1px 3px rgba(0, 0, 0, ${shadowOpacity})`
              : "none",
        }}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center shrink-0" onClick={(e) => handleNavClick(e, "/")}>
            <Image
              src="/images/logo-transparente.png"
              alt="Elav"
              width={112}
              height={28}
              className="h-10 w-auto"
              style={{ filter: logoFilter }}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: isActive
                      ? `rgb(${blend(124, 124)}, ${blend(58, 58)}, ${blend(237, 237)})`
                      : textSecondary,
                  }}
                  className="text-sm font-medium transition-colors hover:text-[#7c3aed]"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="gradient"
              size="sm"
              className={isHome && navOpacity < 0.5 ? "opacity-90" : ""}
              asChild
            >
              <Link href="/precios">Empieza gratis</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-md transition-colors ${hamburgerHover}`}
            style={{ color: hamburgerColor }}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleNavClick(e, "/");
                  }}
                >
                  <Image
                    src="/images/logo-transparente.png"
                    alt="Elav"
                    width={112}
                    height={28}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md hover:bg-zinc-100 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="flex flex-col gap-1 px-4 py-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        setMobileOpen(false);
                        handleNavClick(e, link.href);
                      }}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        pathname === link.href
                          ? "text-[#7c3aed] bg-[#7c3aed]/5"
                          : "text-text-primary hover:bg-zinc-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="px-4 pt-4">
                <Button variant="gradient" size="lg" className="w-full" asChild>
                  <Link href="/precios" onClick={() => setMobileOpen(false)}>
                    Empieza gratis
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
