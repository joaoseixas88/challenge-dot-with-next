import { useState } from "react";
import { useAsideContext } from "../../hooks/AsidesContext";
import styles from "./styles.module.scss";

interface Props{
	openOverlay?: () => void
}

export function Overlay({openOverlay}:Props) {
  
  const { closeFavorite, closeCart, showOverlay, closeOverlay } = useAsideContext();

  return (
    <div
      className={showOverlay ? styles.container : styles.containerOFF}
      onClick={() => {
				closeOverlay()        
				closeCart()
				closeFavorite()
      }}
    ></div>
  );
}
