// src/pages/MangaDetail.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MangaDetail() {
  const { id } = useParams();
  const [manga, setManga] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="bg-gray-900 min-h-screen text-white px-6 py-10">
      {/* Portada y Detalles */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <img
            src={imagenURL}
            alt={coverFileName}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">{titulo}</h1>
          <p className="text-gray-300 text-sm">{sinopsis}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {generos.map((genero, index) => (
              <span
                key={index}
                className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs"
              >
                {genero}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Capítulos */}
      <div className="max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-semibold mb-4">Capítulos</h2>
        <div className="bg-gray-800 rounded-xl p-4 shadow-md space-y-3 max-h-[500px] overflow-y-auto">
          {chapters.length === 0 && (
            <p className="text-gray-400 text-sm">No hay capítulos en español disponibles.</p>
          )}
          {chapters.map((cap) => (
            <div
              key={cap.id}
              className="bg-gray-700 hover:bg-gray-600 transition p-3 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="text-white text-sm font-medium">
                  Capítulo {cap.attributes.chapter || '—'} - {cap.attributes.title || 'Sin título'}
                </p>
                <p className="text-xs text-gray-400">
                  Grupo: {cap.relationships.find(rel => rel.type === 'scanlation_group')?.attributes?.name || 'Desconocido'}
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
          ))}
        </div>
      </div>
    </div>
  );
}
