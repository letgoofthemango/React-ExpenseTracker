import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
    setEditing(false);
  };

  const isEditing = () => {
    setEditing(true);
  };
  const stopEditing = ()=>{
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!editing && <button onClick={isEditing}>Add new expense</button>}
      {editing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}
    </div>
  );
};

export default NewExpense;
