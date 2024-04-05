import { useFavorites } from '../../hooks/useFavorites'
import styles from './Header.module.css'

export default function Header() {
    const favorites = useFavorites()
    console.log(favorites)
    return (
        <header className={styles.header}>
            Избранное ❤️
            <span>
                {favorites?.length}
            </span>
        </header>
    )
}
