export default function SiteFooter() {
    return (
      <footer className="mt-16 border-t border-gray-100 dark:border-surface-300">
        <div className="container-xl py-10 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} El Rincón del Dev. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a className="nav-link" href="https://github.com/">GitHub</a>
            <a className="nav-link" href="https://x.com/">Twitter</a>
            <a className="nav-link" href="https://www.linkedin.com/">LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }
  