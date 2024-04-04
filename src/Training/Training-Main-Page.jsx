import React from 'react';
import './TrainingMainPage.css';
import techImg from './tech.jpg';

const TrainingMainPage = () => {
    return (
        <div>
            <a href="/TrainingSecondPage">
    <div className="intro-text">
        <p>Click here to watch this concise demonstration that will guide you through the process of recording expenses using our web app, submitting a report, and experiencing the approval process first-hand.</p>
    </div>
</a>

            <img src={techImg} alt='BackgroundImage' className='background-image'/>
            <div className="skip-page">
                <div className="next-page">
                </div>
                <button onClick={() => {window.location.href = '/TrainingSecondPage'}}>Next -&gt;</button>
            </div>
        </div>
    );
};

export default TrainingMainPage;
