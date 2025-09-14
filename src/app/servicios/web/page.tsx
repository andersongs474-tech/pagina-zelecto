// src/app/servicios/web/page.tsx
import ServiceHero from "@/components/sections/serviceHero";
import ProblemSolution from "@/components/sections/problemSolution";
import Deliverables from "@/components/sections/deliverables";
import ImpactCases from "@/components/sections/impactCases";
import FinalCTA from "@/components/sections/finalCTA";

export default function WebServicePage() {
  return (
    <main>
      <ServiceHero
        title="Sitios rápidos que convierten"
        subtitle="Diseñamos y desarrollamos Landing Pages y E-commerce con un foco obsesivo en la velocidad de carga (LCP ≤2.5s) y la optimización de la conversión (CRO)."
      />
      <ProblemSolution
        problemTitle="El Problema: Webs lentas que frustran"
        problemDescription="Una web lenta o confusa es el principal punto de fuga de tu funnel. Los problemas comunes son..."
        problemPoints={[
          "Velocidad de carga superior a 3 segundos.",
          "Sin un foco claro en la oferta y el CTA.",
          "Mal adaptadas a dispositivos móviles.",
          "Tracking de conversiones roto o inexistente.",
        ]}
        solutionTitle="Nuestra Solución: Webs como Máquinas de Venta"
        solutionDescription="Construimos activos digitales que trabajan para tu negocio 24/7, combinando performance técnico y persuasión."
        solutionPoints={[
          "Optimización de Core Web Vitals (LCP, FID, CLS).",
          "Copywriting de performance y UX enfocado en CRO.",
          "Desarrollo con tecnologías modernas (Next.js).",
          "Setup de analítica y GTM para un tracking preciso.",
        ]}
      />
      <Deliverables
        items={[
          "Diseño UI/UX en Figma",
          "Desarrollo de Landing Page o E-commerce",
          "Optimización de imágenes y activos",
          "QA (Control de Calidad) multi-dispositivo",
          "Configuración de Google Analytics y Tag Manager",
          "Base de SEO técnico (metatags, sitemap)",
        ]}
      />
      <ImpactCases />
      <FinalCTA />
    </main>
  );
}