import styles from './ServiceCard.module.css'

const ServiceCard = ({nombre, precio, tiempoEstimado}) => {
    return (
        <>
            <div className={styles.tarjeta}>
                <div className={styles.tarjetaSup}>
                    <p>{nombre}</p>
                    <span>{tiempoEstimado} min</span>
                </div>
                <div className={styles.tarjetaInf}>
                    <div className={styles.reservar}>
                        <span>¡Reserva ahora!</span>
                    </div>
                    <div className={styles.precio}>
                        <span>${precio}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceCard