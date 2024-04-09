import React from "react";
import { Link } from "react-router-dom";

const TroubleshootingQueries = ()  => {
    return(
    <>
    <div className="TroubleshootingQueries">
        <div className="TQ">Troubleshooting Enquires</div>
        <div className="tq-box">
          <div className="tq-faq1">
          I'm receiving error messages when trying to submit an expense reimbursement request. 
          What should I do?
            <br />
          </div>
          <div className="tq-ans1">
          Error messages when submitting reimbursement requests could indicate missing or
           incorrect information in the request form. Double-check all fields and ensure that
            you've provided all required information accurately. If you're still encountering errors, 
            please contact our support team for assistance.
          </div>
          <div className="tq-faq2">I'm experiencing slow performance on the website. 
          What could be causing this?</div>
          <div className="tq-ans2">
          Slow performance on the website could be due to various factors, such as
           network issues, browser compatibility issues, or heavy server load. Try
            clearing your browser cache and cookies, using a different browser, or 
            accessing the website from a different device. If the issue persists, please 
            let us know so we can investigate further.
          </div>
          <div className="tq-faq3">
          I'm unable to update my account information. How can I resolve this?<br />
          </div>
          <div className="tq-ans3">
          If you're having trouble updating your account information, ensure that you're logged in 
          with the correct credentials and that you have the necessary permissions to make changes. 
          If you're still unable to update your information, please contact our support team for assistance. 
          </div>
        </div>
      </div>
      <style jsx>{`
        .TroubleshootingQueries {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 30px;
          color: #000;
          font-weight: 400;
          transform: translateX(5%)
        }

        .TQ {
          font-family: Inter, sans-serif;
          text-align: center;
          margin: auto 0;
          margin-top: 50px;
        }

        .tq-box {
          display: flex;
          width: 90%;
          margin-bottom: 150px;
          max-width: 12504px;
          flex-direction: column;
        }


        .tq-faq1 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
    
        .tq-ans1 {
          margin-top: 30px;
          font: 22px Inter, sans-serif;
        }
    
        .tq-faq2 {
          font-family: Inter, sans-serif;
          margin-top: 107px;
        }
  
        .tq-ans2 {
          margin-top: 24px;
          font: 22px Inter, sans-serif;
        }
  
        .tq-faq3 {
          font-family: Inter, sans-serif;
          margin-top: 94px;
        }

        .tq-ans3 {
          margin-top: 21px;
          font: 22px Inter, sans-serif;
        }
      `}</style>
</>
    
    );
}

export default TroubleshootingQueries; 