import React from "react";
import { Link } from "react-router-dom";
import './SupportHelp.css'
import emailImg from "./email-icon.png";
import locationImg from "./location-icon.png";
import supportBubble from "./SupportBubble.png";
import supportPerson from "./SupportPerson.png";

const SupportHelp = () => {
    return (
        <div>
            <div className="text-container">
                <div className="support-text">
                    <h1>Welcome to the Support Center</h1>
                </div>
                <div className="contact-info-email">
                    <p>expenseapp@gmail.com</p>
                </div>
            </div>

            <img src={supportBubble} alt='Bubble' className='Support-Bubble2'/>
            <img src={supportPerson} alt='Person' className='Support-Person2'/>
            <img src={emailImg} alt='Person' className='Email-Icon2'/>
            <Link to="/SupportCenter">
                <button className="Center-Button">Go to Support Center</button>
            </Link>

            <div className="boxes">
                <Link to="/box1">
                    <div className="box">
                        <h2>How to Login/Register</h2>
                        <p>Description 1</p>
                    </div>
                </Link>
                <Link to="/box2">
                    <div className="box">
                        <h2>How to create an expense Form</h2>
                        <p>Description 2</p>
                    </div>
                </Link>
                <Link to="/box3">
                    <div className="box">
                        <h2>Title 3</h2>
                        <p>Description 3</p>
                    </div>
                </Link>
                <Link to="/box4">
                    <div className="box">
                        <h2>Title 4</h2>
                        <p>Description 4</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default SupportHelp;
