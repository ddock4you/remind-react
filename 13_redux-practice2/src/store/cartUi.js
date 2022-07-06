import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: "cartUi",
    initialState: {
        isVisible: false,
    },
    reducers: {
        toggleVisibleCart(state) {
            state.isVisible = !state.isVisible;
        },
    },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
