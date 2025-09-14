// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export type PostFrontmatter = {
  title: string;
  date: string;
  summary: string;
};

export async function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  // Serializa el contenido MDX para que sea seguro y renderizable
  const mdxSource = await serialize(fileContent, {
    parseFrontmatter: true, // Extrae metadatos del frontmatter (title, date, summary, etc.)
  });

  return {
    source: mdxSource,
    slug,
  };
}