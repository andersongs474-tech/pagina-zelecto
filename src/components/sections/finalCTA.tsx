// src/components/sections/FinalCTA.tsx
import Button from "../ui/button";
import Icon from "../ui/icon";

const guarantees = [
  "Alcance y entregables definidos",
  "Tiempos de entrega garantizados",
  "Re-shoots incluidos para UGC",
  "SLA de respuesta de 4h hábiles",
  "Reporting semanal transparente",
  "Salida sin penalidad",
];

export default function FinalCTA() {
  return (
    <section className="bg-slate-800 text-white py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna Izquierda: Garantías */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Trabaja con total tranquilidad
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Nuestras garantías están diseñadas para eliminar el riesgo y la incertidumbre, asegurando una colaboración transparente y enfocada en resultados.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8">
            {guarantees.map((guarantee) => (
              <div key={guarantee} className="flex items-center gap-3">
                <Icon name="ShieldCheck" className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-200">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: CTA con Calendly (placeholder) */}
        <div className="bg-white text-slate-900 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold">¿Listo para escalar?</h3>
          <p className="mt-2 mb-6">
            Agenda una llamada de diagnóstico gratuita y sin compromiso. Analizaremos tu situación actual y te daremos un plan de acción claro.
          </p>
          {/* Aquí iría el embed de Calendly. Por ahora, usamos un botón. */}
          <Button href="/contacto" variant="primary" className="w-full text-lg">
            Solicitar mi diagnóstico gratuito
          </Button>
          <p className="text-xs text-slate-500 mt-4">
            No te preocupes, no hacemos llamadas de venta agresivas.
          </p>
        </div>
      </div>
    </section>
  );
}