export interface ExpenseData {
    title: string,
    amount:number,
    date: Date,
    id?: string
}

export interface NewExpenseProp {
addExpenseData: (data:ExpenseData) => void;
}

export interface MonthData {
    label: string,
    value: number
}