import React, { useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import {ExpenseData, NewExpenseProp} from '../../types/expenseData';

const NewExpense = (props: NewExpenseProp) => {
    const [isAdding, setIsAdding] = useState(false);
    const toggleAdd = () => setIsAdding(!isAdding);
    
    const makeExpenseData = (data:ExpenseData) => {    
        const makeData = {
            ...data,
            id: String(Math.random())
        }
        props.addExpenseData(makeData);
    }
    
    return (
      <div className='new-expense'>
        {!isAdding
            ? <button type="button" onClick={toggleAdd}>Add New Expense</button>
            : <ExpenseForm onToggle={toggleAdd} isAdding={isAdding} makeExpenseData={makeExpenseData}/>
        }
        
      </div>
    );
  };

export default NewExpense;