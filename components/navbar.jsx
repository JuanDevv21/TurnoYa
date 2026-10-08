import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div>
                <p style={{fontFamily: 'Dyna', fontSize: '36px'}}>Corte fino</p>
            </div>
            <div>
                <span>Inicio</span>
                <span>Servicios</span>
                <span>Barberos</span>
            </div>
            <div>
                <p className={styles.btnaccion}>Reservar cita</p>
            </div>
        </nav>
        </>
    )
}

export default Navbar