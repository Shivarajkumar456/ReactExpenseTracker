import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmout] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     eneteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     eneteredTitle:event.target.value;
        // });
    }

    const amountChangeHandler = event =>{
        setEnteredAmout(event.target.value);
    }

    const dateChangeHandler = event =>{
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
    }

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2016-01-01' max='2025-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;