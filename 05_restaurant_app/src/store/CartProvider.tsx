import React, { useReducer } from "react";
import CartContext from "./cart-context";
import { FoodInfo } from "../types/food";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

interface CartProp {
    items: FoodInfo[];
    totalAmount: number;
}

interface CartActionProp {
    type: string;
    id?: string;
    item?: FoodInfo;
}

const cartReducer = (state: CartProp, action: CartActionProp) => {
    if (action.type === "ADD_CART_ITEM") {
        // if (state.items.includes(action.item))

        const exitingCartItemIndex = state.items.findIndex((item) => item.id === action.item!.id);
        const exitingCartItem = state.items[exitingCartItemIndex];

        let updateItems;
        if (exitingCartItem) {
            const updateItemOnlyAmount = {
                ...exitingCartItem,
                amount: exitingCartItem.amount! + action.item!.amount!,
            };
            updateItems = [...state.items];
            updateItems[exitingCartItemIndex] = updateItemOnlyAmount;
        } else {
            updateItems = state.items.concat(action.item!);
        }

        const updateTotalAomunt = state.totalAmount + action.item!.price * action.item!.amount!;

        return {
            items: updateItems,
            totalAmount: updateTotalAomunt,
        };
    }

    if (action.type === "REMOVE_CART_ITEM") {
        const exitingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const exitingCartItem = state.items[exitingCartItemIndex];
        console.log(exitingCartItem.price);
        const updateTotalAmount = state.totalAmount - exitingCartItem.price;

        let updateItems;
        if (exitingCartItem.amount! <= 1) {
            updateItems = state.items.filter((item) => item.id !== action.id);
        } else {
            updateItems = [...state.items];
            updateItems[exitingCartItemIndex] = {
                ...exitingCartItem,
                amount: exitingCartItem.amount! - 1,
            };
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addCartItemHandler = (item: FoodInfo) => {
        dispatchCartAction({ type: "ADD_CART_ITEM", item });
    };

    const removeCartItemhandler = (id: string) => {
        dispatchCartAction({ type: "REMOVE_CART_ITEM", id });
    };

    const cartContextObject = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addCartItemHandler,
        removeItem: removeCartItemhandler,
    };

    return <CartContext.Provider value={cartContextObject}>{children}</CartContext.Provider>;
};

export default CartProvider;
