// src/app/page.tsx

import Button from '@/components/ui/button';
import TrustBar from '@/components/sections/trustbar'; 
import HowItWorks from '@/components/sections/howItWorks';
import WhyModular from '@/components/sections/whymodular';
import ServicesSnapshot from '@/components/sections/serviceSnapshot';
import ImpactCases from '@/components/sections/impactCases';
import PackagesSnapshot from '@/components/sections/packagesSnapshot';
import FinalCTA from '@/components/sections/finalCTA';

export default function HomePage() {
  return (
    // 1. Establecemos el contexto de apilamiento con 'relative'
    <main className="relative">
      
      
      
      <div className="absolute inset-0 z-0 h-screen"> 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/videoFondo.mp4"
        >
          <source src="/videoFondo.mp4" type="video/mp4" />
        </video>
        {/* Capa de superposición oscura */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}
      </div>

      {/* 3. CAPA DE CONTENIDO (z-10) - Todo lo demás */}
      {/* Este div es 'relative' para que su 'z-index' funcione y ponga todo su contenido por encima del video */}
      <div className="relative z-10 pt-60 pb-60">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
              Ecosistema modular que vende más
            </h1>
            <p className="text-xl text-slate-200 mb-8">
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
          </div>
        </section>

        {/* Las siguientes secciones tendrán fondo blanco y taparán el video al hacer scroll */}
        <div className="bg-transparent pt-38">
          <TrustBar /> 
          <HowItWorks />
          <WhyModular />
          <ServicesSnapshot />
          <ImpactCases />      
          <PackagesSnapshot /> 
          <FinalCTA />
        </div>
      </div>
    </main>
  );
}