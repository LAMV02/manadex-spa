import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo / Título */}
        <div className="text-2xl font-extrabold tracking-wide text-yellow-400">
          MangaDex<span className="text-white"> SPA</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Inicio
          </Link>
          <Link
            to="/search"
            className="hover:text-yellow-400 transition-colors duration-200"
          >
            Buscar
          </Link>
        </div>

        {/* Barra de búsqueda (solo UI por ahora) */}
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Buscar mangas..."
            className="w-full rounded-full bg-gray-800 text-sm text-white px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-400"
          />
          <svg
            className="absolute left-3 top-2.5 w-5 h-5 text-gray-400 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
