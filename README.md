[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/) [![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCB91?style=for-the-badge&logo=firebase)](https://firebase.google.com/) [![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

# ⚡ Framing Quotation System

**Sistema de cotizaciones para enmarcado** - SPA con React + Firestore. Listar 🔍, crear ➕, editar ✏️ cotizaciones.

## 📋 Contenido

- [Entorno React](#-entorno-react)
- [Conexión Firebase](#-conexión-con-firebase)
- [Instalación](#-instalación-y-ejecución)
- [Despliegue](#-despliegue)

## 📱 Entorno React

[![Create React App](https://img.shields.io/badge/Create_React_App-5.0.1-09D3F0?style=flat-square&logo=create-react-app)](https://create-react-app.dev/)

**React 19.2.4** con Router DOM 6.30.3.

### 🛠️ Stack Tech

| Tech            | Badge                                                                                                | Versión |
| --------------- | ---------------------------------------------------------------------------------------------------- | ------- |
| ⚛️ React Router | ![React Router](https://img.shields.io/badge/React_Router-6.30.3-08C4B7?style=flat&logo=reactrouter) | 19.2.4  |
| 🎨 Bootstrap    | ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat&logo=bootstrap)          | 5.3.8   |
| 🔔 SweetAlert   | ![SweetAlert](https://img.shields.io/badge/SweetAlert2-11-blue?style=flat&logo=sweetalert2)          | 11+     |

**Rutas:** `/` (Show), `/create`, `/edit/:id`.

<details>
<summary>📦 Scripts (click)</summary>

<p><a href="#" class="btn btn-success" onclick="alert('npm start ejecutado! Abre localhost:3000')">🚀 npm start</a> <a href="http://localhost:3000" class="btn btn-primary">🌐 Abrir App</a></p>

<p><a href="#" class="btn btn-info">📦 npm run build</a> <a href="#" class="btn btn-warning">🧪 npm test</a></p>

<div class="alert alert-danger">⚠️ npm run eject - **Irreversible**</div>

</details>

### 📁 Estructura

```
src/
├── App.js (Rutas)
├── components/
│   ├── create.js ➕
│   ├── edit.js ✏️
│   └── show.js 🔍
└── firebaseConfig/firebase.js 🔥
```

## 🔥 Conexión con Firebase

[![Firestore](https://img.shields.io/badge/Firestore-v12.10-FFCB91?style=flat-square&logo=firebase)](https://firebase.google.com/products/firestore)

**Firestore v12** en proyecto `framing-quotation-system`.

- Config: `src/firebaseConfig/firebase.js` → export `db`
- CRUD en components via `db`
- **Prod:** Env vars para config

**Ejemplo:**

```js
import { db } from '../firebaseConfig/firebase';
```

## 🚀 Instalación y Ejecución

1. `git clone <repo>`
2. `npm install`
3. `npm start` → http://localhost:3000

## 🌐 Despliegue 🚀

<p><a href="https://create-react-app.dev/docs/deployment/" class="btn btn-secondary">📚 CRA Deploy</a> <a href="https://firebase.google.com/docs/hosting" class="btn btn-orange">🔥 Firebase Host</a> <a href="#" class="btn btn-success">🚀 Vercel/Netlify</a></p>

## 🔧 Troubleshooting

| Problema          | Solución                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------- |
| Build minify fail | [CRA Guide](https://create-react-app.dev/docs/troubleshooting#npm-run-build-fails-to-minify) |

<a href="#" style="display:inline-block; padding:12px 24px; border-radius:8px; font-weight:bold; background:#28a745; color:white; text-decoration:none;">
  ¡Cotiza ya! 🎉
</a>
