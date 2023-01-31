import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpnse = (props) =>{
    const [addExpense, setExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpenses(expenseData);
    }

    const openForm = ()=>{
        setExpense(true);
    }

    const closeForm = ()=>{
        setExpense(false)
    }

    return <div className='new-expense'>
       {!addExpense && <button onClick={openForm}>Add New Expense</button>}
        {addExpense && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {closeForm}/>}
    </div>
}

export default NewExpnse;