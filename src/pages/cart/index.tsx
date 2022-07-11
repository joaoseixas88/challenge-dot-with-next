import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { CompleteModal } from "../../components/CompleteModal";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MovieCartCard } from "../../components/MovieCartCard";
import { PrimaryButton } from "../../components/PrimaryButton";
import { useAsideContext } from "../../hooks/AsidesContext";
import { RootState, useAppSelector } from "../../store/store";
import { formatCurrency } from "../../utils/format";
import styles from "./styles.module.scss";

export default function Cart() {
  const store = useAppSelector((store: RootState) => store);
	const dispatch = useDispatch();
	const { openModal, closeModal, isModalOpen } = useAsideContext()
	const schema = yup.object({
		name: yup.string().required('Campo obrigatório'),
		cpf: yup.string().required('Campo obrigatório'),
		cellphone: yup.string().required('Campo obrigatório'),
		email: yup.string().required('Campo obrigatório'),
		cep: yup.string().required('Campo obrigatório'),
		address: yup.string().required('Campo obrigatório'),
		city: yup.string().required('Campo obrigatório'),
		state: yup.string().required('Campo obrigatório')
	})

  const total = store.cart.movies.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);

  const {
    handleSubmit,
    control,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
	
	const [name, setName] = useState('')
	const onSubmit: SubmitHandler<FormData> = (data) => {
    setName(data.name)
		openModal()
		
  };


  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      <Header />
      <main className="routes">
        <div className={styles.container}>
					<form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1>Finalizar Compra</h1>
          </div>
          <div className={styles.above}>
            <div className={styles["inputs-container"]}>
              <Input
                placeholder="Nome Completo"
                control={control}
                name={"Nome Completo"}
                fieldName="name"
                error={errors.name && errors.name.message}
                required
              />
              <div>
                <Input
                  placeholder="CPF"
                  control={control}
                  name={"CPF"}
                  fieldName="cpf"
                  error={errors.cpf && errors.cpf.message}
                  required
									mask="999.999.999-99"
                />
                <Input
                  placeholder="Celular"
                  control={control}
                  name={"Celular"}
                  fieldName="cellphone"
                  error={errors.cellphone && errors.cellphone.message}
                  required
									mask="(99) 99999-9999"
                />
              </div>
              <Input
                placeholder="E-mail"
                control={control}
                name={"E-mail"}
                fieldName="email"
                error={errors.email && errors.email.message}
                required
              />
              <div className={styles.address}>
                <div className={styles.addressCode}>
                  <Input
                    placeholder="CEP"
                    control={control}
                    name={"CEP"}
                    fieldName="cep"
                    error={errors.cep && errors.cep.message}
                    required
										mask="99999-999"
                  />
                </div>
                <div className={styles.street}>
                  <Input
                    placeholder="Endereço"
                    control={control}
                    name={"Endereço"}
                    fieldName="address"
                    error={errors.address && errors.address.message}
                    required
                  />
                </div>
              </div>
              <div>
                <Input
                  placeholder="Cidade"
                  control={control}
                  name={"Cidade"}
                  fieldName="city"
                  error={errors.city && errors.city.message}
                  required
                />
                <Input
                  placeholder="Estado"
                  control={control}
                  name={"Estado"}
                  fieldName="state"
                  error={errors.state && errors.state.message}
                  required
                />
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
                    {store.cart.movies?.length > 0 &&
                      store.cart.movies.map((item) => {
                        return <MovieCartCard item={item} key={item.id} />;
                      })}
                  </tbody>
                </table>
              </div>
              <div className={styles.totalPrice}>
                <h2>Total</h2>
                <h1>{formatCurrency(total.toFixed(2))}</h1>
              </div>
              <div className={styles["btn-container"]}>
                <PrimaryButton label="Finalizar" type={'submit'} />
              </div>
            </div>
          </div>
					</form>
					<CompleteModal isOpen={isModalOpen} name={name} closeModal={closeModal}/>
        </div>
      </main>
    </div>
  );
}
