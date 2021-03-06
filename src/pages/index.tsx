import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { Header } from "../components/Header";
import { MovieCard } from "../components/MovieCard";
import { api } from "../services/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";
import { useMovies } from "../hooks/MoviesContext";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  price: string;
}

const Home = () => {
  const [page, setPage] = useState(1);
	// const 
  // const [movies, setMovies] = useState<Movie[]>([]);
	const {movies, setMovies} = useMovies()

  useEffect(() => {
    axios.get(`/api/movies/${page}`).then((res) => {
      setMovies([...res.data.data]);
			setPage(page+1)
    });
  }, []);

	function handleLoadMore(){
		axios.get(`/api/movies/${page}`).then((res) => {
      setMovies([...movies,...res.data.data]);
			setPage(page+1)
    });
	}

  return (
    <div>
      <Head>
        <title>Challenge-dot</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="routes">
        <div className={styles.container}>
          {movies.map((item) => {
            return <MovieCard key={item.id} item={item} />;
          })}
        </div>
      </main>
      <div className={styles["btn-container"]}>
        <div>
          <PrimaryButton label="Carregar mais" onClick={handleLoadMore}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
