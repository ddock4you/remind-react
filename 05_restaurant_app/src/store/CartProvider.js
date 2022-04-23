import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_CART_ITEM") {
        const updateItems = state.items.concat(action.item);
        const updateTotalAomunt = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updateItems,
            totalAmount: updateTotalAomunt,
        };
    }

    if (action.type === "REMOVE_CART_ITEM") {
    }

    return defaultCartState;
};

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addCartItemHandler = (item) => {
        dispatchCartAction({ type: "ADD_CART_ITEM", item });
    };

    const removeCartItemhandler = (id) => {
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
