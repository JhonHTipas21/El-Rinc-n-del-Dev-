const features = [
    {
      title: "Entorno real de trabajo",
      text:
        "Publica casos reales, aprendizajes y lecciones de proyectos. Muestra cómo piensas y construyes.",
    },
    {
      title: "SEO y desempeño",
      text:
        "Optimizado para Core Web Vitals, sitemap y metadatos. Que te encuentren y cargue rápido.",
    },
    {
      title: "UI modular",
      text:
        "Componentes reutilizables, tipografía limpia y layout responsive. Fácil de extender.",
    },
  ];
  
  export default function FeatureGrid() {
    return (
      <section className="container-xl mt-14">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card p-6">
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  