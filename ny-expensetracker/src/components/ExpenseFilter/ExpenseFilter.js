function ExpenseFilter(props) {
  return (
    <div>
      <label>Filter by year</label>
      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
