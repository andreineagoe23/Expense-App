import "./App.css";
import Navbar from "./navbar.js";
import Login from "./Login/login.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register/register.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/login.js" element={<Login />} />
        <Route path="/register.js" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
