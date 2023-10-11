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
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      >
        {" "}
      </ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}
export default Expenses;
