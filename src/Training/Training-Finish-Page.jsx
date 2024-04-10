import React, { useState } from 'react';
import './TrainingFinishPage.css';
import confettiVideo from './Confetti.mp4';

const TrainingFinishPage = () => {
    const [showVideo] = useState(true);

    return (
        <div className="training-finish-page">
            <section className="confetti-section" style={{ display: showVideo ? 'block' : 'none' }}>
                <div>
                    <video autoPlay muted>
                        <source src={confettiVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
            <div className="text-section">
                <div className="text-content">
                    <h2><strong>Congratulations</strong></h2>
                    <p>You have now completed the training demo for our app and are ready to embark on the journey of expense tracking.</p>
                    <p>Feel free to consult this video at any time, and for further help contact us on the support page</p>
                </div>
            </div>
        </div>
    );
};

export default TrainingFinishPage;
