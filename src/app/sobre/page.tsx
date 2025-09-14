// src/app/sobre/page.tsx
import TeamMemberCard from "@/components/ui/teamMemberCard";
import Icon from "@/components/ui/icon";
import FinalCTA from "@/components/sections/finalCTA";

const teamMembers = [
  { name: "Juan Pérez", role: "CEO & Estratega", imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400", linkedinUrl: "#" },
  { name: "Ana García", role: "Directora de Performance", imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400", linkedinUrl: "#" },
  { name: "Carlos Ruiz", role: "Líder de Contenido", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", linkedinUrl: "#" },
];

const pillars = [
    { name: "Datos > Opiniones", description: "Cada decisión estratégica está respaldada por datos, no por intuición.", icon: "Database" },
    { name: "Obsesión por el Cliente", description: "Entendemos tus KPIs y los tratamos como si fueran nuestros.", icon: "Target" },
    { name: "Iteración Constante", description: "Nunca nos conformamos. Siempre estamos testeando para mejorar.", icon: "Repeat" },
];

export default function SobrePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-800 text-white text-center py-20 md:py-28">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Creatividad que vende, datos que lo comprueban.</h1>
          <p className="mt-6 text-xl text-slate-300">Somos un equipo de marketers, creativos y analistas unidos por una misión: construir ecosistemas de marketing que generen un crecimiento real y medible para nuestros clientes.</p>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(p => (
              <div key={p.name} className="text-center p-6">
                <Icon name={p.icon as any} className="mx-auto text-blue-500 mb-4" size={40}/>
                <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                <p className="text-slate-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-slate-50 py-20 md:py-28">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Conoce al equipo</h2>
                <p className="mt-4 text-lg text-slate-600">Los expertos detrás de tu crecimiento.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
                {teamMembers.map(member => <TeamMemberCard key={member.name} {...member}/>)}
            </div>
          </div>
      </section>

      <FinalCTA/>
    </main>
  );
}