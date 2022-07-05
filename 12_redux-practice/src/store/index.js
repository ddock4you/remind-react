import { legacy_createStore as createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isShow: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
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

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 ...state,
//                 counter: state.counter + 1,
//             };

//         case "DECREMENT":
//             return {
//                 ...state,
//                 counter: state.counter - 1,
//             };

//         case "INCREASE":
//             return {
//                 ...state,
//                 counter: state.counter + action.amount,
//             };

//         case "TOGGLE_COUNTER":
//             return {
//                 ...state,
//                 isShow: !state.isShow,
//             };

//         default:
//             return state;
//     }
// };

// const store = createStore(counterReducer);

export default store;
