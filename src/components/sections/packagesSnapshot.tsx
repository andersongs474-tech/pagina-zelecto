// src/components/sections/PackagesSnapshot.tsx
import Button from "../ui/button";
import Icon from "../ui/icon";

const packages = [
  {
    name: "Start",
    description: "Ideal para validar tu oferta y creativos en un canal principal.",
    features: [
      "Base creativa UGC/Orgánico",
      "Gestión de 1 canal de pauta",
      "Creación de 1 landing page",
    ],
  },
  {
    name: "Grow",
    description: "Perfecto para escalar lo que funciona y optimizar la conversión.",
    features: [
      "Iteración creativa continua",
      "Gestión de 2-3 canales",
      "Optimización CRO del sitio",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    description: "Para una experimentación agresiva y dominar tu mercado.",
    features: [
      "Experimentación multi-cuenta",
      "Automatizaciones de marketing",
      "Analytics avanzado y reporting",
    ],
  },
];

export default function PackagesSnapshot() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Paquetes modulares que crecen contigo
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Empieza con lo esencial y añade módulos a medida que tus resultados y necesidades evolucionan. Sin precios ocultos, sin encierros.
          </p>
        </div>

        {/* Grid de paquetes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`rounded-xl p-8 border ${pkg.highlight ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}>
              <h3 className="text-2xl font-bold">{pkg.name}</h3>
              <p className="text-slate-600 mt-2 mb-6">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Icon name="CircleCheckBig" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button href="/precios" variant="secondary">
            Ver detalles y add-ons
          </Button>
        </div>
      </div>
    </section>
  );
}