import { useState } from "react";
import "./ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
  function clickHandler() {
    console.log("Checking if click handler works");
    setTtl("Chungus");
  }
  const [ttl, setTtl] = useState(props.title);
  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}> </ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2> {ttl} </h2>
        <div className="expense-item__price ">Rs: {props.amount} </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
