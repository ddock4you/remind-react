import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const makeExpenseData = (data) => {
        const makeData = {
            ...data,
            id: Math.random()
        }
        props.addExpenseData(makeData);
    }
    
    return (
      <div className='new-expense'>
        <ExpenseForm makeExpenseData={makeExpenseData}/>
      </div>
    );
  };

export default NewExpense;