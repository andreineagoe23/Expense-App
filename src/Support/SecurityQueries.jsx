import React from "react";
import { Link } from "react-router-dom";

const SecurityQueries = ()  => {
    return(
        <>
        <div className="SecurityQueries">
        <div className="SQ">Security Enquires</div>
        <div className="sq-box">
          <div className="sq-faq1">
          Is my data secure on your platform?
            <br />
          </div>
          <div className="sq-ans1">
          Yes, we take the security of your data seriously. Our platform 
          uses encryption protocols to protect your information, and we 
          adhere to industry best practices to ensure the confidentiality
           and integrity of your data.
          </div>
          <div className="sq-faq2">What measures do you take to protect against
           phishing and other fraudulent activities?</div>
          <div className="sq-ans2">
          We regularly monitor our systems for suspicious activity and employ advanced 
          anti-phishing measures to protect against fraudulent activities. Additionally, we educate 
          our users about phishing awareness and provide tips on how to recognize and avoid phishing 
          attempts.
          </div>
          <div className="sq-faq3">
          How can I report security vulnerabilities or concerns to your team?<br />
          </div>
          <div className="sq-ans3">
          If you discover a security vulnerability or have concerns about the security of our 
          website, please report it to our security team immediately. You can use our designated security c
          ontact email address or libve chat to submit your findings securely. 
          </div>
        </div>
      </div>
      <style jsx>{`
        .SecurityQueries {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 30px;
          color: #000;
          font-weight: 400;
          transform: translateX(5%)
        }

        .SQ {
          font-family: Inter, sans-serif;
          text-align: center;
          margin: auto 0;
          margin-top: 50px;
        }

        .sq-box {
          display: flex;
          width: 90%;
          margin-bottom: 150px;
          max-width: 12504px;
          flex-direction: column;
        }


        .sq-faq1 {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }
    
        .sq-ans1 {
          margin-top: 30px;
          font: 22px Inter, sans-serif;
        }
    
        .sq-faq2 {
          font-family: Inter, sans-serif;
          margin-top: 107px;
        }
  
        .sq-ans2 {
          margin-top: 24px;
          font: 22px Inter, sans-serif;
        }
  
        .sq-faq3 {
          font-family: Inter, sans-serif;
          margin-top: 94px;
        }

        .sq-ans3 {
          margin-top: 21px;
          font: 22px Inter, sans-serif;
        }
      `}</style>
</>
    );
}

export default SecurityQueries; 