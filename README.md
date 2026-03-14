[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/) [![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCB91?style=for-the-badge&logo=firebase)](https://firebase.google.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

# ⚡ Framing Quotation System

Sistema de cotizaciones para enmarcado desarrollado como una Single Page Application (SPA) con React. Permite listar, crear y editar cotizaciones utilizando Firebase Firestore para persistencia de datos.

## 📱 Entorno React

[![Create React App](https://img.shields.io/badge/Create_React_App-5.0.1-09D3F0?style=flat-square&logo=create-react-app)](https://create-react-app.dev/)

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app) utilizando **React 19.2.4**.

### 🛠️ Tecnologías principales:

| Tech              | Icon                                                                                           | Versión | Link                                   |
| ----------------- | ---------------------------------------------------------------------------------------------- | ------- | -------------------------------------- |
| ⚛️ React + Router | ![React](https://img.shields.io/badge/React_Router-6.30.3-08C4B7?style=flat&logo=reactrouter)  | 19.2.4  | [Docs](https://reactjs.org/)           |
| 🎨 Bootstrap      | ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap)    | 5.3.8   | [Site](https://getbootstrap.com/)      |
| 🔔 SweetAlert2    | ![SweetAlert](https://img.shields.io/badge/SweetAlert2-11.26-blue?style=flat&logo=sweetalert2) | 11+     | [Docs](https://sweetalert2.github.io/) |

- **React 19** + **React Router DOM 6.30.3** para enrutamiento (rutas: `/` para listar, `/create` para crear, `/edit/:id` para editar).
- **Bootstrap 5.3.8** para estilos responsive.
- **SweetAlert2** para notificaciones.
<p><a href="#" class="btn btn-success btn-lg m-2">🚀 <code>npm start</code></a> Servidor dev <a href="http://localhost:3000" class="btn btn-primary btn-lg m-2">Abrir App</a></p>\n\n<p><a href="#" class="btn btn-info btn-lg m-2">📦 <code>npm run build</code></a> <a href="#" class="btn btn-warning btn-lg m-2">🧪 <code>npm test</code></a></p>\n\n<div class="alert alert-danger">⚠️ <code>npm run eject</code> - Irreversible</div>\n\n<style>\n.btn { display: inline-block; padding: 10px 20px; margin: 5px; text-decoration: none; border-radius: 5px; font-weight: bold; }\n.btn-success { background: #28a745; color: white; }\n.btn-primary { background: #007bff; color: white; }\n.btn-info { background: #17a2b8; color: white; }\n.btn-warning { background: #ffc107; color: black; }\n.alert { padding: 15px; margin: 10px 0; background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; border-radius: 5px; }\n</style>

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

## 🔥 Conexión con Firebase\n\n[![Firestore](https://img.shields.io/badge/Firestore-v12.10-FFCB91?style=flat-square&logo=firebase)](https://firebase.google.com/products/firestore)

El proyecto utiliza **Firebase Firestore** (v12.10.0) para almacenar y gestionar las cotizaciones.

- **Configuración**: Archivo `src/firebaseConfig/firebase.js` inicializa la app Firebase y exporta `db` (instancia de Firestore).
- **Proyecto Firebase**: `framing-quotation-system` (Firestore database: 'framing-quotation-system').
- **Uso en componentes**: Las operaciones CRUD (crear, leer, actualizar, eliminar) se realizan vía `db` en componentes `create.js`, `edit.js` y `show.js`.
- **Credenciales**: Config hardcodeada (en producción, usa variables de entorno para seguridad).

Ejemplo de import:

```js
import { db } from '../firebaseConfig/firebase';
```

## 🚀 Instalación y Ejecución\n\n<div class="install-steps">\n1. <strong>Clona:</strong> `git clone ...`<br>\n2. <button class="btn btn-success" onclick="alert('Instalando...')">`npm install`</button><br>\n3. <button class="btn btn-primary">`npm start` → localhost:3000</button>\n</div>

## Despliegue

- [Documentación CRA Despliegue](https://create-react-app.dev/docs/deployment/)
- Recomendado: Firebase Hosting (integra con proyecto existente).

## Troubleshooting

- `npm run build` falla en minify: [Guía CRA](https://create-react-app.dev/docs/troubleshooting#npm-run-build-fails-to-minify).

¡Listo para cotizar enmarcados!
