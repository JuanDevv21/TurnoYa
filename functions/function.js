import { servicios } from "@/data/servicios";

// Funcion para filtrar los servicios que esten activos
export async function getServicios() {
    return servicios.filter((s) => s.activo)
}