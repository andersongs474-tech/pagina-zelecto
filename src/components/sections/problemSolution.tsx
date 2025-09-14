// src/components/sections/ProblemSolution.tsx
import Icon from "../ui/icon";

interface ProblemSolutionProps {
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: string[];
}

export default function ProblemSolution({
  problemTitle,
  problemDescription,
  problemPoints,
  solutionTitle,
  solutionDescription,
  solutionPoints,
}: ProblemSolutionProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna del Problema */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{problemTitle}</h2>
            <p className="text-slate-600 mb-6">{problemDescription}</p>
            <ul className="space-y-3">
              {problemPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Icon name="Circle" className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna de la Solución */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">{solutionTitle}</h2>
            <p className="text-slate-600 mb-6">{solutionDescription}</p>
            <ul className="space-y-3">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Icon name="CircleCheckBig" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}