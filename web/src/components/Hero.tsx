import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container-xl pt-10 lg:pt-16 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <span className="inline-block text-brand font-semibold bg-brand/10 rounded-full px-3 py-1">
          Blog & Portafolio Técnico
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Comparte tus proyectos, artículos y experiencia.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Un espacio para documentar tu camino dev: tutoriales, análisis, casos reales y un CV que
          convierte visitas en oportunidades.
        </p>
        <div className="flex gap-3">
          <Link href="/blog" className="btn">Leer el blog</Link>
          <Link
            href="/proyectos"
            className="inline-flex items-center rounded-2xl border border-gray-200 dark:border-surface-300 px-5 py-2.5 font-medium hover:bg-gray-50 dark:hover:bg-surface-300"
          >
            Ver proyectos
          </Link>
        </div>
      </div>

      {/* Visual style con círculos recortados como la referencia */}
      <div className="relative">
        <div className="relative w-full aspect-[4/3]">
          <div className="absolute -top-6 -left-6 h-28 w-28 rounded-full border-4 border-brand/40" />
          <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full border-4 border-brand/40" />
          <div className="grid grid-cols-2 gap-4">
            <figure className="relative h-48 md:h-56 rounded-2xl overflow-hidden">
              <Image src="/globe.svg" alt="Globe" fill className="object-contain p-6 bg-white dark:bg-surface-200" />
            </figure>
            <figure className="relative h-48 md:h-56 rounded-2xl overflow-hidden">
              <Image src="/vercel.svg" alt="Vercel" fill className="object-contain p-6 bg-white dark:bg-surface-200" />
            </figure>
            <figure className="relative h-48 md:h-56 rounded-2xl overflow-hidden col-span-2">
              <Image src="/next.svg" alt="Next.js" fill className="object-contain p-8 bg-white dark:bg-surface-200" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
