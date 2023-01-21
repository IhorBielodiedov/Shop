import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  singleProduct: {},
  productId: 1,
  singleProductLoadingStatus: "loading",
};

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  (arg, { getState }) => {
    const state = getState();
    const { request } = useHttp();
    return request(
      `https://fakestoreapi.com/products/${state.singleProduct.productId}`
    );
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    createId: (state, action) => {
      state.productId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.singleProductLoadingStatus = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProductLoadingStatus = "idle";
        state.singleProduct = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.singleProductLoadingStatus = "error";
      })
      .addDefaultCase(() => {});
  },
});

const { actions, reducer } = singleProductSlice;

export default reducer;
export const { createId } = actions;
