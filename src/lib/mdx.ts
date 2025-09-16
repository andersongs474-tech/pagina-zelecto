// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';

// Definimos el tipo para la metadata que exportamos desde los archivos MDX
export type PostMetadata = {
  title: string;
  date: string;
  summary: string;
  slug: string;
};

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

// Esta función ahora leerá el directorio y dinámicamente importará cada
// archivo para extraer la constante `metadata` exportada.
export async function getAllPostsMetadata(): Promise<PostMetadata[]> {
  const files = fs.readdirSync(postsDirectory).filter(file => path.extname(file) === '.mdx');

  const allPostsData = await Promise.all(
    files.map(async (fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const { metadata } = await import(`../content/blog/${fileName}`);
      
      return {
        slug,
        ...metadata,
      };
    })
  );

  // Ordenar posts por fecha si quieres
  return allPostsData.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// Esta función es similar, pero para un solo post.
// La usaremos para generar los metadatos de la página.
export async function getPostMetadataBySlug(slug: string): Promise<PostMetadata> {
  const { metadata } = await import(`../content/blog/${slug}.mdx`);
  return {
    slug,
    ...metadata
  };
}