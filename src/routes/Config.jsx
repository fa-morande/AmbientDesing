import { lazy } from "react";

// Nota: Asegúrate de que tu vite.config.js tenga configurado el alias "@"
const Home = lazy(() => import("@/pages/Home"));
const SobreLaMarca = lazy(() => import("@/pages/SobreLaMarca"));
const Servicios = lazy(() => import("@/pages/Servicios"));
const Proyectos = lazy(() => import("@/pages/Proyectos"));
const Contacto = lazy(() => import("@/pages/Contacto"));
const Cotizacion = lazy(() => import("@/pages/Cotizacion"));

// Podrías crear una página simple para el 404 después
const NotFound = lazy(() => import("@/pages/NotFound"));

const publicRoutes = [
    { path: "/", component: Home, showNavbar: true, label: "Inicio" },
    { path: "/proyectos", component: Proyectos, showNavbar: true, label: "Proyectos" },
    { path: "/contacto", component: Contacto, showNavbar: true, label: "Contacto" },
    { path: "/servicios", component: Servicios, showNavbar: true, label: "Servicios" },
    { path: "/sobre-la-marca", component: SobreLaMarca, showNavbar: true, label: "Sobre la marca" },
    { path: "/cotizacion", component: Cotizacion, showNavbar: true, label: "Cotización" },
];

const notFoundRoute = { 
    path: "*", 
    component: () => <div>404 - No encontrado</div>, 
    showNavbar: false 
};

export const appRoutes = [...publicRoutes, notFoundRoute];