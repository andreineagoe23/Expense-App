import React from "react";
import { Link } from "react-router-dom";

const FinancialQueries  = ()  => {
    return(
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
            The processing time for expense reimnbursements is roughly 3-5 working days.
          </div>
          <div className="fq-faq3">
            Are there any fees associated with using the expense tracking service?<br />
          </div>
          <div className="fq-ans3">
            No, our service is free for all users. 
          </div>
        </div>
      </div>
      <style jsx>{`
        .FinancialQueries {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 30px;
          color: #000;
          font-weight: 400;
          transform: translateX(10%)
        }

        .FQ {
          font-family: Inter, sans-serif;
          text-align: center;
          margin: auto 0;
          margin-top: 50px;
        }

        .fq-box {
          display: flex;
          width: 90%;
          margin-bottom: 150px;
          max-width: 12504px;
          flex-direction: column;
        }


        .fq-faq1 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
    
        .fq-ans1 {
          margin-top: 30px;
          font: 22px Inter, sans-serif;
        }
    
        .fq-faq2 {
          font-family: Inter, sans-serif;
          margin-top: 107px;
        }
  
        .fq-ans2 {
          margin-top: 24px;
          font: 22px Inter, sans-serif;
        }
  
        .fq-faq3 {
          font-family: Inter, sans-serif;
          margin-top: 94px;
        }

        .fq-ans3 {
          margin-top: 21px;
          font: 22px Inter, sans-serif;
        }
      `}</style>

        </>
    );
}

export default FinancialQueries; 