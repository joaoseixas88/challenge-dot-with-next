/* eslint-disable jsx-a11y/alt-text */
import styles from "./styles.module.scss";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { BsFillTrash2Fill } from "react-icons/bs";
import { formatCurrency } from "../../utils/format";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../../store/slices/cart";
import { removeFavorite } from "../../store/slices/favorites";

interface Props {
  showCart?: boolean;
  item: {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    price: number;
		quantity?: number
  };
}

export function MiniCartCard({ showCart = false, item }: Props) {
  const imageUri = item.poster_path ? item.poster_path : ''
	
	const dispatch = useDispatch()
	

  function addToCart() {
    dispatch(addMovie(item));
  }

  return (
    <div className={styles.container}>
      <div>				
        <Image
          src={imageUri}
          alt="movie"
          width={32}
          height={32}
        />
				
      </div>
      <div className={styles.title}>
        <p>{item?.title}</p>
      </div>
      <div>
        {!showCart && <p>{formatCurrency(String(item?.price))}</p>}
      </div>
			<div>
        {!showCart && <p>Qtd:{item.quantity}</p>}
      </div>
      {showCart && (
        <div style={{cursor: 'pointer'}}>
          <HiShoppingCart color="#1aae9f" onClick={addToCart}/>
        </div>
      )}
      <div className={styles.trash}>
        <BsFillTrash2Fill color="#4b5c6b" onClick={showCart ? () => dispatch(removeFavorite(item)) :() => dispatch(removeMovie(item))}/>
      </div>
    </div>
  );
}
