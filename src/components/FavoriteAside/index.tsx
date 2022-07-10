import { MiniCartCard } from '../MiniCartCard'
import styles from './styles.module.scss'

interface Props{
	isActive?: boolean
}

export function FavoriteAside({isActive = false}: Props){
	return(
		<div className={isActive ? styles.container : styles['containter-closed']}>
			<div className={styles['cart-title']}>
        <h2>Meus Favoritos</h2>
        <button>Esvaziar</button>
      </div>
      <div className={styles['cards-container']}>
        <MiniCartCard showCart/>
      </div>
		</div>
	)
}