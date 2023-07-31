import React,{useState}from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {  
  const [enetredTitle,setEnteredTitle]=useState('');
  const [enetredAmount,setEnteredAmount]=useState('');
  const [enetredDate,setEnteredDate]=useState('')

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
 }
 
    const AmountChangeHandler=(event)=>{
      setEnteredAmount(event.target.value);
 }

 const DateChangeHandler=(event)=>{
  setEnteredDate(event.target.value);
}
const submitHandeler=(event)=>{
  event.preventDefault();
  const expenseData={
    title:enetredTitle,
    amount:+enetredAmount,
    date: new Date(enetredDate) ,
    id: Math.random().toString(),

  };
  console.log(expenseData);
  props.onsaveExpenseData(expenseData);
  setEnteredTitle('')
  setEnteredAmount('')
  setEnteredDate('')
}

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" 
          value={enetredTitle}
          onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="text"
          value={enetredAmount}
          min="0.01" step="0.01" onChange={AmountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
          value={enetredDate}
          min="2019-01-01" max="2022-12-31" onChange={DateChangeHandler} />
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={submitHandeler}>Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
