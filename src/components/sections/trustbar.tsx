// src/components/sections/TrustBar.tsx
'use client'
// Componente para una métrica individual
const Metric = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <p className="text-3xl md:text-4xl font-bold text-verde">{value}</p>
    <p className="text-sm text-white uppercase tracking-wider">{label}</p>
  </div>
);

// Componente para un logo placeholder
const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center h-12 text-white font-medium">
    {name}
  </div>
);

export default function TrustBar() {
  return (
    <section className="bg-negro py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-slate-600 tracking-wider mb-8">
          CONFIAN EN NUESTRO ECOSISTEMA
        </h3>
        
        {/* Grid de Logos y Métricas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {/* Logos */}
          <LogoPlaceholder name="CLIENTE A" />
          <LogoPlaceholder name="CLIENTE B" />
          
          {/* Métrica Central */}
          <div className="col-span-2 md:col-span-1">
            <Metric value="+1M€" label="Invertido en Ads" />
          </div>

          {/* Más Logos */}
          <LogoPlaceholder name="CLIENTE C" />
          <LogoPlaceholder name="CLIENTE D" />
        </div>
      </div>
    </section>
  );
}