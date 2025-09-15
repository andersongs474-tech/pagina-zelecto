// src/app/recursos/blog/page.tsx

// Paso 1: Importaciones actualizadas
import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { getAllFilesMetadata } from '../../lib/mdx'; // Asegúrate que la ruta sea correcta

// Estos types son útiles para definir la estructura de tus posts
type PostMetadata = {
  title: string;
  date: string;
  summary: string;
};

type Post = {
  slug: string;
} & PostMetadata;


// Paso 2: La función local `getAllPosts` ha sido eliminada.


export default async function BlogIndexPage() {
  // Paso 3: Usar la nueva función y ordenar los resultados
  const allPosts: Post[] = getAllFilesMetadata();
  // La función getAllFilesMetadata no ordena los posts, así que lo hacemos aquí.
  const posts = allPosts.sort((a, b) => 
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main>
      <section className="bg-negro text-center py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <h1 className="text-white text-5xl font-bold tracking-tighter">Blog de Marketing de Performance</h1>
          <p className="mt-4 text-xl text-white/80">Ideas, estrategias y tácticas para hacer crecer tu negocio.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug}>
                <h2 className="text-3xl font-bold mb-2">
                  <Link href={`/recursos/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <time dateTime={post.date} className="text-sm text-slate-500">
                  {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <p className="mt-4 text-slate-700">{post.summary}</p>
                <Link href={`/recursos/blog/${post.slug}`} className="font-semibold text-blue-600 hover:text-blue-800 mt-4 inline-block">
                  Leer más &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}