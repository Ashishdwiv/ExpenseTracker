import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
function NewExpense(props) {
 
  const SaveExpenseDataHandeler=(enteredExpenseData)=>{
     const expenseData={
      enteredExpenseData,
      id: Math.random().toString(),
     }
     console.log("eia",expenseData)
     props.onAddExpense(expenseData.enteredExpenseData);
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onsaveExpenseData={SaveExpenseDataHandeler}/>
    </div>
  )
}

export default NewExpense