import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/cv", label: "CV" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-surface-200/70 backdrop-blur border-b border-gray-100 dark:border-surface-300">
      <div className="container-xl h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-brand" />
          <span className="font-semibold text-lg">El Rincón del Dev</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="nav-link">
              {i.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
