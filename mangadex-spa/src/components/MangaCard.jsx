import { Link } from 'react-router-dom';

// Importamos React (opcional en versiones nuevas de React con JSX)
const MangaCard = ({ manga }) => {
  // Obtenemos el título del manga (puede tener varios títulos, tomamos el 'en')
 const title =
  manga.attributes.title.en ||
  Object.values(manga.attributes.title)[0] ||
  "Sin título";

  // Buscamos el archivo de portada del manga
  const coverFileName = manga.relationships.find(
    (rel) => rel.type === "cover_art"
  )?.attributes?.fileName;

  // Construimos la URL de la imagen de portada
  const coverUrl = coverFileName
    ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}.256.jpg`
    : "https://via.placeholder.com/256x350?text=No+Cover";

  return (
        <Link to={`/manga/${manga.id}`}>
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
        {/* Imagen de portada */}
        <img
            src={coverUrl}
            alt={title}
            className="w-full h-72 object-cover"
            loading="lazy"
        />

        {/* Título */}
        <div className="p-2">
            <h2 className="text-sm font-semibold text-gray-800">{title}</h2>
        </div>
        </div>
    </Link>
  );
};

export default MangaCard;
