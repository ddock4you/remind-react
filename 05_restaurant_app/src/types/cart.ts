import {FoodInfo} from './food';

export interface CartDataProp {
    items: FoodInfo[];
    totalAmount: number;
}


export interface CartFuncProp {
    addItem: (item: FoodInfo) => void;
    removeItem: (id: string) => void
}