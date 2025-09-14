// src/app/servicios/contenido/page.tsx
import ServiceHero from "@/components/sections/serviceHero";
import ProblemSolution from "@/components/sections/problemSolution";
import Deliverables from "@/components/sections/deliverables";
import ImpactCases from "@/components/sections/impactCases";
import FinalCTA from "@/components/sections/finalCTA";

export default function ContenidoServicePage() {
  return (
    <main>
      <ServiceHero
        title="Contenido que alimenta tus ads"
        subtitle="Creamos una librería de contenido orgánico (reels, carruseles, historias) diseñada para ser reutilizada y testeada en tus campañas de pauta."
      />
      <ProblemSolution
        problemTitle="El Problema: Contenido sin estrategia"
        problemDescription="Publicar por publicar no genera negocio. Muchas marcas caen en..."
        problemPoints={[
          "Contenido que no conecta con los ángulos de venta.",
          "Formato de vídeo o imagen de baja calidad.",
          "Falta de consistencia y una parrilla caótica.",
          "No se reutiliza el contenido en campañas de pago.",
        ]}
        solutionTitle="Nuestra Solución: Una Fábrica de Contenido"
        solutionDescription="Convertimos tu contenido orgánico en un activo estratégico que reduce el coste de tus anuncios y construye tu marca a largo plazo."
        solutionPoints={[
          "Parrillas de contenido alineadas con el funnel.",
          "Producción de Reels y Shorts de alto impacto.",
          "Storytelling de marca para generar confianza.",
          "Sistema de etiquetado para una librería reutilizable.",
        ]}
      />
      <Deliverables
        items={[
          "Estrategia de contenidos mensual",
          "Parrilla de publicación semanal",
          "Producción de 8-12 Reels/Shorts al mes",
          "Diseño de 4-6 carruseles o posts estáticos",
          "Copywriting para todas las piezas",
          "Reporting de engagement y alcance",
        ]}
      />
      <ImpactCases />
      <FinalCTA />
    </main>
  );
}