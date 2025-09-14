// src/components/layout/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container max-w-7xl mx-auto py-8 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {currentYear} Ecosistema Modular. Todos los derechos reservados.
        </p>
        <nav className="flex gap-6 text-sm">
          <Link href="/legal/terminos" className="text-slate-500 hover:text-slate-800">
            Términos
          </Link>
          <Link href="/legal/privacidad" className="text-slate-500 hover:text-slate-800">
            Privacidad
          </Link>
          <Link href="/faq" className="text-slate-500 hover:text-slate-800">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  );
}