# Framing Quotation System

Sistema de cotizaciones para enmarcado desarrollado como una Single Page Application (SPA) con React. Permite listar, crear y editar cotizaciones utilizando Firebase Firestore para persistencia de datos.

## Entorno React

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) utilizando **React 19.2.4**.

### Tecnologías principales:

- **React 19** + **React Router DOM 6.30.3** para enrutamiento (rutas: `/` para listar, `/create` para crear, `/edit/:id` para editar).
- **Bootstrap 5.3.8** para estilos responsive.
- **SweetAlert2** para notificaciones.
- Scripts disponibles (ejecutar en la raíz del proyecto):
  - `npm start`: Inicia servidor de desarrollo en http://localhost:3000 (recarga automática).
  - `npm run build`: Construye versión de producción en carpeta `build`.
  - `npm test`: Ejecuta tests.
  - `npm run eject`: Expone configuración (irreversible).

Dependencias clave en `package.json`: `react`, `react-dom`, `react-router-dom`, `bootstrap`, `sweetalert2-react-content`.

### Estructura del proyecto:

```
src/
├── App.js          # Componente principal con rutas
├── components/
│   ├── create.js   # Formulario para nueva cotización
│   ├── edit.js     # Edición de cotización existente
│   └── show.js     # Lista de cotizaciones
└── firebaseConfig/
    └── firebase.js # Configuración de Firebase
```

## Conexión con Firebase

El proyecto utiliza **Firebase Firestore** (v12.10.0) para almacenar y gestionar las cotizaciones.

- **Configuración**: Archivo `src/firebaseConfig/firebase.js` inicializa la app Firebase y exporta `db` (instancia de Firestore).
- **Proyecto Firebase**: `framing-quotation-system` (Firestore database: 'framing-quotation-system').
- **Uso en componentes**: Las operaciones CRUD (crear, leer, actualizar, eliminar) se realizan vía `db` en componentes `create.js`, `edit.js` y `show.js`.
- **Credenciales**: Config hardcodeada (en producción, usa variables de entorno para seguridad).

Ejemplo de import:

```js
import { db } from '../firebaseConfig/firebase';
```

## Instalación y Ejecución

1. Clona el repositorio.
2. `npm install` (instala dependencias).
3. `npm start` – Abre http://localhost:3000.
4. Para producción: `npm run build` y deploy `build/` (Netlify, Vercel, Firebase Hosting).

## Despliegue

- [Documentación CRA Despliegue](https://create-react-app.dev/docs/deployment/)
- Recomendado: Firebase Hosting (integra con proyecto existente).

## Troubleshooting

- `npm run build` falla en minify: [Guía CRA](https://create-react-app.dev/docs/troubleshooting#npm-run-build-fails-to-minify).

¡Listo para cotizar enmarcados!
