import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import products from '../components/shopList/shopListSlice'
import singleProduct from '../components/singleProduct/singleProductSlice';

const store = configureStore({
    reducer: {products, singleProduct},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;