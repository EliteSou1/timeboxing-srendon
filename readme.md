

Monorepo con un backend en NestJS y un frontend en React + Vite para construir la plataforma.

## Estructura
- backend: API en NestJS (HTTP en el puerto 3000 por defecto, configurable con `PORT`).
- frontend: SPA en React + Vite (servidor de desarrollo en el puerto 5173).

## Requisitos
- Node.js 20+ y npm.
- Dos terminales para ejecutar frontend y backend en paralelo.

## Instalación
```bash
# Backend
cd backend
npm install

# Frontend (en otra terminal o regresando a la raíz)
cd frontend
npm install
```

## Levantar en desarrollo
```bash
# Terminal 1 - API
cd backend
npm run start:dev

# Terminal 2 - Web
cd frontend
npm run dev
```
