// src/components/sections/ServiceHero.tsx
import Button from "../ui/button";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
}

export default function ServiceHero({ title, subtitle }: ServiceHeroProps) {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-8">
          {subtitle}
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/contacto" variant="primary">
            Solicitar diagnóstico
          </Button>
          <Button href="/servicios" variant="secondary">
            Ver otros módulos
          </Button>
        </div>
      </div>
    </section>
  );
}