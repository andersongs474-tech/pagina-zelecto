// src/components/ui/AccordionItem.tsx
"use client";

import { useState } from "react";
import Icon from "./icon";

interface AccordionItemProps {
  question: string;
  children: React.ReactNode;
}

export default function AccordionItem({ question, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="font-semibold text-lg">{question}</span>
        <Icon 
          name="ChevronDown" 
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="pb-5 pr-4 text-slate-600">
          {children}
        </div>
      </div>
    </div>
  );
}