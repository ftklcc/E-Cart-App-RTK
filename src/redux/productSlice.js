import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchProduct = createAsyncThunk("fetch/getProduct", async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data.products;
});

export const fetchProductById = createAsyncThunk("fetch/getProductById", async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
});

const initialState = {
    products: [],
    selectedProduct: null,
    productLoading: false,
    selectedProductLoading: false,
    error: null,

    filters: {
        search: "",
        category: "all",
        sort: "",
    },
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilter: (state, action) => {
            const { name, value } = action.payload;
            state.filters[name] = value;
        },
        resetFilters: (state) => {
            state.filters = initialState.filters;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.productLoading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.productLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProduct.rejected, (state, action) => {
                state.productLoading = false;
                state.error = action.error.message;
            })
            //get By ID
            .addCase(fetchProductById.pending, (state) => {
                state.selectedProductLoading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.selectedProductLoading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.selectedProductLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilter, resetFilters } = productSlice.actions;
export default productSlice.reducer;
