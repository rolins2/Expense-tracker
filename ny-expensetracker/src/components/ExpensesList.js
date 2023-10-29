import ExpenseItem from "./ExpenseItem";
function ExpenseList(props) {
  let expenseContent = <p>No expenses found</p>;
  if (props.arrs.length === 0) {
    expenseContent = <p>No expenses found</p>;
  } else if (props.arrs.length > 0) {
    expenseContent = props.arrs.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return <li>{expenseContent}</li>;
}

export default ExpenseList;
