import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import "./Expenses.css";
function Expenses(props) {
  const [year, SetselectedYear] = useState("2020");

  function selectedValueHandler(yrr) {
    SetselectedYear(yrr);
  }
  return (
    <div className="expenses">
      <ExpenseFilter
        selectedYear={year}
        onValueSelected={selectedValueHandler}
      ></ExpenseFilter>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      /
    </div>
  );
}
export default Expenses;
