import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("politica-privacidad", "routes/PoliticaPrivacidad.tsx"),
    route("terminos-condiciones", "routes/TerminosCondiciones.tsx")
] satisfies RouteConfig;
