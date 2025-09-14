// src/app/servicios/pauta/page.tsx

import ServiceHero from "@/components/sections/serviceHero";
import ProblemSolution from "@/components/sections/problemSolution";
import Deliverables from "@/components/sections/deliverables";
import ImpactCases from "@/components/sections/impactCases";
import FinalCTA from "@/components/sections/finalCTA";

export default function PautaServicePage() {
  return (
    <main>
      <ServiceHero
        title="Pauta full-funnel, medida a diario"
        subtitle="Gestionamos tus campañas en Meta, Google y TikTok con un enfoque obsesivo en la optimización del ROAS y la adquisición de clientes rentables."
      />

      <ProblemSolution
        problemTitle="El Problema: Dinero quemado en Ads"
        problemDescription="Muchas empresas invierten en pauta sin una estructura clara, lo que lleva a..."
        problemPoints={[
          "Campañas que no distinguen prospecting de retargeting.",
          "Fatiga de creativos que dispara el CPA.",
          "Reporting confuso que no lleva a acciones claras.",
          "Dependencia de la optimización automática de la plataforma.",
        ]}
        solutionTitle="Nuestra Solución: Gestión Científica de Pauta"
        solutionDescription="Aplicamos un sistema riguroso para asegurar que cada euro invertido trabaje para tus objetivos de negocio."
        solutionPoints={[
          "Estructuras de campaña por etapa del funnel.",
          "Sistema de testeo continuo de creatividades y audiencias.",
          "Reporting accionable que conecta métricas de pauta con KPIs de negocio.",
          "Optimización diaria basada en datos, no en intuición.",
        ]}
      />

      <Deliverables
        items={[
          "Setup y estructuración de cuentas publicitarias",
          "Configuración de tracking y eventos de conversión",
          "Gestión de audiencias (custom, lookalike, interest)",
          "Implementación de creativos en campañas",
          "Optimización y escalado diario de presupuesto",
          "Informe semanal de performance y próximos pasos",
        ]}
      />

      {/* Reutilizamos el componente de Casos. Idealmente, se filtrarían para mostrar solo casos de Pauta. */}
      <ImpactCases />

      {/* Reutilizamos el CTA Final para una llamada a la acción consistente. */}
      <FinalCTA />
    </main>
  );
}