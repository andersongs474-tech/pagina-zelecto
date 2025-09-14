// src/components/ui/CaseStudyCard.tsx
import Icon from "./icon";

export interface CaseStudyCardProps {
  client: string;
  industry: string;
  initialMetric: string;
  resultMetric: string;
  teardown: string[];
  imageUrl: string;
}

export default function CaseStudyCard({ client, industry, initialMetric, resultMetric, teardown, imageUrl }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border flex flex-col h-full">
      <img src={imageUrl} alt={`Caso de éxito de ${client}`} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-blue-600 uppercase mb-1">{industry}</p>
        <h3 className="text-xl font-bold mb-3">{client}</h3>
        
        <div className="flex items-center gap-4 mb-4 border-y py-3">
          <div className="text-center flex-1">
            <p className="text-sm text-slate-500">Antes</p>
            <p className="font-semibold text-lg">{initialMetric}</p>
          </div>
          <Icon name="ArrowRight" className="text-blue-500 flex-shrink-0" />
          <div className="text-center flex-1">
            <p className="text-sm text-slate-500">Después</p>
            <p className="font-bold text-lg text-blue-600">{resultMetric}</p>
          </div>
        </div>
        
        <div className="flex-grow">
            <p className="text-sm font-semibold mb-2">Módulos clave activados:</p>
            <ul className="space-y-2 text-sm text-slate-600">
            {teardown.map((point) => (
                <li key={point} className="flex items-start gap-2">
                <Icon name="Circle" className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
                </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
}