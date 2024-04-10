import React from "react";
import "./FinancialQueries.css"; // Import the CSS file

const FinancialQueries = () => {
    return (
        <>
            <div className="FinancialQueries">
                <div className="FQ">Financial Enquires</div>
                <div className="fq-box">
                    <div className="fq-faq1">
                        What payment methods are accepted for expense reimbursement?
                        <br />
                    </div>
                    <div className="fq-ans1">
                        We accept various methods of payment for expense reimbursement, including direct bank transfers,
                        PayPal, and company checks.
                    </div>
                    <div className="fq-faq2">How long does it take for expense reimbursement to be processed?</div>
                    <div className="fq-ans2">
                        The processing time for expense reimbursements is roughly 3-5 working days.
                    </div>
                    <div className="fq-faq3">
                        Are there any fees associated with using the expense tracking service?<br />
                    </div>
                    <div className="fq-ans3">
                        No, our service is free for all users.
                    </div>
                </div>
            </div>
        </>
    );
}

export default FinancialQueries;
