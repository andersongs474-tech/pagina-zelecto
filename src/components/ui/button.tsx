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
  const baseStyles = 'px-6 py-3 font-semibold rounded-lg transition-transform duration-200 ease-in-out hover:scale-105';
  
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-transparent text-slate-900 border border-slate-300 hover:bg-slate-50',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}