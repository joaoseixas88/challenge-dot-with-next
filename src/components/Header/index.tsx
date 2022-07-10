import Image from "next/image";
import Logo from "../../../public/tmdb.svg";
import styles from "./styles.module.scss";
import { BsSearch } from "react-icons/bs";
import { AiFillHeart } from 'react-icons/ai';
import { RiShoppingCart2Fill } from 'react-icons/ri';

export function Header() {
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
          // onClick={() => handleSetFavoriteModal()}
        />
        <div >
          <RiShoppingCart2Fill
            color={'#FFF'}
            size={24}
            style={{ cursor: 'pointer' }}
            // onClick={() => handleSetCartModal()}
          />
          <div className={styles['total-notification']}>
            2
          </div>
        </div>
			</div>
    </header>
  );
}
