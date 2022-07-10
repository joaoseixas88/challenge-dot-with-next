import Image from "next/image";
import Logo from "../../../public/tmdb.svg";
import styles from "./styles.module.scss";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from 'react-icons/ai';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { CartAside } from "../CartAside";
import { useState } from "react";
import { FavoriteAside } from "../FavoriteAside";

export function Header() {

	const [cartAsideIsOpen, setCartAsideIsOpen] = useState(false)
	const [favoriteAsideIsOpen, setFavoriteAsideIsOpen] = useState(false)

	const handleSetCartAside = () => {
		setFavoriteAsideIsOpen(false)
		setCartAsideIsOpen(!cartAsideIsOpen)
	}

	const handleSetFavoriteAside = () => {
		setCartAsideIsOpen(false)
		setFavoriteAsideIsOpen(!favoriteAsideIsOpen)
	}

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={Logo} width={35} height={35} />
      </div>
      <div className={styles.searchBox}>
        <div>
          <input />
          <BsSearch />
        </div>
      </div>
      <div className={styles.icons}>
			<AiFillHeart
          color={'#FFF'}
          size={24}
          style={{ cursor: 'pointer' }}
          onClick={() => handleSetFavoriteAside()}
        />
        <div >
          <RiShoppingCart2Fill
            color={'#FFF'}
            size={24}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSetCartAside()}
          />
          <div className={styles['total-notification']}>
            2
          </div>
        </div>
				<FavoriteAside isActive={favoriteAsideIsOpen}/>
				<CartAside isActive={cartAsideIsOpen}/>
			</div>
    </header>
  );
}
