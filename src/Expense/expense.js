import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './expense.css';

function Expense() {
  return (
    <>
      <div className="main-content">
        <h1>Expense Management</h1>
        <div className="bottom-half">
          {/* Use Link components for navigation */}
          <Link className="heading" to="/claim">Claim an expense</Link>
          <Link className="heading" to="/track-expense">Track your expense</Link>
          <Link className="heading" to="/request-reimbursement">Request reimbursement</Link>
          <Link className="heading" to="/view-reports">View your expense reports</Link>
        </div>
      </div>
    </>
  );
}

export default Expense;
