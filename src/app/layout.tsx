import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Elav — El corazón inteligente de tu iglesia",
    template: "%s | Elav",
  },
  description:
    "Plataforma SaaS para iglesias modernas. Sitio web, gestión de miembros, comunicación y administración en un solo lugar. Software para iglesias que centraliza tu presencia digital.",
  keywords: [
    "software para iglesias",
    "plataforma para iglesias",
    "gestión para iglesias",
    "administración de iglesias",
    "sitios web para iglesias",
    "CRM iglesias",
    "gestión de miembros iglesia",
    "software cristiano",
  ],
  authors: [{ name: "Elav" }],
  creator: "Elav",
  publisher: "Elav",
  metadataBase: new URL("https://elav.app"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://elav.app",
    siteName: "Elav",
    title: "Elav — El corazón inteligente de tu iglesia",
    description:
      "Plataforma SaaS para iglesias modernas. Sitio web, gestión de miembros, comunicación y administración en un solo lugar.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elav — Plataforma para iglesias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elav — El corazón inteligente de tu iglesia",
    description:
      "Plataforma SaaS para iglesias modernas. Sitio web, gestión de miembros, comunicación y administración en un solo lugar.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Elav",
              url: "https://elav.app",
              logo: "https://elav.app/images/logo-transparente.png",
              description:
                "Plataforma SaaS para iglesias modernas. Sitio web, gesti\u00f3n de miembros, comunicaci\u00f3n y administraci\u00f3n en un solo lugar.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                email: "hola@elav.app",
                contactType: "customer service",
                availableLanguage: ["es"],
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
