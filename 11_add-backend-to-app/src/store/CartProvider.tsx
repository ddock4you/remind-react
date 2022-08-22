import React, { useReducer, ReactNode } from "react";
import { Food } from "../types/food";

import CartContext from "./cart-context";

interface stateProp {
    items: Food[];
    totalAmount: number;
}

interface actionProp {
    id?: string;
    type: string;
    item?: Food;
}

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state: stateProp, action: actionProp) => {
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item!.price * action.item!.amount;

        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item!.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item!.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item!);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === "CLEAR") {
        return defaultCartState;
    }

    return defaultCartState;
};

const CartProvider = (props: { children: ReactNode }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: Food) => {
        dispatchCartAction({ type: "ADD", item: item });
    };

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({ type: "REMOVE", id });
    };

    const clearItemFromCartHandler = () => {
        dispatchCartAction({ type: "CLEAR" });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearItem: clearItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
