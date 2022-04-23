import React from "react";

// 실제로 사용할 데이터는 아님. 자동완성용
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;
