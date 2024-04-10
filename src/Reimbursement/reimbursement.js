import React from 'react';
import './reimbursement.css';


const handleClear = () => {
  document.getElementById("myForm").reset();
};

function Reimbursementform() {
  return (
    <>
        <h1>Reimbursement Form</h1>
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

        <label htmlFor="category">Employee Email:</label>
        <input type="email" id="email" />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" />
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClear}>Clear Form</button>
        </div>
      </form>
    </>
  );
}

export default Reimbursementform;