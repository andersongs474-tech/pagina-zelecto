// src/components/ui/PricingCard.tsx
"use client";

import Button from "./button";
import Icon from "./icon";

export interface PricingCardProps {
  name: string;
  description: string;
  features: string[];
  isHighlighted?: boolean;
}

export default function PricingCard({ name, description, features, isHighlighted = false }: PricingCardProps) {
  const cardClasses = isHighlighted 
    ? "border-2 border-blue-500 bg-blue-50 relative" 
    : "bg-white border";

  const buttonVariant = isHighlighted ? "primary" : "secondary";

  return (
    <div className={`flex flex-col h-full rounded-xl p-8 shadow-sm ${cardClasses}`}>
      {isHighlighted && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase">
            Recomendado
          </span>
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-slate-600 mt-2 mb-6 h-16">{description}</p>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Icon name="Check" className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button href="/contacto" variant={buttonVariant} className="w-full">
          Solicitar diagnóstico
        </Button>
      </div>
    </div>
  );
}