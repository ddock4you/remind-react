import { Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";

import './Expenses.css';
import './ExpenseItem.css';

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (value) => {
        setFilteredYear(value);
    }


    return (
        <Fragment>
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expenses.map(({title, amount, date}, i) => {
                    return (<ExpenseItem
                        title={title}
                        amount={amount}
                        date={date}
                        key={i}
                    />)
                })}
            </Card>
        </Fragment>
    )
}

export default Expenses;