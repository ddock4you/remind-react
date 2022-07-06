import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShow: true };

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter += 1;
        },
        decrement(state) {
            state.counter -= 1;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.isShow = !state.isShow;
        },
    },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
