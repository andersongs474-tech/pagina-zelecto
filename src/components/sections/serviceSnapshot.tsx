// src/components/sections/ServicesSnapshot.tsx
import Link from "next/link";
import Icon from "../ui/icon";
import { icons } from 'lucide-react';

// Array con los datos de los servicios para evitar repetición
const services: {
  iconName: keyof typeof icons; // <-- LA LÍNEA MÁGICA
  title: string;
  description: string;
  href:string;
}[] = [
  {
    iconName: "MessageSquareQuote",
    title: "Marketing UGC",
    description: "Creativos auténticos que convierten, no solo que gustan. Testeados para performance.",
    href: "/servicios/ugc",
  },
  {
    iconName: "File",
    title: "Pauta Optimizada",
    description: "Campañas full-funnel en Meta, Google y TikTok medidas a diario para maximizar tu ROAS.",
    href: "/servicios/pauta",
  },
  {
    iconName: "MonitorSmartphone",
    title: "Sitios Web de Conversión",
    description: "Landings y E-commerce ultrarrápidos, diseñados para una sola cosa: convertir visitantes en clientes.",
    href: "/servicios/web",
  },
  {
    iconName: "Library",
    title: "Contenido Orgánico",
    description: "Una librería de contenido reutilizable que alimenta tus anuncios y construye tu marca.",
    href: "/servicios/contenido",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Título de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Módulos que puedes activar
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Cada servicio es un módulo independiente que podemos activar o desactivar según el impacto que genere en tus métricas clave.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Link 
              href={service.href} 
              key={service.title} 
              className="group block bg-white p-6 rounded-lg border hover:border-verde hover:bg-negro hover:shadow-lg transition-all duration-300"
            >
              <Icon name={service.iconName} className="text-verde mb-4" size={32} />
              <h3 className="text-lg font-semibold mb-2 group-hover:text-verde">{service.title}</h3>
              <p className="text-slate-600 group-hover:text-white text-sm">{service.description}</p>
              <div className="mt-4 font-semibold text-verde flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más <Icon name="ArrowRight" size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}