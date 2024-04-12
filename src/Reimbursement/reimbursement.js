import React, { useState } from 'react';
import './reimbursement.css';

function Reimbursementform() {
  // Initialize state for each form field
  const [formFields, setFormFields] = useState({
    companyName: '',
    employeeName: '',
    employeeID: '',
    department: '',
    expensePeriod: '',
    date: '',
    category: '',
    description: '',
    amount: ''
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormFields({
      ...formFields,
      [id]: value,
    });
  };

  // Handle form reset
  const handleClear = () => {
    setFormFields({
      companyName: '',
      employeeName: '',
      employeeID: '',
      department: '',
      expensePeriod: '',
      date: '',
      category: '',
      description: '',
      amount: ''
    });
  };

  return (
    <div className="re-claim-form-container">
      <h1>Reimbursement Claim Form</h1>
      <form className="re-claim-form">
        {/* Company Name */}
        <div className="re-form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" value={formFields.companyName} onChange={handleInputChange} />
        </div>

        {/* Employee Name */}
        <div className="re-form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" value={formFields.employeeName} onChange={handleInputChange} />
        </div>

        {/* Employee ID */}
        <div className="re-form-group">
          <label htmlFor="employeeID">Employee ID:</label>
          <input type="text" id="employeeID" value={formFields.employeeID} onChange={handleInputChange} />
        </div>

        {/* Department */}
        <div className="re-form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" value={formFields.department} onChange={handleInputChange} />
        </div>

        {/* Expense Period */}
        <div className="re-form-group">
          <label htmlFor="expensePeriod">Expense Period:</label>
          <input type="date" id="expensePeriod" value={formFields.expensePeriod} onChange={handleInputChange} />
        </div>

        {/* Date */}
        <div className="re-form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={formFields.date} onChange={handleInputChange} />
        </div>

        {/* Category */}
        <div className="re-form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={formFields.category} onChange={handleInputChange} />
        </div>

        {/* Description */}
        <div className="re-form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={formFields.description} onChange={handleInputChange} />
        </div>

        {/* Amount */}
        <div className="re-form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={formFields.amount} onChange={handleInputChange} />
        </div>

        <div className="form-action-buttons">
          <button type="button" className="clear-button" onClick={handleClear}>Clear Form</button>
          <button type="button" className="view-button" onClick={() => window.location.href = '/view'}>View Expenses</button>
        </div>
      </form>
    </div>
  );
}

export default Reimbursementform;
