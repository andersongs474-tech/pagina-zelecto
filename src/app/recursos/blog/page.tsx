// src/app/recursos/blog/page.tsx
import fs from 'fs';
import path from 'path';
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import { PostFrontmatter } from '@/lib/mdx';


export async function generateStaticParams() {
  const { readdirSync } = require('fs');
  const { join } = require('path');
  const postsDirectory = join(process.cwd(), 'src/content/blog');
  const filenames = readdirSync(postsDirectory);
  return filenames.map((filename: string) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { source } = await getPostBySlug(params.slug);
  const frontmatter = source.frontmatter as PostFrontmatter;
  return {
    title: frontmatter.title as string,
    description: frontmatter.summary as string,
  };
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const { source } = await getPostBySlug(params.slug);

  return (
    <main className="py-20">
      <div className="container max-w-3xl mx-auto px-4">
        <article className="prose lg:prose-xl">
          <div className="text-center mb-8">
            <h1 className="!mb-2">{(source.frontmatter as PostFrontmatter).title}</h1>
            <time dateTime={(source.frontmatter as PostFrontmatter).date} className="text-sm text-slate-500">
              {new Date((source.frontmatter as PostFrontmatter).date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
          <MDXRemote {...source} />
        </article>
      </div>
    </main>
  );
}