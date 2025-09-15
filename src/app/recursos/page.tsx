// src/app/recursos/blog/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { compareDesc } from 'date-fns';
import { serialize } from 'next-mdx-remote/serialize';

type PostMetadata = {
  title: string;
  date: string;
  summary: string;
};

type Post = {
  slug: string;
} & PostMetadata;

async function getAllPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace('.mdx', '');
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const mdxSource = await serialize(fileContent, { parseFrontmatter: true });
      const { frontmatter } = mdxSource;

      return {
        slug,
        ...frontmatter,
      } as Post;
    })
  );

  return posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
}

export default async function BlogIndexPage() {
  const posts = await getAllPosts();

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