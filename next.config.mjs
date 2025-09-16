// next.config.mjs
import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configura las extensiones de página para incluir archivos markdown y MDX
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Opcionalmente, añade cualquier otra configuración de Next.js aquí
}
 
const withMDX = createMDX({
  // Si usas Turbopack, los plugins deben ser strings.
  // Si no, puedes importarlos directamente (ej. import remarkGfm from 'remark-gfm').
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
})
 
// Fusiona la configuración de MDX con la de Next.js
export default withMDX(nextConfig)