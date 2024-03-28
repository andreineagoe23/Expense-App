import React from 'react';
import './claim.css';


const handleClear = () => {
  // Clear the form fields
  document.getElementById("myForm").reset();
};

function Claimform() {
  return (
    <>
        <h1>Expense Claim Form</h1>
        <form id="myForm" style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="companyName">Company Name:</label>
        <input type="text" id="companyName" />

        <label htmlFor="employeeName">Employee Name:</label>
        <input type="text" id="employeeName" />

        <label htmlFor="employeeID">Employee ID:</label>
        <input type="text" id="employeeID" />

        <label htmlFor="department">Department:</label>
        <input type="text" id="department" />

        <label htmlFor="expensePeriod">Expense Period:</label>
        <input type="date" id="expensePeriod" />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" />

        <label htmlFor="category">Category:</label>
        <input type="text" id="category" />

        <label htmlFor="description">Description:</label>
        <input type="text" id="description" />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>Clear Form</button>
        </div>
      </form>
    </>
  );
}

export default Claimform;