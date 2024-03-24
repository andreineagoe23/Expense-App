import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login/login.js";
import RegisterForm from "./Register/register.js";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="middle-buttons">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <button>Button 4</button>
          </div>
          <div className="right-buttons">
            <Link to="./Login/login.js">
              <button>Login</button>
            </Link>
            <Link to="./Register/register.js">
              <button>Become a member</button>
            </Link>
          </div>
        </header>
      </div>
      <Routes>
        <Route path="./Login/login.js" component={Login} />
      </Routes>
      <Routes>
        <Route path="./Register/register.js" component={RegisterForm} />
      </Routes>
    </Router>
  );
}

export default App;
