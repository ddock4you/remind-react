import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

const store = configureStore({
    reducer: { counter: counterSlice, auth: authSlice },
});

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
