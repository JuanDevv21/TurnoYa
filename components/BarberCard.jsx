import styles from './BarberCard.module.css'
import Avatar from './BarberoAvatar'

export default async function BarberCard({nombre, especialidad, foto}) {
    return (
        <>
            <div className={styles.barberosProfile}>
                <Avatar nombre={nombre} foto={foto}></Avatar>
                <h2>{nombre}</h2>
                <span>{especialidad}</span>
                <p>¡RESERVA AHORA!</p>
            </div>
        </>
    )
}