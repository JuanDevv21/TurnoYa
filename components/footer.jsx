import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
        <div className={styles.foot}>
            <div>
                <p>Corte fino</p>
                <span>El detalle habla por ti</span>
            </div>
            <div>
                <span>Servicios</span>
                <span>Nosotros</span>
            </div>
            <div>
                <span>Instagram</span>
                <span>WhatsApp</span>
            </div>
            <div>
                <span>Reservar</span>
                <span>Ubicacion</span>
            </div>
        </div>
        </>
    )
}

export default Footer
