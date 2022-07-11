import { useDispatch } from "react-redux";
import { useAsideContext } from "../../hooks/AsidesContext";
import { clearFavorites } from "../../store/slices/favorites";
import { RootState, useAppSelector } from "../../store/store";
import { MiniCartCard } from "../MiniCartCard";
import styles from "./styles.module.scss";



export function FavoriteAside() {
  const dispatch = useDispatch();

  const { isAsideFavoriteOpen } = useAsideContext();

  function handleClear() {
    dispatch(clearFavorites());
  }

  const store = useAppSelector<RootState>((store) => store);
  return (
    <div className={isAsideFavoriteOpen ? styles.container : styles["containter-closed"]}>
      <div className={styles["cart-title"]}>
        <h2>Meus Favoritos</h2>
        <button onClick={handleClear}>Esvaziar</button>
      </div>
      <div className={styles["cards-container"]}>
        {store.favorites.movies?.length > 0 &&
          store.favorites.movies.map((item) => {
            return <MiniCartCard item={item} key={item.id} showCart />;
          })}
      </div>
    </div>
  );
}
