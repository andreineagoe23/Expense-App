import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import loginBackground from "./login.jpeg";
import { auth, sendPasswordResetEmail } from "../firebase";


const ForgotPassword = () => {
    const [formData, setFormData] = useState({
        email: "",
    });
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, formData.email);
            setResetPasswordSuccess(true);
        } catch (error) {
            console.error("Forgot password error:", error);
        }
    };

    return (
        <div className="container">
            <div className="login-background">
                <img src={loginBackground} alt="login-background" />
            </div>
            <div className="login form">
                <header>Forgot Password</header>
                <form onSubmit={handleForgotPassword}>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input type="submit" className="button" value="Reset Password" />
                </form>
                {resetPasswordSuccess && (
                    <div className="success">Password reset email sent!</div>
                )}
                <div className="signup">
          <span className="signup">
            Remember your password? <Link to="/login">Login</Link>
          </span>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;