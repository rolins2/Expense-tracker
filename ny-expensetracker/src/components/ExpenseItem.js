import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  function clickHandler() {
    console.log("Checking if click handler works");
  }
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}> </ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price ">Rs: {props.amount} </div>
      </div>
      <button onClick={clickHandler}> Hello Button </button>
    </Card>
  );
}

export default ExpenseItem;
