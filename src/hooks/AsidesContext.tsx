import { createContext, ReactNode, useContext, useState } from "react";

interface AsideContextProvider {
  isAsideFavoriteOpen: boolean;
  isAsideCartOpen: boolean;
  closeFavorite: () => void;
  closeCart: () => void;
  openCart: () => void;
  openFavorite: () => void;
  isModalOpen: boolean
  closeModal: () => void;
  openModal: () => void;
	showOverlay: boolean
	openOverlay: () => void
	closeOverlay: () => void
}

type ProviderProps = {
  children: ReactNode;
};

const AsideContext = createContext({} as AsideContextProvider);

export function AsideContextProvider({ children }: ProviderProps) {
  const [isAsideFavoriteOpen, setIsAsideFavoriteOpen] = useState(false);
  const [isAsideCartOpen, setIsAsideCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
	const [showOverlay, setShowOverlay] = useState(false);

  const closeFavorite = () => {
    setIsAsideFavoriteOpen(false);
  };

  const closeCart = () => {
    setIsAsideCartOpen(false);
  };

  const openCart = () => {
    setIsAsideFavoriteOpen(false);
    setIsAsideCartOpen(true);
  };

  const openFavorite = () => {
    setIsAsideFavoriteOpen(true);
  };

	function closeModal(){
		setIsModalOpen(false)
	}

	function openModal(){
		setIsModalOpen(true)
	}

	function openOverlay(){
		setShowOverlay(true)
	}

	function closeOverlay(){
		setShowOverlay(false)
	}
  return (
    <AsideContext.Provider
      value={{
        closeCart,
        closeFavorite,
        isAsideCartOpen,
        isAsideFavoriteOpen,
        openCart,
        openFavorite,
				closeModal,
				isModalOpen,
				openModal,
				showOverlay,
				openOverlay,
				closeOverlay
      }}
    >
      {children}
    </AsideContext.Provider>
  );
}

export function useAsideContext() {
  const context = useContext(AsideContext);

  return context;
}
