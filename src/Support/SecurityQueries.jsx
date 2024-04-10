import React from "react";
import "./SecurityQueries.css"; // Import the CSS file

const SecurityQueries = () => {
    return (
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
                        ontact email address or live chat to submit your findings securely.
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecurityQueries;
