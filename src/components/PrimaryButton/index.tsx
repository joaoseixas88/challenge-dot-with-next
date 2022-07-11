import styles from './styles.module.scss'

interface Props{
	label: string
	type?: 'button' | 'reset' | 'submit'
	onClick?: () => void
}

export function PrimaryButton({label, onClick, type = 'button'}:Props){
	return(
		<button className={styles.container} onClick={onClick} type={type} >{label}</button>
	)
}