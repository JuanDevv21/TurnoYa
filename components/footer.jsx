import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
        <div className={styles.foot}>
            <div>
                <span>Servicios y tarifas</span>
                <span>Nosotros</span>
                <span>Preguntas frecuentes</span>
            </div>
            <div>
                <span>Horarios</span>
                <span>Lunes a Sabado: <span style={{color: "#C6A75E"}}>7:30am - 9:00pm</span></span>
                <span>Domingos y Festivos: <span style={{color: "#C6A75E"}}>9:00am - 8:00pm</span></span>
            </div>
            <div>
                <span>Politicas de privacidad</span>
                <span>Terminos y condiciones</span>
                <span>Cancelaciones de citas</span>
            </div>
            <div>
                <span>Instagram</span>
                <span>WhatsApp</span>
            </div>
            <div className={styles.rfooter}>
                <div style={{marginRight: "0px"}}>
                    <span>Direccion: <span style={{color: "#C6A75E"}}>calle 72b #24d81</span></span>
                    <p>Corte fino</p>
                </div>
                <span>Derechos: © 2026 Corte Fino Barber Club. Todos los derechos reservados.</span>
            </div>
        </div>
        </>
    )
}

export default Footer
