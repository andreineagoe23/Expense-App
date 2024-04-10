// Policies.js

import React from "react";
import { Link } from "react-router-dom";
import './Policies.css';

const Policies = () => {
    return (
        <div className="policies-container">
            <h1 className="policy-header">Expense App Policies</h1>
            <div className="policy-list">
                <p><strong>1. Expense Submission:</strong> Every expenses must be sent with valid evidence attached.</p>
                <p><strong>2. Approvals:</strong> All expenses will go through a review and approval process by a designated team.</p>
                <p><strong>3. Categories:</strong> Expenses must be categorized according to guidelines.</p>
                <p><strong>4. Maximum Spending:</strong> Every employee has a spending amount that mustn't be exceeded.</p>
                <p><strong>5. Reports:</strong> All Employees are required to submit expense reports</p>
                <p><strong>6. Compliance:</strong> All expenses must comply with these policies at all times</p>
                <p><strong>7. Compliance:</strong> Employees mustn't submit reports for unrelated company expenses</p>
                <p><strong>8. Audits:</strong>Audits may be randomly conducted to ensure compliance with these expense policies </p>
                <p><strong>9. Acknowledgment:</strong> All Employees must review and stay up to date on these policies.</p>
                <p><strong>10. Data Privacy:</strong>We value and prioritize your privacy and security. All information iss securely stored</p>
            </div>
            <Link to="/SupportHelp">Back</Link>
        </div>
    );
};

export default Policies;
