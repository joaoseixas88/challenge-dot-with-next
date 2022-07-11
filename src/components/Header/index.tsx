/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Logo from "../../../public/tmdb.svg";
import styles from "./styles.module.scss";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { CartAside } from "../CartAside";
import { useState } from "react";
import { FavoriteAside } from "../FavoriteAside";
import { useSelector } from "react-redux";
import { RootState, useAppSelector } from "../../store/store";
import { useAsideContext } from "../../hooks/AsidesContext";
import axios from "axios";
import { Movie } from "../../pages";
import { useMovies } from "../../hooks/MoviesContext";


export function Header() {


  const {
    closeCart,
    closeFavorite,
    openCart,
    openFavorite,
    isAsideCartOpen,
    isAsideFavoriteOpen,
  } = useAsideContext();
	const { setMovies } = useMovies()
  const store = useAppSelector<RootState>((store) => store);
	const [search, setSearch] = useState('')
  const quantity = store.cart.movies.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  const handleSetCartAside = () => {
    closeFavorite();
    isAsideCartOpen ? closeCart() : openCart();
  };

  const handleSetFavoriteAside = () => {
    closeCart();
    isAsideFavoriteOpen ? closeFavorite() : openFavorite();
  };
	
	// function handleLoadMore(){
	// 	axios.get(`/api/movies/${page}`).then((res) => {
  //     setMovies([...movies,...res.data.data]);
	// 		setPage(page+1)
  //   });
	// }

	 function handleSearch(){

		axios.get(`/api/search/${search}`).then((res) => {
      setMovies([...res.data])			
		})
	}

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} width={35} height={35} />
      </div>
      <div className={styles.searchBox}>
        <div>
          <input onChange={e => setSearch(e.target.value)}/>
          <BsSearch style={{cursor: 'pointer'}} onClick={handleSearch}/>
        </div>
      </div>
      <div className={styles.icons}>
        <AiFillHeart
          color={"#FFF"}
          size={24}
          style={{ cursor: "pointer" }}
          onClick={() => handleSetFavoriteAside()}
        />
        <div>
          <RiShoppingCart2Fill
            color={"#FFF"}
            size={24}
            style={{ cursor: "pointer" }}
            onClick={() => handleSetCartAside()}
          />
          {quantity > 0 && (
            <div className={styles["total-notification"]}>{quantity}</div>
          )}
        </div>
        <FavoriteAside />
        <CartAside />
      </div>
    </header>
  );
}
