function ExpenseFilter(props) {
  function selectedYear(event) {
    // console.log(event.target.value);
    props.onValueSelected(event.target.value);
  }
  return (
    <div>
      <label>Filter by year</label>
      <select value={props.selectedYear} onChange={selectedYear}>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
