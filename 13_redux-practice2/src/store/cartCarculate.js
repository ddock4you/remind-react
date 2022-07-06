import { createSlice } from "@reduxjs/toolkit";

// {
//     id, title, sumPrices, numbers;
// }

const cartCalculateSlice = createSlice({
    name: "cartCalculate",
    initialState: {
        items: [],
        totalPrice: 0,
        totalNumber: 0,
    },
    reducers: {
        addItem(state, action) {
            const { id, price, title } = action.payload;
            const findItem = state.items.find((item) => item.id === id);

            if (findItem) {
                findItem.sumPrices += price;
                findItem.numbers += 1;
            } else {
                state.items.push({
                    id,
                    title,
                    price,
                    sumPrices: price,
                    numbers: 1,
                });
            }
            state.totalPrice += price;
            state.totalNumber += 1;
        },
        removeItem(state, action) {
            const id = action.payload;
            const findItem = state.items.find((item) => item.id === id);

            if (findItem.numbers === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                findItem.sumPrices -= findItem.price;
                findItem.numbers -= 1;
            }

            state.totalPrice -= findItem.price;
            state.totalNumber -= 1;
        },
    },
});

export const cartCalculateActions = cartCalculateSlice.actions;

export default cartCalculateSlice.reducer;
