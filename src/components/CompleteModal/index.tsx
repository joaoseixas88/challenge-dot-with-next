import { useRouter } from "next/router";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { useAsideContext } from "../../hooks/AsidesContext";
import { clearCart } from "../../store/slices/cart";
import { clearFavorites } from "../../store/slices/favorites";
import { PrimaryButton } from "../PrimaryButton";
import styles from "./styles.module.scss";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  name: string;
}

export function CompleteModal({ isOpen, closeModal, name }: ModalProps) {
  const dispatch = useDispatch();
  const route = useRouter();
  const { closeModal: Close } = useAsideContext();

  function handleComplete() {
    dispatch(clearFavorites());
    dispatch(clearCart());
		Close()
    route.push("/");
  }
  return (
    <Modal
      isOpen={isOpen}
      className="modal-content"
      overlayClassName="modal-overlay"
      onRequestClose={closeModal}
    >
      <div className={styles.container}>
        <h1>Obrigado {name}!</h1>
        <p>Sua compra foi finalizada com sucesso</p>
        <div>
          <PrimaryButton label="Ir para loja" onClick={handleComplete} />
        </div>
      </div>
    </Modal>
  );
}
