import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import {ExpenseData} from '../../types/expenseData';

const ExpensesList = ({ items }:{items: ExpenseData[]}) => {
    if (items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }
    return (
        <ul className="expenses-list">
            {items.map(({ title, amount, date, id }:ExpenseData, i:number) => {
                return <ExpenseItem title={title} amount={amount} date={date} key={id} />;
            })}
        </ul>
    );
};

export default ExpensesList;
