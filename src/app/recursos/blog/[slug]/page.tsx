// src/app/recursos/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPostsMetadata, getPostMetadataBySlug } from '../../../../lib/mdx';
import dynamic from 'next/dynamic';

// Genera las rutas estáticas
export async function generateStaticParams() {
  const posts = await getAllPostsMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Genera los metadatos de la página (title, description)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostMetadataBySlug(params.slug);
    return {
      title: post.title,
      description: post.summary,
    };
  } catch (e) {
    notFound();
  }
}

// El componente de la página del post
export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Importamos el componente MDX dinámicamente.
  // El `default` es el contenido del MDX compilado como un componente de React.
  const PostContent = dynamic(() => import(`../../../../content/blog/${slug}.mdx`));
  
  // Obtenemos la metadata por separado para mostrarla en la cabecera
  const frontmatter = await getPostMetadataBySlug(slug);

  if (!PostContent || !frontmatter) {
    notFound();
  }
  
  return (
    <main>
      <div className="w-full bg-negro h-20" /> 
      <section className="py-20">
        <div className="container max-w-3xl mx-auto px-4">
          <Link href="/recursos" className="text-blue-600 hover:underline mb-8 inline-block">
            &larr; Volver al blog
          </Link>
          
          <article className="prose lg:prose-xl">
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tighter mb-2">{frontmatter.title}</h1>
              <time dateTime={frontmatter.date} className="text-sm text-slate-500">
                {new Date(frontmatter.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </header>
            
            
            <PostContent />

          </article>
        </div>
      </section>
    </main>
  );
}