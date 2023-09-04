import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expenseitem">
      <div>Date</div>
      <div className="expenseitem__description">
        <h2> Title </h2>
        <div className="expenseitem__price"> Anount </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
