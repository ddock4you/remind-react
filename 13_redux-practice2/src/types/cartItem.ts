export interface CartItemProp {
    id: string;
    title: string;
    price: number;
    sumPrices?: number;
    numbers?: number;
    description?: string;
}

export interface CartProp {
    items: CartItemProp[];
    totalPrice: number;
    totalNumber: number;
}
