// src/components/sections/WhyModular.tsx
import Icon from "../ui/icon";
import { icons } from 'lucide-react';

// Array de beneficios para mantener el código limpio
const benefits: {
  iconName: keyof typeof icons; // <-- LA LÍNEA MÁGICA
  title: string;
  description: string;
}[] = [

  {
    iconName: "Target",
    title: "Pagas por lo que mueve la aguja",
    description: "Cada mes, activamos solo los módulos que tienen mayor impacto en tus objetivos. Sin gastos de relleno.",
  },
  {
    iconName: "Settings2",
    title: "Ajustes ágiles mensuales",
    description: "El mercado cambia, tus necesidades también. Adaptamos la estrategia cada 30 días basándonos en datos reales.",
  },
  {
    iconName: "FlaskConical",
    title: "Testeo y aprendizaje rápido",
    description: "Nuestra estructura modular nos permite lanzar y validar nuevas ideas (creativos, canales) a gran velocidad.",
  },
  {
    iconName: "LockKeyholeOpen",
    title: "Sin contratos a largo plazo",
    description: "Creemos en resultados, no en ataduras. Eres libre de ajustar o pausar nuestro ecosistema cuando quieras.",
  },
];

export default function WhyModular() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna Izquierda: Beneficios */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              La flexibilidad es tu mayor ventaja competitiva
            </h2>
            <p className="text-lg text-slate-600">
              Los planes fijos te obligan a pagar por servicios que no siempre necesitas. Nuestro enfoque modular es diferente.
            </p>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <Icon name={benefit.iconName} className="text-blue-600 w-6 h-6 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Columna Derecha: Tabla Comparativa */}
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-3">Característica</th>
                  <th className="p-3 bg-blue-50 text-blue-800 rounded-t-lg">Ecosistema Modular</th>
                  <th className="p-3">Plan Fijo Tradicional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3 font-medium">Asignación de recursos</td>
                  <td className="p-3 bg-blue-50 text-blue-900">Dinámica (mensual)</td>
                  <td className="p-3 text-slate-500">Estática (trimestral)</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Velocidad de testeo</td>
                  <td className="p-3 bg-blue-50 text-blue-900">Alta</td>
                  <td className="p-3 text-slate-500">Baja</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Pago</td>
                  <td className="p-3 bg-blue-50 text-blue-900">Por módulos activos</td>
                  <td className="p-3 text-slate-500">Fee fijo completo</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3 font-medium">Compromiso</td>
                  <td className="p-3 bg-blue-50 text-blue-900 rounded-b-lg font-semibold">Mes a mes</td>
                  <td className="p-3 text-slate-500">6-12 meses</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}