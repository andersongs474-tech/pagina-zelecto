// src/components/ui/WhatsAppButton.tsx
"use client";

import Link from 'next/link';
import Icon from './icon';
import { usePathname } from 'next/navigation';

export default function WhatsAppButton() {
  const phoneNumber = "3122282418"; // <-- IMPORTANTE: Reemplaza con tu número
  const message = "Hola, me gustaría solicitar un diagnóstico para mi negocio.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const pathname = usePathname();

  // Ocultamos el botón en la página de contacto para no ser redundantes
  if (pathname === '/contacto') {
    return null;
  }

  return (
    <Link 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <Icon name="MessageSquare" size={28} />
    </Link>
  );
}