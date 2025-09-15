// src/app/faq/page.tsx
import AccordionItem from "@/components/ui/accordionItem";

const faqData = [
    { q: "¿Trabajáis con un contrato de permanencia?", a: "No. Creemos en la flexibilidad. Todos nuestros planes son mensuales y puedes pausar o cancelar al final de cualquier ciclo de 30 días sin penalización." },
    { q: "¿Quién paga la inversión en publicidad (pauta)?", a: "La inversión en las plataformas publicitarias (Meta, Google, etc.) corre por cuenta del cliente. Nuestra tarifa cubre la estrategia, gestión y optimización de esa inversión." },
    { q: "¿Cuánto tardaré en ver resultados?", a: "Aunque a veces se ven mejoras rápidas, normalmente el primer mes es de aprendizaje y setup. Esperamos ver una tracción significativa y datos concluyentes a partir del segundo mes." },
    { q: "¿Sois dueños de los creativos UGC?", a: "No. El cliente es el dueño de todos los creativos finales. Lo que sí gestionamos son los derechos de uso con los creadores, que pueden variar (uso orgánico, paid, tiempo limitado, etc.)." },
    { q: "¿Qué tipo de clientes son ideales para vosotros?", a: "Nuestros mejores clientes son e-commerce y SaaS B2C que ya tienen un producto validado y están invirtiendo (o listos para invertir) al menos 3.000€/mes en pauta." },
];

export default function FaqPage() {
  return (
    <main>
       <section className="bg-negro text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl font-bold tracking-tighter">Preguntas Frecuentes</h1>
          <p className="mt-4 text-xl text-white/80">Respuestas claras a tus dudas más comunes.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-3xl mx-auto px-4">
            {faqData.map(item => (
                <AccordionItem key={item.q} question={item.q}>
                    <p>{item.a}</p>
                </AccordionItem>
            ))}
        </div>
      </section>
    </main>
  );
}