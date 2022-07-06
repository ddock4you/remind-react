import { configureStore } from "@reduxjs/toolkit";
import cartUi from "./cartUi";
import cartCarculate from "./cartCarculate";

const store = configureStore({
    reducer: {
        cartUi,
        cartCarculate,
    },
});

export default store;
