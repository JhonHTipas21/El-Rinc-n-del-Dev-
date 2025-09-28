export type Post = {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    tag: string;
    date: string;
    readingTime: number;
  };
  
  export const posts: Post[] = [
    {
      slug: "arquitectura-nextjs-2025",
      title: "Arquitectura limpia con Next.js 15: patrones prácticos",
      excerpt:
        "Estructura de carpetas, segmentación por features, colocation y patrones para escalar con App Router.",
      content: `
  ## Por qué una arquitectura clara
  Mantener la coherencia en proyectos reales evita deuda técnica y acelera onboarding.
  
  ### Puntos clave
  - Coloca UI, hooks y servicios por feature.
  - Crea capas ligeras (ui/, lib/, services/).
  - Evita dependencias cíclicas con alias '@/*'.
  
  \`npx create-next-app\` ya te deja listo TypeScript, Tailwind y ESLint.
  `,
      tag: "Next.js",
      date: "2025-09-20",
      readingTime: 6,
    },
    {
      slug: "sanity-cms-setup",
      title: "Sanity CMS: esquemas, GROQ y contenido portable",
      excerpt:
        "Cómo modelar posts, proyectos y autores; consultas GROQ y buenas prácticas de Studio.",
      content: `
  ## Modelado de contenidos
  Empieza por \`post\`, \`project\` y \`author\`. Usa \`slug\` y \`publishedAt\`.
  
  ## Consultas
  GROQ permite filtrar y ordenar sin esfuerzo:
  \`*[_type == "post"] | order(publishedAt desc)[0..9]\`
  `,
      tag: "CMS",
      date: "2025-09-22",
      readingTime: 5,
    },
  ];
  