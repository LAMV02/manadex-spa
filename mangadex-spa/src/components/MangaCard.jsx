import { Link } from 'react-router-dom';

const MangaCard = ({ manga }) => {
  const title =
    manga.attributes.title.en ||
    Object.values(manga.attributes.title)[0] ||
    'Sin título';

  const coverFileName = manga.relationships.find(
    (rel) => rel.type === 'cover_art'
  )?.attributes?.fileName;

  const coverUrl = coverFileName
    ? `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}.256.jpg`
    : 'https://via.placeholder.com/256x350?text=No+Cover';

  return (
      <Link to={`/manga/${manga.id}`}>
      <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 ease-in-out group relative">
        
        {/* Etiqueta de tipo */}
        <span className="absolute top-2 left-2 bg-black/70 text-yellow-300 text-[11px] font-bold px-2 py-1 rounded-lg border border-yellow-500 uppercase shadow-sm"
>
          {manga.type}
        </span>

        {/* Imagen con efecto de opacidad al hacer hover */}
        <img
          src={coverUrl}
          alt={title}
          className="w-full h-72 object-cover transition-opacity duration-300 group-hover:opacity-80"
          loading="lazy"
        />

        {/* Capa de información */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent px-3 py-4">
          <h2 className="text-white text-base font-semibold truncate">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );

};

export default MangaCard;
