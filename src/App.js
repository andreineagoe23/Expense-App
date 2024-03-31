import "./App.css";
import Navbar from "./navbar.js";
import Login from "./Login/login.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register/register.js";
import Expense from "./Expense/expense.js";
import Claimform from "./Claim/claim.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/claim" element={<Claimform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
