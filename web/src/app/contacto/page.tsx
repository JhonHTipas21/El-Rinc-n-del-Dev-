export const metadata = { title: "Contacto", description: "Trabajemos juntos" };

export default function Contacto() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 shadow">
        <p className="text-gray-600 dark:text-gray-300">
          Escríbeme a <a className="text-emerald-600 dark:text-emerald-400 font-medium" href="mailto:hola@rincondeldev.dev">hola@rincondeldev.dev</a>.
        </p>
      </div>
    </div>
  );
}
