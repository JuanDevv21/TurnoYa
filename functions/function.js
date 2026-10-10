import { barberos } from "@/data/barberos";
import { servicios } from "@/data/servicios";

// Funcion para filtrar los servicios que esten activos
export async function getServicios() {
    return servicios.filter((s) => s.activo)
}

// Funcion para filtrar los barberos que esten activos
export async function getBarberos() {
    return barberos.filter((s) => s.activo)
}

// Funcion para sacar las iniciales
export function getIniciales(nombre) {
    const partes = nombre.trim().split(/\s+/);
    const primera = partes[0][0];
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : "";
    return (primera + ultima).toUpperCase();
}