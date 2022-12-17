import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    products: [],
    productsLoadingStatus: 'idle',
    countOfProducts: 9,
    newItemLoading: false
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    (arg, {getState}) => {
        const state = getState();
        const {request} = useHttp();
        return request(`https://fakestoreapi.com/products?limit=${state.products.countOfProducts}`);
    }
);

const shopListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsAdd: (state, action) => {
            state.newItemLoading = true;
            state.countOfProducts = state.countOfProducts + action.payload;
            console.log("productsAdd" + state.countOfProducts);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, state => {state.productsLoadingStatus = 'loading'})
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsLoadingStatus = 'idle';
                state.products = action.payload;})
            .addCase(fetchProducts.rejected, state => {
                state.productsLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = shopListSlice;

export default reducer;

export const {
    productsAdd
} = actions;