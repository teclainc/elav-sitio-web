"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/plataforma", label: "Plataforma" },
  { href: "/sitios-web", label: "Sitios Web" },
  { href: "/precios", label: "Precios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-zinc-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#f59e0b] flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="2.5" fill="white" />
                  <circle cx="18" cy="6" r="2.5" fill="white" fillOpacity="0.8" />
                  <circle cx="12" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
                  <circle cx="6" cy="18" r="2.5" fill="white" fillOpacity="0.7" />
                  <circle cx="18" cy="18" r="2.5" fill="white" fillOpacity="0.6" />
                  <line x1="6" y1="6" x2="18" y2="6" stroke="white" strokeWidth="0.8" opacity="0.5" />
                  <line x1="6" y1="6" x2="12" y2="12" stroke="white" strokeWidth="0.8" opacity="0.4" />
                  <line x1="18" y1="6" x2="12" y2="12" stroke="white" strokeWidth="0.8" opacity="0.3" />
                  <line x1="6" y1="18" x2="12" y2="12" stroke="white" strokeWidth="0.8" opacity="0.35" />
                  <line x1="18" y1="18" x2="12" y2="12" stroke="white" strokeWidth="0.8" opacity="0.25" />
                </svg>
              </div>
              <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-text-primary" : "text-white"}`}>
                Elav
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-text-secondary" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant={scrolled ? "gradient" : "secondary"}
              size="sm"
              className={scrolled ? "" : "bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm"}
              asChild
            >
              <Link href="/precios">Empieza gratis</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-text-primary hover:bg-zinc-100" : "text-white hover:bg-white/10"
            }`}
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
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#f59e0b] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="6" cy="6" r="2.5" fill="white" />
                      <circle cx="18" cy="6" r="2.5" fill="white" fillOpacity="0.8" />
                      <circle cx="12" cy="12" r="2.5" fill="white" fillOpacity="0.9" />
                      <circle cx="6" cy="18" r="2.5" fill="white" fillOpacity="0.7" />
                      <circle cx="18" cy="18" r="2.5" fill="white" fillOpacity="0.6" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold tracking-tight text-text-primary">Elav</span>
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
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-text-primary hover:bg-zinc-50 rounded-lg transition-colors"
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
