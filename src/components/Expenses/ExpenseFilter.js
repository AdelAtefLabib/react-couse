import React from "react";
import "./ExpenseFilter.css";
const ExpenseFilter = (props) => {
  const handleOnChange = (e) => {
    if(e.target.value !=="0")
    props.onSelectFilterValue(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleOnChange}>
          <option value="0">Select</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;