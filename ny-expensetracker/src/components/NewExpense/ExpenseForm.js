import { useState } from "react";
function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(
      "The entered title is " +
        enteredTitle +
        "\nThe entered amount is " +
        enteredAmount +
        "\nThe entered date is " +
        enteredDate
    );
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label>Title </label>
            <input type="text" onChange={titleChangeHandler}></input>
          </div>
          <div>
            <label>Amount</label>
            <input type="text" onChange={amountChangeHandler} />
          </div>
          <div>
            <label>Date</label>
            <input type="date" onChange={dateChangeHandler} />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
