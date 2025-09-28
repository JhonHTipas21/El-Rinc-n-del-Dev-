# 🌐 El Rincón del Dev

> Blog técnico y portafolio personal para compartir proyectos, artículos y experiencia en desarrollo de software.  
> Construido con **Next.js 15**, **TailwindCSS v4**, **TypeScript**, y desplegable en cualquier plataforma moderna.

---

## 📖 Índice
- [🚀 Demo](#-demo)
- [✨ Características](#-características)
- [🛠 Tecnologías](#-tecnologías)
- [📂 Estructura del Proyecto](#-estructura-del-proyecto)
- [⚙️ Instalación y Uso](#️-instalación-y-uso)
- [🧩 Scripts Disponibles](#-scripts-disponibles)
- [📊 Arquitectura](#-arquitectura)
- [📝 Roadmap](#-roadmap)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---

## 🚀 Demo
🔗 [Enlace al despliegue](https://tu-deploy-aqui.vercel.app) *(ejemplo con Vercel o Render)*

---

## ✨ Características
- 📚 **Blog técnico** con artículos y casos de estudio.  
- 🗂 **Portafolio** para mostrar proyectos y stack tecnológico.  
- 🌓 **Modo oscuro/claro** con soporte responsivo.  
- ⚡ **Performance optimizada** con Next.js 15 y compilación híbrida (Webpack / Turbopack).  
- 🎨 **Diseño moderno** con Tailwind v4 y tipografía mejorada con `@tailwindcss/typography`.

---

## 🛠 Tecnologías

| Categoría        | Tecnologías                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Frontend**     | [Next.js 15](https://nextjs.org/), [React 18](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Estilos**      | [TailwindCSS v4](https://tailwindcss.com/), `@tailwindcss/typography`, CSS Modules |
| **Herramientas** | ESLint, Prettier, Husky (opcional), Commitlint, Lint-Staged                  |
| **Infraestructura** | GitHub, Vercel/Render (despliegue), Node.js >= 18 LTS                     |

---

## 📂 Estructura del Proyecto

```bash
el-rincon-del-dev/
├── web/                     # Proyecto Next.js
│   ├── src/
│   │   ├── app/             # App Router (layout.tsx, page.tsx, globals.css)
│   │   ├── components/      # Componentes reutilizables (Hero, PostCard, etc.)
│   │   └── content/         # Contenido de posts
│   ├── public/              # Imágenes y estáticos
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   └── tsconfig.json
└── README.md


⚙️ Instalación y Uso
🔧 Requisitos previos

Node.js 18+ LTS

npm
 o pnpm

📥 Instalación
# Clona el repositorio
git clone https://github.com/JhonHTipas21/El-Rinc-n-del-Dev-.git

# Entra a la carpeta del proyecto
cd El-Rinc-n-del-Dev-/web

# Instala dependencias
npm install

▶️ Ejecución en desarrollo
npm run dev


El servidor estará disponible en:
👉 http://localhost:3000

🏗 Build de producción
npm run build
npm start

🧩 Scripts Disponibles
Script	Descripción
npm run dev	Inicia el servidor de desarrollo (Webpack)
npm run build	Construye la app para producción
npm run start	Inicia el servidor en modo producción
npm run lint	Corre ESLint para verificar estilo y calidad
📊 Arquitectura
flowchart TD
    A[Usuarios] -->|HTTP/HTTPS| B[Next.js 15]
    B --> C[App Router / Pages]
    C --> D[React Components]
    C --> E[TailwindCSS Styles]
    D --> F[Contenido: Posts & Proyectos]
    B --> G[SEO: next-seo, next-sitemap]
    G --> H[Buscadores/SEO]
