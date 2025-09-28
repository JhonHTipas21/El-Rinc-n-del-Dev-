import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import PostCard from "@/components/PostCard";
import { posts } from "@/content/posts";
import Link from "next/link";

export default function Home() {
  const latest = posts.slice(0, 3);

  return (
    <>
      <Hero />

      <FeatureGrid />

      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Últimos artículos</h2>
          <Link href="/blog" className="nav-link">Ver todo</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-16 mb-20 grid lg:grid-cols-2 gap-6">
        <div className="card p-8">
          <h3 className="text-xl font-semibold mb-2">¿Buscas tu próxima oportunidad?</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Explora mi experiencia, stack y casos reales. Disponible para proyectos freelance o full-time.
          </p>
          <a href="/cv" className="btn mt-4">Ver CV</a>
        </div>

        <div className="card p-8">
          <h3 className="text-xl font-semibold mb-2">¿Tienes una idea?</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Te ayudo a diseñar, prototipar y lanzar soluciones web con enfoque en negocio.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center rounded-2xl border border-gray-200 dark:border-surface-300 px-5 py-2.5 font-medium mt-4 hover:bg-gray-50 dark:hover:bg-surface-300"
          >
            Hablemos
          </a>
        </div>
      </section>
    </>
  );
}
