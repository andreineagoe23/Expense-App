import "./App.css";
import Navbar from "./navbar.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login.js";
import RegisterForm from "./Register/register.js";
import TrainingMainPage from "./Training/Training-Main-Page";
import TrainingSecondPage from "./Training/Training-Second-Page";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/TrainingMainPage" element={<TrainingMainPage />} />
                    <Route path="/TrainingSecondPage" element={<TrainingSecondPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
