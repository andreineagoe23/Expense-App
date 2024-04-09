import React from "react";
import { Link } from "react-router-dom";

const GeneralQueries = () => {
    return (
    <>
     <div className="GeneralQueries">
        <div className="GQ">General Enquires</div>
        <div className="gq-box">
          <div className="gq-faq1">
            How can I track my expenses on the website?
            <br />
          </div>
          <div className="gq-ans1">
            To track your expenses, you can create an account on our website and
            use our expense tracking tools. Simply log in to your account, <br/>add
            your expenses, categorize them, and monitor your spending over time.
          </div>
          <div className="gq-faq2">Who can use the expense web app ?</div>
          <div className="gq-ans2">
            Our web app is intended for anyone who wants to track and manage
            their personal or business expenses. This could include <br/> individuals,
            small business owners, freelancers, or teams within larger
            organizations.
          </div>
          <div className="gq-faq3">
            How do I reset my password ?<br />
          </div>
          <div className="gq-ans3">
            To reset your password on the expense web app, follow these steps:
            <br />
            Click on the 'Forgot Password' link.
            <br />
            Enter your registered ExpenseIn email address.
            <br />
            Once you receive the email, click the link to reset your password.
            <br />
            Enter your new password and click &quot;Reset Password.&quot;
          </div>
        </div>
      </div>
      <style jsx>{`
        .GeneralQueries {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 30px;
          color: #000;
          font-weight: 400;
          transform: translateX(10%)
        }

        .GQ {
          font-family: Inter, sans-serif;
          text-align: center;
          margin: auto 0;
          margin-top: 20px;
        }

        .gq-box {
          display: flex;
          width: 90%;
          margin-bottom: 50px;
          max-width: 12504px;
          flex-direction: column;
        }


        .gq-faq1 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
    
        .gq-ans1 {
          margin-top: 30px;
          font: 22px Inter, sans-serif;
        }
    
        .gq-faq2 {
          font-family: Inter, sans-serif;
          margin-top: 107px;
        }
  
        .gq-ans2 {
          margin-top: 24px;
          font: 22px Inter, sans-serif;
        }
  
        .gq-faq3 {
          font-family: Inter, sans-serif;
          margin-top: 94px;
        }

        .gq-ans3 {
          margin-top: 21px;
          font: 22px Inter, sans-serif;
        }
      `}</style>

    </>
  );
}

export default GeneralQueries;




