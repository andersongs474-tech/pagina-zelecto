// src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/button';
import Icon from '../ui/icon';

// Definimos los enlaces de navegación para no repetirlos
const navLinks = [
  { name: 'Ecosistema', href: '/ecosistema' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Casos', href: '/casos' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Sobre nosotros', href: '/sobre' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Efecto para cerrar el menú si el usuario cambia de página
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  // Efecto para evitar el scroll del cuerpo cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function para restaurar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 max-w-7xl items-center justify-between mx-auto px-4">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl mr-4">
            Ecosistema Modular
          </Link>

          {/* Navegación para pantallas grandes (desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-foreground/80 ${pathname === link.href ? 'text-foreground font-semibold' : 'text-foreground/60'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA para pantallas grandes (desktop) */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
            <Button href="/contacto" variant="primary">
              Agendar
            </Button>
          </div>

          {/* Botón Hamburguesa para pantallas pequeñas (móvil) */}
          <div className="md:hidden ml-auto">
            <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-slate-100">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Menú Móvil Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container h-full mx-auto px-4 py-6 flex flex-col">
          {/* Cabecera del menú móvil con el botón de cierre */}
          <div className="flex justify-between items-center mb-8 h-16">
             <Link href="/" className="font-bold text-xl">
                Ecosistema Modular
             </Link>
             <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-slate-100">
              <Icon name="X" size={24} />
            </button>
          </div>

          {/* Enlaces del menú móvil */}
          <nav className="flex flex-col items-center justify-center flex-grow gap-6 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors hover:text-blue-600 ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA en el pie del menú móvil */}
          <div className="mt-auto mb-8">
            <Button href="/contacto" variant="primary" className="w-full text-center block">
              Agendar una llamada
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}