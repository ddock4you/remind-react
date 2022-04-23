import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_CART_ITEM") {
        // if (state.items.includes(action.item))

        const exitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const exitingCartItem = state.items[exitingCartItemIndex];

        let updateItems;
        if (exitingCartItem) {
            const updateItemOnlyAmount = {
                ...exitingCartItem,
                amount: exitingCartItem.amount + action.item.amount,
            };
            updateItems = [...state.items];
            updateItems[exitingCartItemIndex] = updateItemOnlyAmount;
        } else {
            updateItems = state.items.concat(action.item);
        }

        const updateTotalAomunt =
            state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updateItems,
            totalAmount: updateTotalAomunt,
        };
    }

    if (action.type === "REMOVE_CART_ITEM") {
        const exitingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const exitingCartItem = state.items[exitingCartItemIndex];
        console.log(exitingCartItem.price);
        const updateTotalAmount = state.totalAmount - exitingCartItem.price;

        let updateItems;
        if (exitingCartItem.amount <= 1) {
            updateItems = state.items.filter((item) => item.id !== action.id);
        } else {
            updateItems = [...state.items];
            updateItems[exitingCartItemIndex] = {
                ...exitingCartItem,
                amount: exitingCartItem.amount - 1,
            };
        }

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        };
    }

    return defaultCartState;
};

const CartProvider = ({ children }) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

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

    return (
        <CartContext.Provider value={cartContextObject}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
