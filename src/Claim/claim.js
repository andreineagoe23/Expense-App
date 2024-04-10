import React, { useState } from 'react';
import './claim.css';

const Claimform = () => {
  const [CompanyName, setCompanyName] = useState('');
  const [EmployeeName, setEmployeeName] = useState('');
  const [EmployeeID, setEmployeeID] = useState('');
  const [Department, setDepartment] = useState('');
  const [ExpensePeriod, setExpensePeriod] = useState('');
  const [Date, setDate] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [Amount, setAmount] = useState('');
  const [error, setError] = useState(null); // Added setError state
  const [successMessage, setSuccessMessage] = useState(''); // New success message state

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const claim = {CompanyName, EmployeeName, EmployeeID, Department, ExpensePeriod, Date, Category, Description, Amount};
    
    try {
      const response = await fetch('http://localhost:4000/api/workouts/', {
        method: 'POST',
        body: JSON.stringify(claim),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();

      if (!CompanyName || !EmployeeName || !EmployeeID || !Department || !ExpensePeriod || !Date || !Category || !Description || !Amount) {
        // Set an error message if any field is empty
        setError('Please fill out the form correctly');
        return; // Stop the function from proceeding further
      }

      

      if (response.ok) {
      setError(null);
      setSuccessMessage('Expense added successfully'); // Set success message
      setCompanyName('');
      setEmployeeName('');
      setEmployeeID('');
      setDepartment('');
      setExpensePeriod('');
      setDate('');
      setCategory('');
      setDescription('');
      setAmount('');
      console.log('expense added:', json);

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // 3000 milliseconds = 3 seconds
      }

    } catch (error) {
      setError(error.message);
    }
  };

  const handleClear = () => {
    setCompanyName('');
    setEmployeeName('');
    setEmployeeID('');
    setDepartment('');
    setExpensePeriod('');
    setDate('');
    setCategory('');
    setDescription('');
    setAmount('');
    // Clear error state as well
    setError(null);
  };

  return (
    <div className="claim-form-container">
      <h1>Expense Claim Form</h1>
      <form className="claim-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" id="companyName" value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="employeeName">Employee Name:</label>
          <input type="text" id="employeeName" value={EmployeeName} onChange={(e) => setEmployeeName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="employeeID">Employee ID:</label>
          <input type="text" id="employeeID" value={EmployeeID} onChange={(e) => setEmployeeID(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input type="text" id="department" value={Department} onChange={(e) => setDepartment(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="expensePeriod">Expense Period:</label>
          <input type="date" id="expensePeriod" value={ExpensePeriod} onChange={(e) => setExpensePeriod(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={Date} onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={Category} onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" value={Description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" value={Amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        {error && <div style={{ color: 'red' }}>{error}</div>}
        {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}

        <div className="form-action-buttons">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="clear-button" onClick={handleClear}>Clear Form</button>
        </div>
      </form>
    </div>
  );
};

export default Claimform;