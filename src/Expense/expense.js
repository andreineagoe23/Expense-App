// expense.js
import React from 'react';
import { Link } from 'react-router-dom';
import './expense.css';

function Expense() {
  return (
    <>
      <div className="main-content">
        <div className="title">
          <h1>Expense Management</h1>
          <p>Ensuring your employees receive reimbursement for their business-related expenses is essential, alongside verifying the legitimacy and accuracy of these expenses. This is where effective expense management comes into play: by implementing suitable systems, employees can promptly report their expenses for reimbursement, while you can ensure thorough monitoring and recording.</p>
        </div>
        <div className="buttons-container">
          <Link className="heading" to="/claim">
            <div>
              <h3>Claim an Expense</h3>
              <p>Make an expense claim from anywhere.</p>
            </div>
          </Link>
          <Link className="heading" to="/track-expense">
            <div>
            <h3>Track your Expenses</h3>
              <p>Track your expenses from anywhere.</p>
            </div>
          </Link>
          <Link className="heading" to="/reimbursement">
            <div>
            <h3>Request Reimbursement</h3>
              <p>Request for a reimbursement.</p>
            </div>
          </Link>
          <Link className="heading" to="/view-reports">
            <div>
            <h3>View Expense Reports</h3>
              <p>View your history of expense reports.</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Expense;