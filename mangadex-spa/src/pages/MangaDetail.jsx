// src/pages/MangaDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MangaDetail() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLang, setSelectedLang] = useState('all'); // por defecto español

   const filteredChapters = chapters.filter(
      (cap) => cap.attributes.translatedLanguage === selectedLang
    );

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await fetch(`https://api.mangadex.org/manga/${id}?includes[]=cover_art`);
        const data = await response.json();
        setManga(data.data);
      } catch (error) {
        console.error('Error al obtener el manga:', error);
      }
    };

   

    const fetchChapters = async () => {
      try {
        const response = await fetch(`https://api.mangadex.org/chapter?manga=${id}&translatedLanguage[]=es&order[chapter]=desc`);
        const data = await response.json();
        setChapters(data.data);
      } catch (error) {
        console.error('Error al obtener los capítulos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchManga();
    fetchChapters();
  }, [id]);

  if (loading) return <p className="text-center text-white">Cargando...</p>;
  if (!manga) return <p className="text-center text-white">No se pudo cargar el manga.</p>;

  const titulo = manga.attributes.title.en || Object.values(manga.attributes.title)[0] || "Sin título";
  const sinopsis = manga.attributes.description.en || Object.values(manga.attributes.description)[0] || 'Sin descripción';
  const generos = manga.attributes.tags
    .map(tag => tag.attributes.name.es || tag.attributes.name.en)
    .filter(Boolean);

  const coverFileName = manga.relationships.find(rel => rel.type === 'cover_art')?.attributes?.fileName;
  const imagenURL = `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}`;

  return (
   <div className="bg-gray-900 min-h-screen text-white px-4 md:px-6 py-10">
  {/* Portada y Detalles */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Imagen de portada */}
    <div className="md:col-span-1 flex justify-center">
      <img
        src={imagenURL}
        alt={coverFileName}
        className="rounded-2xl shadow-2xl w-full max-w-xs object-cover"
      />
    </div>

    {/* Título, sinopsis y géneros */}
    <div className="md:col-span-2 space-y-4">
      <h1 className="text-4xl font-extrabold leading-tight">{titulo}</h1>

      <p className="text-gray-300 text-sm text-justify leading-relaxed whitespace-pre-line">
        {sinopsis}
      </p>

      <div className="flex flex-wrap gap-2 mt-2">
        {generos.map((genero, index) => (
          <span
            key={index}
            className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap shadow"
          >
            {genero}
          </span>
        ))}
      </div>
    </div>
  </div>

  {/* Información adicional en tarjetas */}
  <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {/* Demografía */}
    <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xs text-gray-400 uppercase mb-1">Demografía</h3>
      <p className={`text-sm font-semibold capitalize ${
        manga.attributes.publicationDemographic === "shounen"
          ? "text-blue-400"
          : manga.attributes.publicationDemographic === "shoujo"
          ? "text-pink-400"
          : manga.attributes.publicationDemographic === "seinen"
          ? "text-purple-400"
          : manga.attributes.publicationDemographic === "josei"
          ? "text-red-400"
          : "text-white"
      }`}>
        {manga.attributes.publicationDemographic || "Desconocido"}
      </p>
    </div>

    {/* Estado */}
    <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xs text-gray-400 uppercase mb-1">Estado</h3>
      <p className={`text-sm font-semibold capitalize ${
        manga.attributes.status === "ongoing"
          ? "text-green-400"
          : manga.attributes.status === "completed"
          ? "text-yellow-400"
          : manga.attributes.status === "hiatus"
          ? "text-orange-400"
          : manga.attributes.status === "cancelled"
          ? "text-red-400"
          : "text-white"
      }`}>
        {manga.attributes.status || "Desconocido"}
      </p>
    </div>

    {/* Año */}
    <div className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="text-xs text-gray-400 uppercase mb-1">Año</h3>
      <p className="text-sm text-white font-semibold">
        {manga.attributes.year || "No disponible"}
      </p>
    </div>
  </div>

  {/* Encabezado + Filtro de idioma */}
  <div className="max-w-5xl mx-auto mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <h2 className="text-2xl font-semibold">Capítulos</h2>
    <select
      value={selectedLang}
      onChange={(e) => setSelectedLang(e.target.value)}
      className="bg-gray-700 text-white text-sm px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      <option value="all">Todos</option>
      <option value="es">Español</option>
      <option value="en">Inglés</option>
      <option value="ja">Japonés</option>
      <option value="pt-br">Portugués (BR)</option>
    </select>
  </div>

  {/* Lista de Capítulos */}
  <div className="max-w-5xl mx-auto mt-6">
    <div className="bg-gray-800 rounded-xl p-4 shadow-md space-y-3 max-h-[500px] overflow-y-auto">
      {(selectedLang === 'all' ? chapters : filteredChapters).length === 0 ? (
        <p className="text-gray-400 text-sm">No hay capítulos disponibles en este idioma.</p>
      ) : (
        (selectedLang === 'all' ? chapters : filteredChapters).map((cap) => (
          <div
            key={cap.id}
            className="bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="text-white text-sm font-medium">
                Capítulo {cap.attributes.chapter || '—'} - {cap.attributes.title || 'Sin título'}
              </p>
              <p className="text-xs text-gray-400">
                Grupo: {cap.relationships.find((rel) => rel.type === 'scanlation_group')?.attributes?.name || 'Desconocido'}
              </p>
            </div>
            <a
              href={`https://mangadex.org/chapter/${cap.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-indigo-500 hover:bg-indigo-600 px-3 py-1 rounded-lg"
            >
              Ver
            </a>
          </div>
        ))
      )}
    </div>
  </div>
</div>

  );
}
