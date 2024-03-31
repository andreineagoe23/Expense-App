import "./App.css";
import Navbar from "./navbar.js";
import Login from "./Login/login.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterForm from "./Register/register.js";
import TrainingMainPage from "./Training/Training-Main-Page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path = "/TrainingMainPage" element={<TrainingMainPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
