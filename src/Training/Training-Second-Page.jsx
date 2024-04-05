import React, { useState } from 'react';
import './TrainingSecondPage.css';
import { Link } from "react-router-dom";
import rainVideo from './Rain_Drops_1.mp4';

const TrainingSecondPage = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleVideoButtonClick = () => {
        setShowVideo(true);
    };

    return (
        <>
            <section className="video-section" style={{ display: showVideo ? 'block' : 'none' }}>
                <div>
                    <video controls>
                        <source src={rainVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Link to="/TrainingFinishPage">
                        <button className="next-button">Next</button>
                    </Link>
                </div>
            </section>
            <section className="video-selection" style={{ display: showVideo ? 'none' : 'block' }}>
                <div className="how-to-video">
                    <h2 className="how-to-text">How to file an expense:</h2> {/* Added text */}
                    <span className="how-to-button"></span>
                    <button className="video-button" onClick={handleVideoButtonClick}>Watch Video</button>
                </div>
            </section>
        </>
    );
};

export default TrainingSecondPage;
