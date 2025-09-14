// src/app/casos/page.tsx
"use client"; // Necesario para usar 'useState' para el filtro interactivo

import { useState } from 'react';
import CaseStudyCard, { CaseStudyCardProps } from "@/components/ui/caseStudyCard";
import Button from '@/components/ui/button';

// Datos de ejemplo para todos los casos
const allCases: CaseStudyCardProps[] = [
  { client: "Marca de Moda A", industry: "E-commerce", initialMetric: "ROAS de 2.5x", resultMetric: "ROAS de 4.8x", teardown: ["Creativos UGC", "CRO en Landing Page"], imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800" },
  { client: "SaaS B2B A", industry: "SaaS", initialMetric: "CPA de 120€", resultMetric: "CPA de 65€", teardown: ["Contenido Orgánico", "Pauta en LinkedIn"], imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800" },
  { client: "Cosmética Natural", industry: "E-commerce", initialMetric: "CVR del 1.2%", resultMetric: "CVR del 2.5%", teardown: ["Whitelisting", "Testeo de Hooks UGC"], imageUrl: "https://images.unsplash.com/photo-1556229152-3a872d84a51e?q=80&w=800" },
  { client: "Fintech App", industry: "SaaS", initialMetric: "Coste por lead de 25€", resultMetric: "Coste por lead de 12€", teardown: ["Pauta en Google Ads", "Landing de Conversión"], imageUrl: "https://images.unsplash.com/photo-1601597111158-2f9e2d4e3be4?q=80&w=800" },
  { client: "Marca de Moda B", industry: "E-commerce", initialMetric: "CPA de 40€", resultMetric: "CPA de 22€", teardown: ["Spark Ads TikTok", "Creativos UGC"], imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800" },
  { client: "Software de RH", industry: "SaaS", initialMetric: "Leads/mes de 50", resultMetric: "Leads/mes de 150", teardown: ["Contenido Orgánico", "Pauta en Meta Ads"], imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800" },
];

const industries = ["Todos", "E-commerce", "SaaS"];

export default function CasosPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredCases = allCases.filter(
    (c) => activeFilter === "Todos" || c.industry === activeFilter
  );

  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-50 text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Resultados, no promesas</h1>
          <p className="mt-4 text-xl text-slate-600">Explora cómo nuestro ecosistema ha ayudado a marcas como la tuya a escalar sus resultados.</p>
        </div>
      </section>

      {/* Filtros y Galería */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          {/* Controles del filtro */}
          <div className="flex justify-center gap-2 mb-12">
            {industries.map((industry) => (
              <button 
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  activeFilter === industry 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Grid de Casos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseItem) => (
              <CaseStudyCard key={caseItem.client} {...caseItem} />
            ))}
          </div>

          {filteredCases.length === 0 && (
             <p className="text-center text-slate-500">No hay casos para esta categoría.</p>
          )}

        </div>
      </section>

      {/* CTA */}
       <section className="text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold">¿Quieres replicar estos resultados?</h2>
            <div className="mt-8">
              <Button href="/contacto" variant="primary">
                Hablemos de tu proyecto
              </Button>
            </div>
        </div>
      </section>
    </main>
  );
}