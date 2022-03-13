import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

import './Expenses.css';
import './ExpenseItem.css';

const Expenses = ({expenses}) => {
    return (
        <Card className="expenses">
            {expenses.map(({title, amount, date}, i) => {
                return (<ExpenseItem
                    title={title}
                    amount={amount}
                    date={date}
                    key={i}
                />)
            })}
        </Card>
    )
}

export default Expenses;