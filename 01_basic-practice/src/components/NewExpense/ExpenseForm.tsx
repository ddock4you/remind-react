import React, { useState} from "react";
import "./ExpenseForm.css";
import {ExpenseData} from '../../types/expenseData';

interface ExpenseFormProp {
    makeExpenseData: (data:ExpenseData) => void,
    onToggle: () => void,
    isAdding: boolean
}

const ExpenseForm = ({makeExpenseData, onToggle, isAdding}:ExpenseFormProp) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const initForm = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    if(!isAdding) initForm();

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: 'amount',
    //     date: 'date'
    // });

    const titleChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return {...prevState, title: event.target.value}
        // })
    }

    const amountChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);       
    }

    const dateChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
    }

    const submitHandler = (event:React.FormEvent) => {
        event.preventDefault();

        const expenseDate = {
            title,
            amount: Number(amount),
            date: new Date(date)
        }
        makeExpenseData(expenseDate);
        initForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onToggle}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
