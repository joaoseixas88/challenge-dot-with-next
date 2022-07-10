/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.scss";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillTrash2Fill } from "react-icons/bs";

interface Props{
	showCart?: boolean
}

export function MiniCartCard({ showCart = false}:Props) {
  return (
    <div className={styles.container}>
      <div>
        <Image src="https://picsum.photos/200/300" width={32} height={32} />
      </div>
      <div>
        <p>Nome do filme</p>
      </div>
      <div>
        <p>19,90</p>
      </div>
      { showCart &&
        <div>
          <HiShoppingCart color="#1aae9f" />
        </div>
      }
      <div>
        <BsFillTrash2Fill color="#4b5c6b" />
      </div>
    </div>
  );
}
