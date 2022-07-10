/* eslint-disable jsx-a11y/alt-text */
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";
import Image from "next/image";

export function MovieCard() {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
				<div>
          <Image src="https://picsum.photos/200/300" layout="fill" objectFit="cover"/>
				</div>        
        
      </div>
      <div className={styles["title-container"]}>
        <h3>Titulo</h3>
        <div>
          <div style={{ marginRight: ".7rem" }}>
            <AiFillStar />
            <h4>7</h4>
          </div>
          <h4>Genero</h4>
        </div>
        <h5>Preco</h5>
      </div>
      <div className={styles["btn-container"]}>
        <PrimaryButton label="Adicionar" />
      </div>
    </div>
  );
}
