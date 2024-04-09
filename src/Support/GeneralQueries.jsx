import React from "react";
import { Link } from "react-router-dom";

const GeneralQueries = () => {
    return (
    <>
     <div className="GeneralQueries">
        <div className="GQ">General Enquires</div>
        <div className="Box">
          <div className="faq1">
            How can I track my expenses on the website?
            <br />
          </div>
          <div className="ans1">
            To track your expenses, you can create an account on our website and
            use our expense tracking tools. Simply log in to your account, <br/>add
            your expenses, categorize them, and monitor your spending over time.
          </div>
          <div className="faq2">Who can use the expense web app ?</div>
          <div className="ans2">
            Our web app is intended for anyone who wants to track and manage
            their personal or business expenses. This could include <br/> individuals,
            small business owners, freelancers, or teams within larger
            organizations.
          </div>
          <div className="faq3">
            How do I reset my password ?<br />
          </div>
          <div className="ans3">
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

        .faq1 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
    
        .ans1 {
          margin-top: 30px;
          font: 22px Inter, sans-serif;
        }
    
        .faq2 {
          font-family: Inter, sans-serif;
          margin-top: 107px;
        }
  
        .ans2 {
          margin-top: 24px;
          font: 22px Inter, sans-serif;
        }
  
        .faq3 {
          font-family: Inter, sans-serif;
          margin-top: 94px;
        }

        .ans3 {
          margin-top: 21px;
          font: 22px Inter, sans-serif;
        }
      `}</style>

    </>
  );
}

export default GeneralQueries;




