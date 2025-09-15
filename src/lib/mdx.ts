// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import { serialize } from 'next-mdx-remote/serialize';

// Paso 1: Definir los tipos aquí también para que la librería sepa qué debe devolver
export type PostMetadata = {
  title: string;
  date: string;
  summary: string;
  [key: string]: any; // Permite otras propiedades en el frontmatter
};

export type Post = {
  slug: string;
} & PostMetadata;


const root = process.cwd();
const postsDirectory = path.join(root, 'src/content/blog');

export const getFiles = () => {
    return fs.readdirSync(postsDirectory);
};

export const getFileBySlug = async (slug: string) => {
    const mdxSource = fs.readFileSync(
        path.join(postsDirectory, `${slug}.mdx`),
        "utf-8"
    );
    console.log(`[debug:getFileBySlug] Intentando leer el archivo en la ruta: ${mdxSource}`);

    const { data, content } = matter(mdxSource);
    const source = await serialize(content, {});

    return {
        source,
        frontmatter: {
            slug,
            ...data,
        } as Post,
    };
};

// Paso 2: Añadir el tipo de retorno explícito a la función -> : Post[]
// Esto fuerza a que la función devuelva el tipo correcto
export const getAllFilesMetadata = (): Post[] => {
    const files = getFiles();

    const allPosts = files.map((postSlug) => {
        const cleanSlug = postSlug.replace('.mdx', '');
        const mdxSource = fs.readFileSync(
            path.join(postsDirectory, postSlug),
            "utf-8"
        );
        
        // 'data' contiene el frontmatter (title, date, summary)
        const { data } = matter(mdxSource);

        return {
            ...data, // Aquí se añaden title, date, summary, etc.
            slug: cleanSlug,
        } as Post; // Le decimos a TypeScript que confíe en que este objeto es de tipo Post
    });

    return allPosts;
};