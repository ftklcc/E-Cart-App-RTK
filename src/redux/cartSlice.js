import { createSlice } from "@reduxjs/toolkit";

const loadStorage = () => {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
};

const initialState = {
    cartItems: loadStorage(),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQuantity: (state, action) => {
            const items = state.cartItems.find((i) => i.id === action.payload);
            if (items) {
                items.quantity -= 1;
                if (items.quantity === 0) {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
                }
            }
        },
        removeCartItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        removeAllItems: (state) => {
            state.cartItems = [];
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeCartItem, removeAllItems } =
    cartSlice.actions;
export default cartSlice.reducer;
