import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  price: string;
}

interface MoviesContextProps{
	movies: Movie[]	
	setMovies: Dispatch<SetStateAction<Movie[]>>
}

type ProviderProps = {
	children: ReactNode
}


const moviesContext = createContext({} as MoviesContextProps)


export function MoviesContext({children}: ProviderProps){

	const [movies, setMovies] = useState<Movie[]>([])

	return(

		<moviesContext.Provider value={{movies, setMovies}}>
			{children}
	</moviesContext.Provider>
		)
}


export function useMovies(){
	const context = useContext(moviesContext)
	return context
}