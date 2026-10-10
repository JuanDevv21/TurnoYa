import styles from './BarberoAvatar.module.css'
import { getIniciales } from '../functions/function'
import Image from 'next/image'

export default function Avatar({nombre, foto}) {
    if (foto) {
        return (
            <Image
            src={foto}
            alt={`Foto de ${nombre}`}
            width={96}
            height={96}
            className={styles.avatar}></Image>
        )
    }

    return (
        <>
            <div className={styles.avatar} role='img' aria-label={`Avatar de ${nombre}`}>
                {getIniciales(nombre)}
            </div>
        </>
    )
}