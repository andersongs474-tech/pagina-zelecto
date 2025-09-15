// src/app/servicios/page.tsx
import ServiceCard, { ServiceCardProps } from "@/components/ui/serviceCard";
import Button from "@/components/ui/button";

// Definimos los datos de los servicios en un array para mantener el código organizado.
// Usamos el tipo 'ServiceCardProps' que exportamos para que TypeScript nos ayude.
const services: ServiceCardProps[] = [
  {
    iconName: "MessageSquareQuote",
    title: "Marketing UGC",
    description: "Creativos auténticos generados por usuarios, diseñados y testeados para convertir.",
    href: "/servicios/ugc",
    valuePoints: [
      "Guiones enfocados en performance",
      "Banco de creadores verificado",
      "Testing A/B de ganchos y CTA",
      "Gestión de derechos y whitelisting",
    ],
  },
  {
    iconName: "SlidersHorizontal",
    title: "Pauta Optimizada",
    description: "Gestión de campañas en Meta, Google y TikTok para maximizar el ROAS.",
    href: "/servicios/pauta",
    valuePoints: [
      "Estructuras de campaña full-funnel",
      "Optimización diaria del presupuesto",
      "Reporting accionable y transparente",
      "Testeo continuo de creatividades",
    ],
  },
  {
    iconName: "MonitorSmartphone",
    title: "Sitios Web de Conversión",
    description: "Landings y E-commerce ultrarrápidos, optimizados para la conversión (CRO).",
    href: "/servicios/web",
    valuePoints: [
      "Core Web Vitals optimizados (LCP <2.5s)",
      "Copywriting de respuesta directa",
      "Diseño UX enfocado en la oferta",
      "Tracking avanzado de conversiones",
    ],
  },
  {
    iconName: "Library",
    title: "Contenido Orgánico",
    description: "Contenido que construye tu marca y alimenta constantemente tus campañas de pauta.",
    href: "/servicios/contenido",
    valuePoints: [
      "Parrillas de contenido mensuales",
      "Producción de Reels y Shorts",
      "Estrategia de storytelling de marca",
      "Librería de activos reutilizables",
    ],
  },
];

export default function ServiciosHubPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-negro text-center py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Módulos que se activan por impacto
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Cada servicio es una pieza de nuestro ecosistema. Activamos solo lo que necesitas, cuando lo necesitas, para mover tus métricas clave.
          </p>
        </div>
      </section>

      {/* Grid de Servicios */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-slate-800 text-white text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold">Arma tu sistema ideal</h2>
            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
              Nuestros paquetes te permiten combinar módulos para crear la solución perfecta para tu etapa de crecimiento.
            </p>
            <div className="mt-8">
              <Button href="/precios" variant="primary">
                Ver paquetes y precios
              </Button>
            </div>
        </div>
      </section>
    </main>
  );
}