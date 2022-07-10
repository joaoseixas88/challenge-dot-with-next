/* eslint-disable jsx-a11y/alt-text */
import styles from './styles.module.scss'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa';

export function MovieCartCard(){
	return(
		<tr className={styles.container}>
			<td className={styles.left}>
				<Image src={'https://picsum.photos/200/300'} width={68} height={60}/>
			</td>
			<td className={styles.left}>Filme x</td>
			<td className={styles.center}>2 </td>
			<td className={styles.center}>R$ 19,98 </td>
			<td className={styles.center}>
				<FaTrash color={'#4b5c6b'} />
			</td>
		</tr>
	)
}