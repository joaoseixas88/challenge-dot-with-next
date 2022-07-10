import styles from './styles.module.scss'

interface Props{
	placeholder?: string
}

export function Input({placeholder}:Props){
	return (
		<input className={styles.container} placeholder={placeholder}/>
	)
}