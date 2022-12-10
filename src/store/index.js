import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import products from '../components/shopList/shopListSlice'

const store = configureStore({
    reducer: products,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;