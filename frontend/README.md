# Timeboxing Frontend

SPA en React + Vite con Tailwind, Router y persistencia en localStorage para un planner de timeboxing diario.

## Pila
- React 19, Vite 7
- React Router DOM 6
- TailwindCSS 3
- localStorage para persistencia

## Scripts
- `npm install` instala dependencias.
- `npm run dev` levanta el servidor de desarrollo en http://localhost:5173.
- `npm run build` genera el build productivo en `dist/`.
- `npm run preview` sirve el build productivo.
- `npm run lint` ejecuta ESLint.

## Estructura
- src/main.jsx: punto de entrada, envuelve en BrowserRouter.
- src/App.jsx: layout global y AuthProvider.
- src/routes/AppRouter.jsx: rutas públicas/protegidas.
- src/context/AuthContext.jsx: login/logout con localStorage.
- src/utils/storage.js: helpers de persistencia (usuario y planner).
- src/components/Navbar.jsx: barra superior.
- src/components/ProtectedRoute.jsx: protección de rutas sin sesión.
- src/components/TimeBlockGrid.jsx: grilla de bloques de 30 minutos (5:00–23:30).
- src/pages/Login.jsx: login simulado, redirige si hay sesión.
- src/pages/Dashboard.jsx: métricas rápidas y bienvenida.
- src/pages/Planner.jsx: prioridades, brain dump y grid editable con auto-guardado.

## Flujo de uso
1) Inicia sesión con cualquier email y password (se persiste en localStorage).
2) En Dashboard ves bloques creados y horas planificadas.
3) En Planner defines prioridades, brain dump y los bloques de 30 minutos; se guardan automáticamente.
4) Usa “Cerrar sesión” en la navbar para limpiar la sesión.

## Estilo
- Fondo con gradientes suaves y glassmorphism.
- Cards redondeadas, sombras ligeras, transiciones y focus states accesibles.
- Responsive desde mobile a desktop.

## Notas
- No hay backend; toda la persistencia es local.
- Si cambias la estructura del planner, ajusta las claves en `storage.js` para mantener compatibilidad.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
