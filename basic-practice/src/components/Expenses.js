import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import './ExpenseItem.css';

const Expenses = ({expenses}) => {
    return (
        <div className="expenses">
            {expenses.map(({title, amount, date}, i) => {
                return (<ExpenseItem
                    title={title}
                    amount={amount}
                    date={date}
                    key={i}
                />)
            })}
        </div>
    )
}

export default Expenses;