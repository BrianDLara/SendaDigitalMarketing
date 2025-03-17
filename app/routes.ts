import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("private-policy", "routes/PrivatePolicy.tsx"),
    route("conocenos", "routes/AboutUs.tsx"),
    route("terms-of-service", "routes/TermOfService.tsx")
] satisfies RouteConfig;
