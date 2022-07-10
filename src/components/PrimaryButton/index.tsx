import styles from './styles.module.scss'

interface Props{
	label: string
}

export function PrimaryButton({label}:Props){
	return(
		<button className={styles.container}>{label}</button>
	)
}