import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useAsideContext } from "../../hooks/AsidesContext";
import { clearCart } from "../../store/slices/cart";
import { RootState, useAppSelector } from "../../store/store";
import { formatCurrency } from "../../utils/format";
import { MiniCartCard } from "../MiniCartCard";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";



export function CartAside() {
  const { isAsideCartOpen, closeCart, closeFavorite } = useAsideContext();
  const store = useAppSelector<RootState>((store) => store);
  const dispatch = useDispatch();
  const router = useRouter();

  const total = store.cart.movies?.reduce((acc, item) => {
    return acc + item.price * item.quantity
  }, 0);

  function handleClear() {
    dispatch(clearCart());
  }

  function handleFinishCart() {
		closeCart()
		closeFavorite()
    router.push("/cart");
  }

  return (
    <div className={isAsideCartOpen ? styles.container : styles["containter-closed"]}>
      <div className={styles["cart-title"]}>
        <h2>Meu Carrinho</h2>
        <button onClick={handleClear}>Esvaziar</button>
      </div>
      <div className={styles["cards-container"]}>
        {store.cart.movies?.length > 0 &&
          store.cart.movies.map((item) => {
            return <MiniCartCard item={item} key={item.id} />;
          })}
      </div>
      <div className={styles["total-container"]}>
        <h2>Total</h2>
        <h1>{formatCurrency(total?.toFixed(2))}</h1>
      </div>
      <div className={styles["btn-container"]}>
       
        <PrimaryButton label="Finalizar compra" onClick={handleFinishCart}/>
       
      </div>
    </div>
  );
}
