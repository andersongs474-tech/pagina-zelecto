// src/app/recursos/blog/[slug]/page.tsx

import { MDXRemote } from 'next-mdx-remote/rsc'; // Importante usar /rsc para Server Components
import { getFileBySlug, getAllFilesMetadata } from '../../../../lib/mdx'; // Ajusta la ruta si es necesario
import { notFound } from 'next/navigation';
import Link from 'next/link';


// Esta función se ejecuta en el build y le dice a Next.js
// qué páginas de blog debe pre-renderizar.
export async function generateStaticParams() {
  const posts = getAllFilesMetadata();
  console.log('funcion 1 ejecutada')
  // Devuelve un array de objetos, donde cada objeto tiene la propiedad 'slug'
  // Ejemplo: [{ slug: 'mi-primer-post' }, { slug: 'otro-post' }]
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

//  Generar los metadatos dinámicos (título, etc.) ---
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
console.log('funcion 2 ejecutada')
  try {
    const { slug } = await params;
    const { frontmatter } = await getFileBySlug(slug);
    return {
      title: frontmatter.title,
      description: frontmatter.summary,
    };
  } catch (e) {
    return {
      title: 'Post no encontrado',
      description: 'La página que buscas no existe.',
    };
  }
}


// --- PASO 3: El componente de la página del post ---
export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log('los parametros recibidos son:', params)
  let post;

  try {
    post = await getFileBySlug(slug);
    console.log(post)
  } catch (error) {
    // Si getFileBySlug falla (ej. el archivo no existe), muestra la página 404.
    notFound();
  }

  const { source, frontmatter } = post; 
  console.log(source.compiledSource)
  return (
    <main>
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4">
          
          <Link href="/recursos/blog" className="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Volver al blog
          </Link>
          
          <article className="prose lg:prose-xl">
            {/* Cabecera del post con datos del frontmatter */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tighter mb-2">{frontmatter.title}</h1>
              <time dateTime={frontmatter.date} className="text-sm text-slate-500">
                {new Date(frontmatter.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </header>

            {/* Contenido del post renderizado desde MDX */}
            {/* MDXRemote se encarga de convertir el 'source' en HTML */}
            <MDXRemote source={source.compiledSource} />

          </article>
        </div>
      </section>
    </main>
  );
}