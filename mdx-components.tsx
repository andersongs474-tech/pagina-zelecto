// mdx-components.tsx
import type { MDXComponents } from 'mdx/types'
 
// Esto te permite personalizar los componentes HTML por defecto en tus archivos MDX
// Por ejemplo, para usar <Image> de Next.js en lugar de <img> normal.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Aquí podrías sobreescribir elementos como h1, p, etc.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  }
}