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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
