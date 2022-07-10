/* eslint-disable jsx-a11y/alt-text */
import { AiFillStar, AiFillHeart } from "react-icons/ai";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  price: string;
}

export function MovieCard({ poster_path, title, vote_average, price }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles["image-container"]}>
        <div>
          <Image src={poster_path} layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className={styles["title-container"]}>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <div style={{ marginRight: ".7rem" }}>
            <AiFillStar />
            <h4>{vote_average}</h4>
          </div>
        </div>
        <h5>{price}</h5>
      </div>
      <div className={styles["btn-container"]}>
        <PrimaryButton label="Adicionar" />
      </div>
    </div>
  );
}
