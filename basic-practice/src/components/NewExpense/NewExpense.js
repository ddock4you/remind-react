import React, { useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const toggleAdd = () => setIsAdding(!isAdding);
    const makeExpenseData = (data) => {    
        const makeData = {
            ...data,
            id: Math.random()
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