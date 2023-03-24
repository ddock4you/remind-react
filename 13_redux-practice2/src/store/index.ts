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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
