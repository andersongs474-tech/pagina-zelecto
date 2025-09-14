// src/app/ecosistema/page.tsx
import Button from "@/components/ui/button";
import MethodStep from "@/components/sections/methodStep";
import Icon from "@/components/ui/icon";

export default function EcosistemaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-slate-50 text-center py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Un sistema, no servicios sueltos
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Nuestro framework de cuatro pasos, iterable y medible, está diseñado para generar crecimiento sostenible.
          </p>
          <Button href="/contacto" variant="primary">
            Solicitar diagnóstico
          </Button>
        </div>
      </section>

      {/* Paso 1: Diagnóstico */}
      <MethodStep
        stepNumber="01"
        title="Diagnóstico: Dónde estamos y a dónde vamos"
        iconName="SearchCode"
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
        imagePosition="right"
      >
        <p>
          Antes de proponer cualquier solución, realizamos una inmersión profunda en tu negocio. No creemos en las &quot;tallas únicas&quot;.
        </p>
        <ul>
          <li><strong>Auditoría de Funnel:</strong> Analizamos cada etapa de tu embudo de conversión para identificar fugas y oportunidades.</li>
          <li><strong>Análisis de Creatividades:</strong> Revisamos el performance histórico de tus anuncios para entender qué resuena con tu audiencia.</li>
          <li><strong>Revisión del Tech Stack:</strong> Evaluamos tus herramientas de analítica, CRM y marketing para asegurar que los datos fluyan correctamente.</li>
        </ul>
      </MethodStep>

      {/* Paso 2: Diseño del Sistema */}
      <MethodStep
        stepNumber="02"
        title="Diseño: Un roadmap basado en hipótesis"
        iconName="DraftingCompass"
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
        imagePosition="left"
      >
        <p>
          Con los datos del diagnóstico, diseñamos un plan de acción. No es una lista de tareas, es un conjunto de hipótesis que vamos a validar.
        </p>
        <ul>
          <li><strong>Priorización de Impacto:</strong> Identificamos las acciones que moverán la aguja más rápido (el 20% que genera el 80% del resultado).</li>
          <li><strong>Roadmap Mensual:</strong> Definimos qué módulos (UGC, Pauta, etc.) se activarán cada mes y qué KPIs esperamos mejorar.</li>
          <li><strong>Diseño de Experimentos:</strong> Planteamos los tests A/B que realizaremos en creatividades, audiencias y landings.</li>
        </ul>
      </MethodStep>
      
      {/* Paso 3: Activación */}
      <MethodStep
        stepNumber="03"
        title="Activación: Sprints ágiles de 30 días"
        iconName="Rocket"
        imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
        imagePosition="right"
      >
        <p>
          Ejecutamos el plan en ciclos cortos y rápidos. Esto nos permite aprender y adaptarnos a una velocidad que las agencias tradicionales no pueden igualar.
        </p>
        <ul>
          <li><strong>Producción de Activos:</strong> Creación de guiones UGC, copys, diseños de landing pages y contenido orgánico.</li>
          <li><strong>Setup de Campañas:</strong> Estructuración de campañas en las plataformas de pauta (Meta, Google, TikTok) con tracking avanzado.</li>
          <li><strong>Lanzamiento y Monitoreo:</strong> Activamos los módulos y monitoreamos las métricas clave en tiempo real desde el primer día.</li>
        </ul>
      </MethodStep>
      
      {/* Paso 4: Iteración */}
      <MethodStep
        stepNumber="04"
        title="Iteración: Datos que guían el siguiente mes"
        iconName="Repeat"
        imageUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800"
        imagePosition="left"
      >
        <p>
          Al final de cada sprint de 30 días, analizamos los resultados y tomamos decisiones informadas para el siguiente ciclo. Aquí es donde ocurre la magia.
        </p>
        <ul>
          <li><strong>Reporting Accionable:</strong> Te presentamos un informe que no solo muestra datos, sino que te dice qué significan y qué haremos a continuación.</li>
          <li><strong>Decisiones de Escalado:</strong> Identificamos las campañas y creatividades ganadoras para asignarles más presupuesto.</li>
          <li><strong>Recorte de Pérdidas:</strong> Pausamos rápidamente lo que no funciona, liberando recursos para reinvertir en lo que sí rinde.</li>
        </ul>
      </MethodStep>

      {/* Evidencia Section */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">La evidencia de nuestro sistema</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Este ciclo de mejora continua se refleja directamente en tus métricas. Sprint tras sprint, verás cómo el CTR, CVR y ROAS mejoran de forma consistente.
            </p>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border">
              <p className="text-slate-500">[Aquí iría una gráfica de ejemplo mostrando la mejora de CVR/CPA a lo largo de 3-4 sprints]</p>
            </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold">¿Listo para implementar un sistema que funciona?</h2>
            <div className="mt-8">
              <Button href="/precios" variant="primary">
                Ver paquetes y precios
              </Button>
            </div>
        </div>
      </section>
    </main>
  );
}