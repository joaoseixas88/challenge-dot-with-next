/* eslint-disable jsx-a11y/alt-text */
import { FaTrash } from "react-icons/fa";
import { formatCurrency } from "../../utils/format";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  item: {
		id: number;
		poster_path: string;
		title: string;
		vote_average: number;
		price: number;
		quantity: number;
  };
}

export function MovieCartCard({ item }: Props) {
	
  return (
    <tr className={styles.container}>
      <td className={styles.left}>
				
        <Image
          src={item.poster_path ? item.poster_path : ""}
          width={68}
          height={60}
        />
      </td>
      <td className={styles.left}>{item.title}</td>
      <td className={styles.center}>{item.quantity}</td>
      <td className={styles.center}>{formatCurrency(String(item.price))}</td>
      <td className={styles.center}>
        <FaTrash color={"#4b5c6b"} />
      </td>
    </tr>
  );
}
