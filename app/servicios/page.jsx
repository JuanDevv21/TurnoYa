import { getServicios } from "@/functions/function"
import styles from './page.module.css'
import ServiceCard from "@/components/ServiceCard"

export default async function Servicios() {
    const servicios = await getServicios()
    return (
        <>
            <div className={styles.contenedorprincipal}>
                <div className={styles.titulo}>
                <span>Aqui puedes ver nuestros servicios disponibles</span>
            </div>
            <div className={styles.grilla}>
                {servicios.map((s) => (
                    <ServiceCard
                    key={s.id}
                    nombre={s.nombre}
                    precio={s.precio}
                    tiempoEstimado={s.tiempoEstimado}
                    ></ServiceCard>
                ))}
            </div>
            </div>
        </>
    )
}
