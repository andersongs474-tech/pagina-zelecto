// src/components/sections/ImpactCases.tsx
import Button from "../ui/button";
import Icon from "../ui/icon";

// Datos de ejemplo para los casos de éxito
const cases = [
  {
    client: "Marca de Moda",
    initialMetric: "ROAS de 2.5x",
    resultMetric: "ROAS de 4.8x",
    teardown: [
      "Lanzamiento de creativos UGC",
      "Optimización de landing page",
      "Estructura de pauta full-funnel",
    ],
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    client: "SaaS B2B",
    initialMetric: "CPA de 120€",
    resultMetric: "CPA de 65€",
    teardown: [
      "Contenido orgánico para ads",
      "Pauta optimizada en LinkedIn",
      "Automatización de lead nurturing",
    ],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
  },
  {
    client: "E-commerce de Cosmética",
    initialMetric: "CVR del 1.2%",
    resultMetric: "CVR del 2.5%",
    teardown: [
      "Whitelisting con influencers",
      "Testeo A/B de hooks UGC",
      "Mejora de LCP a <2.5s",
    ],
    imageUrl: "https://images.unsplash.com/photo-1556229152-3a872d84a51e?q=80&w=800",
  },
];

export default function ImpactCases() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Resultados, no promesas
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Así es como nuestro ecosistema modular ha impactado en las métricas clave de nuestros clientes.
          </p>
        </div>
        
        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem) => (
            <div key={caseItem.client} className="bg-white rounded-lg shadow-md overflow-hidden border">
              <img src={caseItem.imageUrl} alt={`Caso de éxito de ${caseItem.client}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{caseItem.client}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Antes</p>
                    <p className="font-semibold text-lg">{caseItem.initialMetric}</p>
                  </div>
                  <Icon name="ArrowRight" className="text-blue-500" />
                  <div className="text-center">
                    <p className="text-sm text-slate-500">Después</p>
                    <p className="font-bold text-lg text-blue-600">{caseItem.resultMetric}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {caseItem.teardown.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Icon name="CircleCheckBig" className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Button href="/casos" variant="primary">
            Ver todos los casos
          </Button>
        </div>
      </div>
    </section>
  );
}