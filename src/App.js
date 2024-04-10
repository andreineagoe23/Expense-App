import "./App.css";
import Navbar from "./navbar.js";
import Login from "./Login/login.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register/register.js";
import TrainingMainPage from "./Training/Training-Main-Page";
import TrainingSecondPage from "./Training/Training-Second-Page";
import TrainingFinishPage from "./Training/Training-Finish-Page";
import SupportCenter from './Support/Support-Center';
import SupportHelp from './Support/Support-Help';
import HomePage from "./Home/homepage.js";
import Expense from "./Expense/expense.js";
import Claimform from "./Claim/claim.js";
import Reimbursementform from "./Reimbursement/reimbursement.js";
import ForgotPassword  from "./Login/ForgotPassword";
import { auth } from "./firebase";
import GeneralQueries from "./Support/GeneralQueries.jsx";
import FinancialQueries from "./Support/FinancialQueries.jsx";
import TroubleQueries from "./Support/TroublesQueries.jsx";
import SecurityQueries from "./Support/SecurityQueries.jsx";
import Policies from "./Support/Policies.jsx";
import View from "./ViewExpense/view.js";

function App() {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setCurrentUser(user.email);
            } else {
                setCurrentUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar currentUser={currentUser} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/TrainingMainPage" element={<TrainingMainPage />} />
                    <Route path="/TrainingSecondPage" element={<TrainingSecondPage />} />
                    <Route path="/TrainingFinishPage" element={<TrainingFinishPage />} />
                    <Route path="/SupportCenter" element={<SupportCenter />} />
                    <Route path="/SupportHelp" element={<SupportHelp />} />
                    <Route path="/GeneralQueries" element={<GeneralQueries />} />
                    <Route path="/FinancialQueries" element={<FinancialQueries />} />
                    <Route path="/TroubleshootingQueries" element={<TroubleQueries />} />
                    <Route path="/SecurityQueries" element={<SecurityQueries />} />
                    <Route path="/Expense" element={<Expense />} />
                    <Route path="/claim" element={<Claimform />} />
                    <Route path="/reimbursement" element={<Reimbursementform />} />
                    <Route path="/Policies" element={<Policies />} />
                    <Route path="view" element={<View />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
