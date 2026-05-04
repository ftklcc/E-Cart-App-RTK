import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    message: "",
    type: "",
};

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        setAlert: (state, action) => {
            state.isOpen = true;
            state.message = action.payload.message;
            state.type = action.payload.type || "info";
        },
        closeAlert: (state) => {
            state.isOpen = false;
            state.message = "";
            state.type = "";
        },
    },
});

export const { setAlert, closeAlert } = alertSlice.actions;
export default alertSlice.reducer;
