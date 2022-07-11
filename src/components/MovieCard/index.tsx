/* eslint-disable jsx-a11y/alt-text */
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";
import Image from "next/image";
import { RootState, useAppSelector } from "../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addMovie } from "../../store/slices/cart";
import { formatCurrency } from "../../utils/format";

import { addFavorite } from "../../store/slices/favorites";
import LoadingSpinner from "../LoadingSpinner";

interface Props {
  item: {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    price: string;
  };
}

export function MovieCard({ item }: Props) {
  const cart = useSelector<RootState>((store) => store.cart);
  const dispatch = useDispatch();

  function addToCart() {
    dispatch(addMovie(item));
  }

	function handleAddFavorite(){
		dispatch(addFavorite(item))
	}

  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <div >
					{/* <LoadingSpinner /> */}
          <Image src={item?.poster_path} layout="fill"/>
					<div style={{ cursor: "pointer" }} className={styles.heart}>          
				<AiFillHeart
          color={"#FFF"}
          size={24}
					onClick={() => handleAddFavorite()}
        />
        </div>
        </div>
        
      </div>
      <div className={styles["title-container"]}>
        <div>
          <h4>{item.title}</h4>
        </div>
        <div>
          <div style={{ marginRight: ".7rem" }}>
            <AiFillStar />
            <h4>{item.vote_average}</h4>
          </div>
        </div>
        <h5>{formatCurrency(item.price)}</h5>
      </div>
      <div className={styles["btn-container"]}>
        <PrimaryButton label="Adicionar" onClick={addToCart} />
      </div>
    </div>
  );
}
