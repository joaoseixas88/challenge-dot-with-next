import { createSlice } from "@reduxjs/toolkit";

interface PayloadProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  price: number;
}

const initialArray: PayloadProps[] = [];

export const favorite = createSlice({
  name: "favorite",
  initialState: {
    movies: initialArray,
  },
  reducers: {
    addFavorite: (state, action) => {
			if(state.movies?.length !== 0){
				const movieAlreadyInList = state.movies?.some(item => item.id === action.payload.id)
				if(movieAlreadyInList) return
			}
      state.movies?.push({ ...action.payload });
      return state;
    },
    removeFavorite: (state, action) => {
			const movies = state.movies.filter((item) => item.id !== action.payload.id);
			state.movies = movies
      return state
    },
		clearFavorites: (state) => {
			state.movies = []
			return state
		}
  },
});

// Action creators are generated for each case reducer function
export const { addFavorite, removeFavorite, clearFavorites } = favorite.actions;

export default favorite.reducer;
