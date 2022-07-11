import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import cartReducer from './slices/cart'
import favoriteReducer from './slices/favorites'

export const  store  = configureStore({
  reducer: {cart: cartReducer, favorites: favoriteReducer},
})






export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector