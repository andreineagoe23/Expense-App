import "./App.css";
import Navbar from "./navbar.js";
import Login from "./Login/login.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register/register.js";
import TrainingMainPage from "./Training/Training-Main-Page";
import TrainingSecondPage from "./Training/Training-Second-Page";
import TrainingFinishPage from "./Training/Training-Finish-Page";
import SupportCenter from './Support/Support-Center';
import SupportHelp from './Support/Support-Help';
import HomePage from "./Home/homepage.js";
import Expense from "./Expense/expense";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/TrainingMainPage" element={<TrainingMainPage />} />
                    <Route path="/TrainingSecondPage" element={<TrainingSecondPage />} />
                    <Route path="/TrainingFinishPage" element={<TrainingFinishPage />} />
                    <Route path="/SupportCenter" element={<SupportCenter />} />
                    <Route path="/SupportHelp" element={<SupportHelp />} />
                    <Route path="/Expense" element={<Expense />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
