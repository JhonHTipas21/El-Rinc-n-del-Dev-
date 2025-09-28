export const metadata = { title: "Proyectos", description: "Portfolio" };

const items = [
  { title: "HOLOTWIN", desc: "Gemelo digital (Unity + FastAPI + Gemini)." },
  { title: "UniMarket", desc: "Marketplace universitario (Next.js + MongoDB)." },
  { title: "DeUna", desc: "App de servicios (React Native + Firebase)." },
];

export default function Proyectos() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.title} className="bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
