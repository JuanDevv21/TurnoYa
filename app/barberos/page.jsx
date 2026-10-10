import styles from './page.module.css'
import { getBarberos } from '@/functions/function'
import BarberCard from '@/components/BarberCard'

export default async function Barberos() {
    const barberos = await getBarberos()
    return (
        <>
            <div className={styles.titulo}>
                <span>Nuestro equipo</span>
            </div>
            <div className={styles.contenedorBarberos}>
                {barberos.map((b) => (
                    <BarberCard
                    key={b.id}
                    nombre={b.nombre}
                    especialidad={b.especialidad}
                    foto={b.foto}></BarberCard>
                ))}
            </div>
        </>
    )
}