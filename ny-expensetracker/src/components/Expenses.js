import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [year, SetselectedYear] = useState("2020");
  const [filteredExpense, setFilteredExpense] = useState(props.expenses);
  let contentData = "";
  function selectedValueHandler(yrr) {
    SetselectedYear(yrr);
    contentData = props.expenses.filter(
      (item) => item.date.getFullYear() == yrr
    );
    setFilteredExpense(contentData);

    console.log(contentData);
  }

  return (
    <div>
      <li>
        <div className="expenses">
          <ExpenseFilter
            selectedYear={year}
            onValueSelected={selectedValueHandler}
          ></ExpenseFilter>
          <ExpensesChart expenses={filteredExpense} />
          <ExpensesList arrs={filteredExpense} />
        </div>
      </li>
    </div>
  );
}
export default Expenses;
