// src/components/ui/ServiceCard.tsx
"use client";

import Link from "next/link";
import Icon from "./icon";
import { icons } from 'lucide-react';

export interface ServiceCardProps {
  iconName: keyof typeof icons;
  title: string;
  description: string;
  href: string;
  valuePoints: string[];
}

export default function ServiceCard({ iconName, title, description, href, valuePoints }: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-white p-8 rounded-lg border shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300">
      <div className="flex-shrink-0">
        <Icon name={iconName} className="text-blue-600 mb-4" size={32} />
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
      </div>
      
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {valuePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm">
              <Icon name="Check" className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-shrink-0 mt-auto">
        <Link 
          href={href} 
          className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
        >
          Conocer más
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
    </div>
  );
}