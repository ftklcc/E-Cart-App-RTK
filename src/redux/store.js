import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";
import alertReducer from "./alertSlice";
export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        alert: alertReducer,
    },
});
