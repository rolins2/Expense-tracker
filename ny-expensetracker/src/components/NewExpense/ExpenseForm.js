function ExpenseForm() {
  return (
    <div>
      <form>
        <div>
          <div>
            <label>Title </label>
            <input type="text"></input>
          </div>
          <div>
            <label>Amount</label>
            <input type="text" />
          </div>
          <div>
            <label>Date</label>
            <input type="date" />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ExpenseForm;
