import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: 'Bengalooru',
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),locationOfExpenditure: 'Chennai', },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: 'Hyderabad',
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: 'Kolkata',
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     {expenses.map((expense) => (<ExpenseItem 
  //     key = {expense.id}
  //     title = {expense.title}
  //     amount = {expense.amount}
  //     date = {expense.date}
  //     locationOfExpenditure = {expense.locationOfExpenditure}>
  //     </ExpenseItem>))}
  //   </div>
  // );
  
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = expense =>{
    setExpenses(preExpense => {
      return [expense, ...preExpense];
    })
  }

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
