'use client'

// src/components/ui/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = 'px-4 py-2 font-semibold rounded-lg transition-transform duration-200 ease-in-out hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-transparent text-verde ring-4 ring-verde hover:bg-verde hover:text-white',
    secondary: 'bg-transparent text-verde border border-slate-300 hover:bg-slate-50',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}