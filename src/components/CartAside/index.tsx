import { MiniCartCard } from "../MiniCartCard";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";

interface Props {
  isActive?: boolean;
}

export function CartAside({ isActive = false }: Props) {
  return (
    <div className={isActive ? styles.container : styles["containter-closed"]}>
      <div className={styles['cart-title']}>
        <h2>Meu Carrinho</h2>
        <button>Esvaziar</button>
      </div>
      <div className={styles['cards-container']}>
        <MiniCartCard />
      </div>
      <div className={styles['total-container']}>
        <h2>Total</h2>
        <h1>R$19,98</h1>
      </div>
      <div className={styles['btn-container']}>
        <PrimaryButton label="Finalizar compra" />
      </div>
    </div>
  );
}
