// src/app/garantias/page.tsx
import Icon from "@/components/ui/icon";
import Link from "next/link";
import { IconProps } from "@/components/ui/icon";


type Guarantee = {
  title: string;
  description: string;
  icon: IconProps['name']; 
};

const guarantees: Guarantee[] = [
  { icon: "ClipboardCheck", title: "Alcance Definido", description: "Todos los entregables, plazos y KPIs se definen por escrito antes de empezar cada sprint mensual." },
  { icon: "Clock", title: "Tiempos de Entrega", description: "Nos comprometemos a cumplir los plazos de entrega de creativos y reportes establecidos." },
  { icon: "Camera", title: "Re-shoots de UGC", description: "Si un vídeo UGC tiene fallos técnicos o no sigue el guion, lo rehacemos sin coste adicional." },
  { icon: "MessageCircle", title: "SLA de Respuesta", description: "Garantizamos un tiempo de respuesta máximo de 4 horas hábiles en nuestros canales de comunicación." },
  { icon: "FileText", title: "Reporting Transparente", description: "Recibirás informes claros y accionables que explican el qué, el porqué y el cómo de tus resultados." },
  { icon: "LogOut", title: "Salida Sin Penalidad", description: "Puedes pausar o finalizar nuestra colaboración al final de cualquier ciclo mensual, sin preguntas ni penalizaciones." },
];


export default function GarantiasPage() {
  return (
    <main>
      <section className="bg-slate-50 text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold tracking-tighter">Trabaja con total tranquilidad</h1>
          <p className="mt-4 text-xl text-slate-600">Nuestras garantías están diseñadas para crear una relación de confianza y alinear nuestros incentivos con los tuyos: tu éxito.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((g) => (
              <div key={g.title} className="bg-white p-6 rounded-lg border">
                <Icon name={g.icon} className="text-blue-500 mb-4" size={32} />
                <h3 className="font-bold text-lg mb-2">{g.title}</h3>
                <p className="text-slate-600 text-sm">{g.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 bg-slate-100 p-6 rounded-lg">
            <p className="text-slate-700">Estas garantías resumen nuestro compromiso. Para más detalles, por favor consulta nuestros <Link href="/legal/terminos" className="font-semibold text-blue-600 hover:underline">Términos y Condiciones</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}