// src/components/ui/ResourceHubCard.tsx
import Link from "next/link";
import Icon from "./icon";
import { icons } from 'lucide-react';

interface ResourceHubCardProps {
  iconName: keyof typeof icons;
  title: string;
  description: string;
  href: string;
  ctaText: string;
}

export default function ResourceHubCard({ iconName, title, description, href, ctaText }: ResourceHubCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg border shadow-sm flex flex-col items-center text-center">
      <div className="flex items-center justify-center bg-blue-100 rounded-full w-16 h-16 mb-6">
        <Icon name={iconName} className="text-blue-600" size={32} />
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 flex-grow mb-6">{description}</p>
      <Link 
        href={href}
        className="mt-auto font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
      >
        {ctaText}
        <Icon name="ArrowRight" size={16} />
      </Link>
    </div>
  );
}