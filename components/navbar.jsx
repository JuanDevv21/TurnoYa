import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div>
                <p style={{fontFamily: 'Dyna', fontSize: '36px'}}>Corte fino</p>
            </div>
            <div>
                <span>INICIO</span>
                <span>SERVICIOS</span>
                <span>BARBEROS</span>
            </div>
            <div>
                <p className={styles.btnaccion}>Reservar cita</p>
            </div>
        </nav>
        </>
    )
}

export default Navbar