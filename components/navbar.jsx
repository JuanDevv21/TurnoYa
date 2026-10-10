import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
        <nav className={styles.navbar}>
            <div>
                <p style={{fontFamily: 'Dyna', fontSize: '36px'}}>Corte fino</p>
            </div>
            <div>
                <Link href={'/'}><span>INICIO</span></Link>
                <Link href={'/servicios'}><span>SERVICIOS</span></Link>
                <Link href={'/barberos'}><span>BARBEROS</span></Link>
            </div>
            <div>
                <Link href={'/reservar'}><p className={styles.btnaccion}>Reservar cita</p></Link>
            </div>
        </nav>
        </>
    )
}

export default Navbar