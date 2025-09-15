// src/app/contacto/page.tsx
"use client";

import Icon from "@/components/ui/icon";
import Button from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-negro py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-white text-5xl font-bold tracking-tighter">Hablemos</h1>
          <p className="mt-4 text-xl text-white/80">Completa el formulario o agenda directamente una llamada. Estamos listos para escuchar tu reto.</p>
        </div>
      </section>

      {/* Contenido Principal (Form + Calendly) */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Columna Izquierda: Formulario */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Envíanos tus datos</h2>
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700">Nombre</label>
                    <input type="text" name="nombre" id="nombre" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-slate-700">Empresa</label>
                    <input type="text" name="empresa" id="empresa" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                  </div>
                </div>
                <div>
                    <label htmlFor="sitio" className="block text-sm font-medium text-slate-700">Sitio Web</label>
                    <input type="url" name="sitio" id="sitio" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                </div>
                 <div>
                    <label htmlFor="facturacion-ads" className="block text-sm font-medium text-slate-700">Facturación mensual en ads</label>
                    <select id="facturacion-ads" name="facturacion-ads" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                        <option>No estoy invirtiendo aún</option>
                        <option>Menos de 5.000€</option>
                        <option>5.000€ - 20.000€</option>
                        <option>Más de 20.000€</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                    <input type="email" name="email" id="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"/>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 font-semibold rounded-lg hover:bg-blue-700">
                  Enviar y solicitar diagnóstico
                </button>
              </form>
            </div>
            
            {/* Columna Derecha: Calendly y contacto directo */}
            <div className="bg-negro p-8 rounded-lg">
              <h2 className="text-white text-3xl font-bold mb-6">O agenda directamente</h2>
              <p className="text-white/80 mb-6">Elige un hueco en nuestro calendario y tengamos una llamada de 30 minutos para analizar tu caso. Sin compromiso.</p>
              
              {/* Placeholder para el embed de Calendly */}
              <div className="bg-slate-200 rounded-md h-80 flex items-center justify-center text-slate-500 mb-6">
                <p>Aquí irá el widget de Calendly</p>
              </div>

              <h3 className="font-bold mt-8 mb-4">Otras formas de contactar</h3>
              <div className="space-y-3">
                <a href="https://wa.me/TUNUMERO" target="_blank" className="flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Icon name="MessageSquare" />
                  <span>Hablar por WhatsApp</span>
                </a>
                <a href="mailto:tuemail@dominio.com" className="flex items-center gap-3 text-slate-700 hover:text-blue-600">
                  <Icon name="Mail" />
                  <span>enviar un email</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}