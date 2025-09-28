export const metadata = {
    title: "CV",
    description: "Currículum y stack",
  };
  
  export default function CVPage() {
    return (
      <div className="container-xl py-10">
        <h1 className="text-3xl font-bold mb-6">Currículum</h1>
        <div className="grid lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 card p-6">
            <h2 className="text-xl font-semibold mb-4">Experiencia</h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Full-stack Dev</strong> — Proyectos con Next.js, NestJS, FastAPI.</li>
              <li><strong>Data & ML</strong> — ETL, modelos, visualización.</li>
            </ul>
          </section>
          <aside className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Stack</h2>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>Next.js</li><li>Tailwind</li><li>Node/Nest</li><li>FastAPI</li>
              <li>Mongo/Postgres</li><li>Firebase</li><li>Docker</li><li>Vercel</li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
  