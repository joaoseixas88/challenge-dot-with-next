import { createSlice } from "@reduxjs/toolkit";

interface PayloadProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  price: number;
	quantity: number;
}



const initialArray: PayloadProps[] = [];

export const cartMovie = createSlice({
  name: "cart",
  initialState: {
    movies: initialArray,
  },
  reducers: {
    addMovie: (state, action) => {
			
			const movieAlreadyInList = state.movies?.find(item => item.id === action.payload.id)			
			if(movieAlreadyInList){
				const newMovieState = state.movies.map(item => {
					if(item.id === action.payload.id){
						const newQuantity = item.quantity + 1
						const newPrice = Number(item.price) + Number(action.payload.price)
					
						return {
							...item,
							quantity: newQuantity,
							price: newPrice
						}
					}
					return item
				})
				state.movies = newMovieState
				return state
			}								
			
      state.movies.push({ ...action.payload, quantity: 1 });
      return state;
    },
    removeMovie: (state, action) => {
			const movies = state.movies.filter((item) => item.id !== action.payload.id);
			state.movies = movies
      return state
    },
		clearCart: (state) => {
			state.movies = []
			return state
		}
  },
});

// Action creators are generated for each case reducer function
export const { addMovie, removeMovie,clearCart } = cartMovie.actions;

export default cartMovie.reducer;
