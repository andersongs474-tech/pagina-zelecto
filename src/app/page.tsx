// src/app/page.tsx

import Button from '@/components/ui/button';
import TrustBar from '@/components/sections/trustbar'; 
import HowItWorks from '@/components/sections/howItWorks';
import WhyModular from '@/components/sections/whymodular'; // <-- IMPORTAR
import ServicesSnapshot from '@/components/sections/serviceSnapshot';
import ImpactCases from '@/components/sections/impactCases';     // <-- IMPORTAR
import PackagesSnapshot from '@/components/sections/packagesSnapshot'; // <-- IMPORTAR
import FinalCTA from '@/components/sections/finalCTA';

export default function HomePage() {
  return (
    // Hemos quitado "min-h-screen" para que el contenido fluya normalmente
    <main> 
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto py-20 md:py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
          Ecosistema modular que vende más
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          UGC + Ads + Web + Contenido, medido mes a mes.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contacto" variant="primary">
            Solicitar diagnóstico
          </Button>
          <Button href="/precios" variant="secondary">
            Ver paquetes
          </Button>
        </div>
      </section>

      
      <TrustBar /> 
      <HowItWorks />
      <WhyModular />
      <ServicesSnapshot />
      <ImpactCases />      
      <PackagesSnapshot /> 
      <FinalCTA /> 

      {/* Aquí irán los siguientes bloques: Cómo funciona, etc. */}
    </main>
  );
}