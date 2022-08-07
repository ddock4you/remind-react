import React from "react";
import {FoodInfo} from '../types/food';

interface cartContextProp {
    items: FoodInfo[] | [];
    totalAmount: number;
    addItem: (item: FoodInfo) => void;
    removeItem: (id: string) => void;
}

// 실제로 사용할 데이터는 아님. 자동완성용
const CartContext = React.createContext<cartContextProp>({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;
