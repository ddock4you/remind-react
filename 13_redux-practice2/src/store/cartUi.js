import { createSlice } from "@reduxjs/toolkit";

const cartUiSlice = createSlice({
    name: "cartUi",
    initialState: {
        isVisible: false,
        notification: null,
    },
    reducers: {
        toggleVisibleCart(state) {
            state.isVisible = !state.isVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const cartUiActions = cartUiSlice.actions;

export default cartUiSlice.reducer;
