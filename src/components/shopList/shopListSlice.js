import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const initialState = {
    products: [],
    productsLoadingStatus: 'idle'
}

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    () => {
        const {request} = useHttp();
        return request('https://fakestoreapi.com/products');
    }
);

const shopListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

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

const {reducer} = shopListSlice;

export default reducer;
