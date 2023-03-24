import React, { Fragment, useState } from "react";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import './Expenses.css';
import './ExpenseItem.css';
import ExpensesChart from "./ExpensesChart";
import {ExpenseData} from '../../types/expenseData';

const Expenses = ({expenses}:{expenses: ExpenseData[]}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (value:string) => setFilteredYear(value);
    const filteredExpenses = expenses.filter(
        ({ date }) => String(date.getFullYear()) === filteredYear
    );    

    return (
        <Fragment>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </Fragment>
    )
}

export default Expenses;