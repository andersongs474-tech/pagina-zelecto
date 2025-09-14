// src/app/servicios/ugc/page.tsx

import ServiceHero from "@/components/sections/serviceHero";
import ProblemSolution from "@/components/sections/problemSolution";
import Deliverables from "@/components/sections/deliverables";
import ImpactCases from "@/components/sections/impactCases"; // ¡Reutilizamos el de la Home!
import FinalCTA from "@/components/sections/finalCTA";       // ¡Y el CTA final también!

export default function UgcServicePage() {
  return (
    <main>
      <ServiceHero
        title="UGC que convierte, no que 'gusta'"
        subtitle="Producimos y testeamos creativos de User-Generated Content diseñados para performance, desde el guion hasta el análisis de métricas."
      />

      <ProblemSolution
        problemTitle="El Problema con el UGC tradicional"
        problemDescription="Muchas marcas se lanzan al UGC esperando autenticidad, pero terminan con..."
        problemPoints={[
          "Anuncios estéticos que no generan ventas.",
          "Poca iteración y aprendizaje.",
          "Creadores que no entienden de performance.",
          "Costes elevados sin un ROAS claro.",
        ]}
        solutionTitle="Nuestra Solución: Un Sistema de UGC"
        solutionDescription="Tratamos el UGC como una ciencia, no como un arte. Nuestro proceso modular se enfoca en resultados medibles."
        solutionPoints={[
          "Guiones basados en ganchos (hooks) probados.",
          "Banco de creadores con experiencia en performance.",
          "Testeo 80/20: iteramos rápido sobre variantes.",
          "Análisis de datos para escalar los ganadores.",
        ]}
      />

      <Deliverables
        items={[
          "Investigación y estrategia de ángulos creativos",
          "Guiones y storyboards detallados",
          "Selección y gestión de 6-12 creadores/mes",
          "Entre 12-24 piezas de vídeo finales (variantes)",
          "Versiones para cada plataforma (TikTok, Reels, Shorts)",
          "Reporting de performance creativo",
        ]}
      />

      {/* Reutilizamos el componente de Casos. Idealmente, filtrarías para mostrar solo casos de UGC. */}
      {/* Por ahora, mostramos los mismos para el ejemplo. */}
      <ImpactCases />

      {/* Reutilizamos el CTA Final para mantener consistencia */}
      <FinalCTA />
    </main>
  );
}