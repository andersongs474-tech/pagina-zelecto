// src/components/sections/MethodStep.tsx
import Icon from "../ui/icon";

interface MethodStepProps {
  stepNumber: string;
  title: string;
  iconName: keyof typeof import('lucide-react').icons;
  imageUrl: string;
  imagePosition?: 'left' | 'right';
  children: React.ReactNode; // Para el contenido detallado
}

export default function MethodStep({
  stepNumber,
  title,
  iconName,
  imageUrl,
  imagePosition = 'right',
  children,
}: MethodStepProps) {
  const imageOrder = imagePosition === 'left' ? 'lg:order-first' : 'lg:order-last';

  return (
    <section className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna de Texto */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center justify-center bg-blue-100 rounded-full w-12 h-12">
                <Icon name={iconName} className="text-blue-600" size={24} />
              </div>
              <span className="text-blue-600 font-bold tracking-wider uppercase">
                Paso {stepNumber}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
              {title}
            </h2>
            <div className="prose prose-lg text-slate-600 max-w-none">
              {/* Aquí se inyectará la descripción detallada */}
              {children}
            </div>
          </div>

          {/* Columna de Imagen */}
          <div className={`mt-8 lg:mt-0 ${imageOrder}`}>
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}