import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartUi, NotificationProp } from "../types/cartUi";

const initialState: CartUi = {
    isVisible: false,
    notification: null,
};

const cartUiSlice = createSlice({
    name: "cartUi",
    initialState,
    reducers: {
        toggleVisibleCart(state) {
            state.isVisible = !state.isVisible;
        },
        showNotification(state, action: PayloadAction<NotificationProp>) {
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
