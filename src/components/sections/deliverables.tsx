// src/components/sections/Deliverables.tsx
import Icon from "../ui/icon";

interface DeliverablesProps {
  items: string[];
}

export default function Deliverables({ items }: DeliverablesProps) {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            ¿Qué recibirás cada mes?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Transparencia total en nuestros entregables para que sepas exactamente por lo que estás pagando.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {items.map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg border flex items-center gap-4">
              <Icon name="FileCheck2" className="w-6 h-6 text-blue-500 flex-shrink-0" />
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}