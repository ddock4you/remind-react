import React from "react";
import { Food } from "../types/food";

interface CartProp {
    items: Food[] | [];
    totalAmount: number;
    addItem: (item: Food) => void;
    removeItem: (id: string) => void;
    clearItem: () => void;
}

const CartContext = React.createContext<CartProp>({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    clearItem: () => {},
});

export default CartContext;
