// src/app/legal/page.tsx
import Link from "next/link";
// Esta será una página simple que redirige a las otras dos.
export default function LegalHubPage() {
  return (
    <main className="container max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Documentación Legal</h1>
      <p className="text-slate-600 mb-8">Aquí puedes encontrar toda nuestra información legal y políticas.</p>
      <div className="space-y-4">
        <Link href="/legal/terminos" className="block p-4 border rounded-lg hover:bg-slate-50 font-semibold">Términos y Condiciones</Link>
        <Link href="/legal/privacidad" className="block p-4 border rounded-lg hover:bg-slate-50 font-semibold">Política de Privacidad</Link>
      </div>
    </main>
  );
}