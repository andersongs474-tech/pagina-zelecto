// src/components/sections/HowItWorks.tsx
import Button from "../ui/button";
import Icon from "../ui/icon";
import { icons } from 'lucide-react';

// Definimos los datos de los pasos en un array para mantener el código limpio y escalable
const steps: {
  iconName: keyof typeof icons; // <-- LA LÍNEA MÁGICA
  title: string;
  description: string;
}[] = [
  {
    iconName: "SearchCode",
    title: "Diagnóstico",
    description: "Auditoría completa de tu funnel, creatividades y tech stack para encontrar puntos de mejora.",
  },
  {
    iconName: "DraftingCompass",
    title: "Diseño del Sistema",
    description: "Creamos hipótesis y un roadmap claro, definiendo los módulos a activar cada mes.",
  },
  {
    iconName: "Rocket",
    title: "Activación",
    description: "Lanzamos los módulos (UGC, Pauta, Web, Contenido) en sprints ágiles de 30 días.",
  },
  {
    iconName: "Repeat",
    title: "Iteración Mensual",
    description: "Analizamos datos para testear, escalar lo que funciona y recortar lo que no rinde.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Un sistema de 4 pasos para un crecimiento predecible
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dejamos de adivinar. Aplicamos un framework probado que se adapta a tus necesidades mes a mes.
          </p>
        </div>

        {/* Grid con los 4 pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center justify-center bg-negro rounded-full w-12 h-12 mb-4">
                <Icon name={step.iconName} className="text-verde" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA de la sección */}
        <div className="text-center mt-12">
          <Button href="/ecosistema" variant="secondary">
            Ver la metodología completa
          </Button>
        </div>
      </div>
    </section>
  );
}