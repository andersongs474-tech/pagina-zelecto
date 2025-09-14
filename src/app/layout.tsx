// src/app/layout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header'; 
import Footer from '@/components/layout/footer';
import WhatsAppButton from '@/components/ui/whatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ecosistema Modular que Vende Más',
  description: 'UGC + Ads + Web + Contenido, medido mes a mes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header /> 
        <div className="flex-grow">
            {children}
        </div>
        <Footer /> 
        <WhatsAppButton />
      </body>
    </html>
  );
}