import { useEffect, useState } from "react";
import { getMangas } from "../services/mangadex";
import MangaCard from "../components/MangaCard";

export default function Home() {
  const [mangas, setMangas] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect se ejecuta al montar el componente
  useEffect(() => {
      // Llamamos a la función que obtiene los mangas populares
    getMangas().then((data) => {
      setMangas(data); // Guardamos los datos en el estado
      setLoading(false); // Ocultamos el mensaje de carga
    });
  }, []);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mangas Populares</h1>

      {loading ? (
        <p>Cargando...</p> // Mostramos mensaje mientras se cargan los datos
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Recorremos los mangas y renderizamos una tarjeta por cada uno */}
          {mangas.map((manga) => (
            <MangaCard key={manga.id} manga={manga} />
          ))}
        </div>
      )}
    </div>
  );
}

