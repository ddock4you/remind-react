import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartUiActions } from "./cartUi";
import { NotificationProp } from "../types/cartUi";
import { CartProp } from "../types/cartItem";

// {
//     id, title, sumPrices, numbers;
// }

const initialState: CartProp = {
    items: [],
    totalPrice: 0,
    totalNumber: 0,
};

const cartCalculateSlice = createSlice({
    name: "cartCalculate",
    initialState,
    reducers: {
        addItem(state, action) {
            const { id, price, title } = action.payload;
            const findItem = state.items.find((item) => item.id === id);

            if (findItem) {
                findItem.sumPrices += price;
                findItem.numbers! += 1;
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
            const findItem = state.items.find((item) => item.id === id)!;

            if (findItem.numbers === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                findItem.sumPrices! -= findItem.price;
                findItem.numbers! -= 1;
            }

            state.totalPrice -= findItem.price;
            state.totalNumber -= 1;
        },
    },
});

export const sendCartData = (cart: CartProp) => {
    return async (dispatch: (arg: PayloadAction<NotificationProp>) => void): Promise<any> => {
        const { showNotification } = cartUiActions;

        dispatch(
            showNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart Data..!",
            })
        );

        const sendRequest = async () => {
            await fetch("https://practice-http-react-default-rtdb.firebaseio.com/cart.json", {
                method: "PUT",
                body: JSON.stringify(cart),
            });
        };

        try {
            await sendRequest();
            dispatch(
                showNotification({
                    status: "success",
                    title: "Success",
                    message: "Sent cart Data Successful!",
                })
            );
        } catch (err) {
            dispatch(
                showNotification({
                    status: "error",
                    title: "Error",
                    message: "Sent cart Data Error!",
                })
            );
        }
    };
};

export const cartCalculateActions = cartCalculateSlice.actions;

export default cartCalculateSlice.reducer;
