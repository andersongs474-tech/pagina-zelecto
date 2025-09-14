// src/components/ui/Icon.tsx
'use client'
import { icons, LucideProps } from 'lucide-react';

export interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

const Icon = ({ name, color, size, className }: IconProps) => {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    // Mostramos un aviso en la consola del navegador para que el desarrollador sepa del error.
    console.warn(`Icono no encontrado: "${name}". Revisa que el nombre sea correcto y en PascalCase.`);
    // No renderizamos nada en la pantalla.
    return null;
  }

  return <LucideIcon color={color} size={size} className={className} />;
};

export default Icon;