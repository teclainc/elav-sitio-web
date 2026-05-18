# Elav

> **El corazón inteligente de tu iglesia**

Plataforma SaaS para iglesias modernas que centraliza presencia digital, comunicación y administración en un solo lugar.

---

## Stack

- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS v4
- **Componentes:** shadcn/ui
- **Animaciones:** Framer Motion
- **Íconos:** Lucide Icons

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout.tsx                  # Layout raíz (metadata, Navbar, Footer)
│   ├── globals.css                 # Estilos globales + tema (violeta → naranja)
│   ├── page.tsx                    # Home
│   ├── plataforma/page.tsx         # Plataforma CRM
│   ├── sitios-web/page.tsx         # Sitios web
│   ├── precios/page.tsx            # Precios
│   ├── nosotros/page.tsx           # Nosotros
│   └── contacto/page.tsx           # Contacto
├── components/
│   ├── layout/
│   │   ├── navbar.tsx              # Navbar sticky + menú mobile
│   │   └── footer.tsx              # Footer premium
│   ├── ui/
│   │   ├── button.tsx              # Botón con variantes (default, gradient, outline)
│   │   └── accordion.tsx           # Accordion para FAQ
│   └── sections/
│       ├── section-wrapper.tsx     # Wrapper animado reutilizable
│       ├── dashboard-mockup.tsx    # Mockup dashboard SaaS
│       ├── websites-mockup.tsx     # Mockup sitios web
│       ├── analytics-mockup.tsx    # Mockup estadísticas
│       ├── feature-cards.tsx       # FeatureCard, ProblemCard, PricingCard
│       ├── cta-section.tsx         # Sección CTA reutilizable
│       ├── faq-section.tsx         # FAQ con accordion
│       └── index.ts                # Barrel export
└── lib/
    └── utils.ts                    # Utilidad cn() para clases
```

---

## Páginas

| Página | Ruta | Descripción |
|--------|------|-------------|
| Home | `/` | Hero, problemas, plataforma, sitios web, analytics, precios, FAQ, CTA |
| Plataforma | `/plataforma` | CRM completo: miembros, campus, células, finanzas, formularios, notificaciones, analytics, roles |
| Sitios Web | `/sitios-web` | Templates, responsive, SEO, velocidad, integración CRM |
| Precios | `/precios` | 3 planes CRM + 3 sitios web + 2 mantenimiento + FAQ |
| Nosotros | `/nosotros` | Visión, historia, valores, declaración de creencias |
| Contacto | `/contacto` | Formulario, WhatsApp, email, demo CTA |

---

## Identidad visual

- **Marca:** Elav
- **Slogan:** "El corazón inteligente de tu iglesia"
- **Paleta:** Violeta (`#7c3aed`) → Naranja (`#f59e0b`)
- **Tipografía:** Geist Sans
- **Estilo:** SaaS moderno, limpio, minimalista, premium

---

## SEO

- Keywords: `software para iglesias`, `plataforma para iglesias`, `gestión para iglesias`, `administración de iglesias`, `sitios web para iglesias`
- OpenGraph y Twitter Cards configurados
- Metadata por página
- `lang="es"` en el HTML raíz

---

## Pricing

### CRM

| Plan | Precio | Miembros | Admins |
|------|--------|----------|--------|
| Start | $29/mes | Hasta 150 | 2 |
| Grow | $79/mes | Hasta 800 | 8 |
| Advance | $179/mes | Ilimitados | Ilimitados |

### Sitios Web

| Plan | Precio |
|------|--------|
| Landing Start | $390 |
| Website Pro | $990 |
| Website Custom | Desde $1,900 |

### Mantenimiento

| Plan | Precio |
|------|--------|
| Care Basic | $29/mes |
| Care Active | $89/mes |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build

# Iniciar producción
npm start

# Lint
npm run lint
```

---

## Principios de diseño

- Mucho whitespace
- Jerarquía tipográfica fuerte
- Animaciones suaves y livianas (solo fade-in, reveal, hover)
- Sin glassmorphism excesivo, blur pesado ni animaciones exageradas
- Responsive total (mobile-first)
- Performance optimizada (todas las páginas son estáticas)
