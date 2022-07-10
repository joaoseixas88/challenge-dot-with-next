import Head from "next/head";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MovieCartCard } from "../../components/MovieCartCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import styles from "./styles.module.scss";

export default function Cart() {
  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <Header />
      <main className="routes">
        <div className={styles.container}>
          <div>
            <h1>Finalizar Compra</h1>
          </div>
          <div className={styles.above}>
            <div className={styles["inputs-container"]}>
              <Input placeholder="Nome Completo"/>
              <div>
                <Input placeholder="CPF"/>
                <Input placeholder="Celular"/>
              </div>
              <Input placeholder="E-mail"/>
              <div className={styles.address}>
                <div className={styles.addressCode}>
                  <Input placeholder="CEP"/>
                </div>
                <div className={styles.street}>
                  <Input placeholder="Endereço"/>
                </div>
              </div>
              <div>
                <Input placeholder="Cidade"/>
                <Input placeholder="Estado"/>
              </div>
            </div>
            <div className={styles["total-container"]}>
              <div className={styles.table}>
                <table>
                  <tbody>
                    <tr>
                      <th className={styles.left}>Imagem</th>
                      <th className={styles.left}>Nome</th>
                      <th className={styles.center}>Qtd</th>
                      <th className={styles.center}>Preço</th>
                      <th></th>
                    </tr>
                    <MovieCartCard />
                  </tbody>
                </table>
              </div>
							<div className={styles.totalPrice}>
								<h2>Total</h2>
								<h1>R$ 19,98</h1>
							</div>
							<div className={styles['btn-container']}>
								<PrimaryButton label="Finalizar"/>
							</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
