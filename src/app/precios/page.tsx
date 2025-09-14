// src/app/precios/page.tsx
import PricingCard, { PricingCardProps } from "@/components/ui/pricingCard";
import Icon from "@/components/ui/icon";
import FinalCTA from "@/components/sections/finalCTA";

// Datos de los paquetes
const packages: PricingCardProps[] = [
  {
    name: "Start",
    description: "Ideal para startups y marcas que buscan validar su oferta y creativos en un canal principal.",
    features: [
      "Base creativa (UGC/Orgánico)",
      "Gestión de 1 canal de pauta",
      "Creación de 1 landing page",
      "Setup de analítica básica",
      "Reporting mensual",
    ],
  },
  {
    name: "Grow",
    description: "Perfecto para empresas en crecimiento que necesitan escalar lo que funciona y optimizar la conversión.",
    features: [
      "Todo en Start, y además:",
      "Iteración creativa continua",
      "Gestión de 2-3 canales",
      "Optimización CRO del sitio",
      "Reporting quincenal",
    ],
    isHighlighted: true,
  },
  {
    name: "Scale",
    description: "Para negocios establecidos que buscan una experimentación agresiva y dominar su mercado.",
    features: [
      "Todo en Grow, y además:",
      "Experimentación multi-cuenta",
      "Automatizaciones de marketing",
      "Analytics avanzado y forecasting",
      "Reporting semanal y dashboards",
    ],
  },
];

export default function PreciosPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 text-center py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Paquetes modulares, sin encierros
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Nuestros precios son transparentes y se adaptan a tu etapa de crecimiento. Elige un punto de partida y ajustamos los módulos mes a mes.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => (
              <PricingCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Details Section (Incluye/No Incluye, Add-ons) */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">La letra pequeña, en grande</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
            {/* Incluye */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Icon name="Circle" className="text-green-500"/>Qué incluye siempre</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Reunión de onboarding</li>
                <li>Setup de herramientas y accesos</li>
                <li>Llamada de estrategia mensual</li>
                <li>Soporte vía Slack/Email</li>
                <li>Dashboard de resultados en tiempo real</li>
              </ul>
            </div>
            {/* NO Incluye */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Icon name="Circle" className="text-red-500"/>Qué NO incluye</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Inversión en pauta (coste de los ads)</li>
                <li>Coste de software (ej. CRMs, Hubspot)</li>
                <li>Producciones de vídeo a gran escala</li>
                <li>IVA (21%)</li>
              </ul>
            </div>
            {/* Add-ons */}
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Icon name="CirclePlus" className="text-blue-500"/>Add-ons disponibles</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Spark Ads & Whitelisting</li>
                <li>Diseño de embudos complejos</li>
                <li>Marketing por Email/SMS</li>
                <li>Analytics avanzado y Data Studio</li>
                <li>Sesiones de consultoría extra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Política de ajuste mensual */}
      <section className="py-20">
          <div className="container max-w-3xl mx-auto px-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-xl mb-2">Nuestra política de ajuste mensual</h3>
                <p className="text-slate-700">Creemos en la flexibilidad total. Al final de cada mes, podemos revisar tu paquete para añadir, quitar o cambiar módulos según los resultados y tus nuevas prioridades. Sin renegociar contratos, sin burocracia. Tu crecimiento es el nuestro.</p>
            </div>
          </div>
      </section>

      {/* Reutilizamos el CTA Final */}
      <FinalCTA />
    </main>
  );
}