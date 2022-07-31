export interface ExpenseData {
    title: string,
    amount:number,
    date: Date,
    id?: number
}

export interface NewExpenseProp {
addExpenseData: (data:ExpenseData) => void;
}