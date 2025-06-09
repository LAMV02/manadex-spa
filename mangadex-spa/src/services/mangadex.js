// Importamos axios para hacer solicitudes HTTP
import axios from "axios";

const API_BASE = "https://api.mangadex.org";

/**
 * Obtiene una lista de mangas populares desde la API de MangaDex.
 * Se consideran populares los mangas con mayor cantidad de seguidores.
 */ 
export const getMangas = async () => {
  try {
    // Realiza la solicitud GET a la API
    const response = await axios.get(`${API_BASE}/manga`, {
      params: {
        limit: 10,
        order: {
            followedCount: "desc",
        },
        includes: ["cover_art"],
        availableTranslatedLanguage: ["en"],
      },
    });
    // Devolvemos solo el array de mangas
    return response.data.data;
  } catch (error) {
    // Si hay error, lo mostramos en consola y devolvemos un arreglo vacío
    console.error("Error al obtener mangas:", error);
    return [];
  }
};
