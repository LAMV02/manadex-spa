# manadex-spa
Simple Page Application

```
mangadex-spa/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Imágenes, íconos, logos
│   ├── components/       # Componentes reutilizables (Header, Card, etc)
│   ├── features/         # Módulos funcionales: manga, auth, etc
│   │   ├── manga/
│   │   │   ├── MangaList.jsx
│   │   │   ├── MangaDetail.jsx
│   │   │   └── mangaAPI.js
│   │   └── auth/
│   │       └── Login.jsx (si se usa autenticación)
│   ├── pages/            # Vistas principales de rutas (Home, Buscar, Detalle)
│   ├── services/         # Lógica para consumir APIs externas (API wrappers)
│   ├── hooks/            # Custom React hooks (useFetch, useManga)
│   ├── utils/            # Funciones auxiliares
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css         # Tailwind importado aquí
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── vite.config.js
