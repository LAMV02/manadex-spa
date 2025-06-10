# 📘 MangaDex Viewer

Una aplicación web tipo SPA construida con **React** que consume la API de **MangaDex** para mostrar mangas populares, sus detalles, géneros, estado, capítulos disponibles y permite filtrar los capítulos por idioma.

---

## 🚀 Tecnologías Utilizadas

- ⚛️ **React** – Librería principal para construir la interfaz.
- 🎨 **Tailwind CSS** – Estilizado rápido y responsivo.
- 🌐 **MangaDex API** – Fuente de datos sobre mangas y capítulos.
- 🧭 **React Router** – Navegación entre páginas.
- 🛠️ **Vite** – Herramienta para desarrollo rápido y bundling eficiente.

---

## 🎯 Objetivo del Proyecto

Este proyecto fue creado con fines educativos y prácticos, para reforzar el consumo de APIs REST usando React, crear interfaces limpias y responsivas, y mejorar habilidades de desarrollo frontend profesional.

Además, el proyecto busca simular una plataforma de lectura de mangas donde los usuarios puedan:

- Ver detalles completos de un manga.
- Explorar géneros, estado, demografía, año.
- Visualizar los capítulos disponibles agrupados por idioma.
- Filtrar fácilmente el contenido según su idioma preferido.

---

## 🖼️ Vista previa

(📸 Aquí puedes insertar una imagen o gif del proyecto funcionando)

---

## ⚙️ Cómo ejecutar el proyecto localmente

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/mangadex-viewer.git
cd mangadex-viewer
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Iniciar el servidor de desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

Abre `http://localhost:5173` (o el puerto que indique Vite) para ver la app.

---

## 📂 Estructura del proyecto

```
src/
├── components/         # Componentes reutilizables (si los agregas)
├── pages/              # Vistas principales (ej: MangaDetail.jsx)
├── App.jsx             # Componente raíz con rutas
├── main.jsx            # Punto de entrada de React
├── assets/             # Recursos estáticos (imágenes, logos)
└── styles/             # Archivos CSS (si no usas solo Tailwind)
```

---

## 🔮 Futuras mejoras (ideas)

- 🧾 Soporte para múltiples páginas de capítulos (paginación).
- 👥 Sistema de login para guardar mangas favoritos.
- 📚 Agrupamiento inteligente de capítulos por grupo de traducción.
- 🌙 Modo claro/oscuro (aunque ya tiene estilo nocturno).

---

## 📜 Licencia

Este proyecto es solo para fines educativos y no tiene fines comerciales. La información mostrada es obtenida de [MangaDex API](https://api.mangadex.org/), que tiene su propia licencia de uso.
