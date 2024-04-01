import React, { useState } from 'react';
import './TrainingSecondPage.css';
import { Link, useLocation } from "react-router-dom";
import rainVideo from './Rain_Drops_1.mp4';


import {
    BiGridAlt,
    BiCollection,
    BiFace,
    BiLineChart,
    BiCog,
    BiLogOut,
    BiChevronDown,
    BiSkipPrevious,
    BiHelpCircle,
    BiSkipNext,
    BiMenu
} from 'react-icons/bi';


const CustomizedBiLogOut = () => {
    return (
        <BiLogOut className="custom-logout-icon" />
    );
};
const CustomizedBiMenu = () => {
    return (
        <BiMenu className="custom-menu-icon" />
    );
};

const CustomizedBiFace = () => {
    return (
        <BiFace className='custom-face-icon' />
    )
}

const CustomizedBiGridAlt = () => {
    return (
        <BiGridAlt className='custom-grid-icon' />
    )
}
const CustomizedSkipPage = () => {
    return (
        <BiSkipNext className='custom-skip-icon' />
    )
}


const TrainingSecondPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [showVideo, setShowVideo] = useState(false);

    const handleVideoButtonClick = () => {
        setShowVideo(true);
    };
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const handleArrowClick = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleSidebarClick = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
    };

    const handleContentClick = (e) => {
        e.stopPropagation(); // Prevent click event from bubbling up to the section
    };

    return (
        <div className="training-second-page">
            <div className={`sidebar ${sidebarOpen ? '' : 'close'}`} onClick={handleSidebarClick}>
                <div className="logo-details">
                    <CustomizedBiFace/>
                    <span className="logo_name">   Hey User</span>
                </div>
                <ul className="nav-links">
                    <li key="dashboard">
                        <a href="#">
                            <CustomizedBiGridAlt/>
                            <span className="link_name">Dashboard</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Reports</a></li>
                        </ul>
                    </li>
                    <li key="category">
                        <div className="icon-link">
                            <a href="#">
                                <BiCollection/>
                                <span className="link_name">Reports</span>
                            </a>
                            <BiChevronDown className="arrow" onClick={handleArrowClick}/>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#"></a></li>
                            <li><a href="#">Create Report</a></li>
                            <li><a href="#">View Reports</a></li>
                            <li><a href="#">Past Reports</a></li>
                        </ul>
                    </li>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#"></a></li>
                    </ul>

                    <li key="category">
                        <div className="icon-link">
                            <a href="#">
                                <BiCollection/>
                                <span className="link_name">Budget</span>
                            </a>
                            <BiChevronDown className="arrow" onClick={handleArrowClick}/>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#"></a></li>
                            <li><a href="#">Create Budget</a></li>
                            <li><a href="#">Budget Tips</a></li>
                        </ul>
                    </li>
                    <li key="category">
                        <div className="icon-link">
                            <a href="#">
                                <BiCollection/>
                                <span className="link_name">Expense</span>
                            </a>
                            <BiChevronDown className="arrow" onClick={handleArrowClick}/>
                        </div>
                        <ul className="sub-menu">
                            <li><a className="link_name" href="#"></a></li>
                            <li><a href="#">View Expenses</a></li>
                            <li><a href="#">Recent Expenses</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <BiLineChart/>
                            <span className="link_name">Charts</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Charts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <BiHelpCircle/>
                            <span className="link_name">Support</span>
                        </a>
                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Support</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/login">
                            <BiCog/>
                            <span className="link_name">Login</span>
                        </Link>

                        <ul className="sub-menu blank">
                            <li><a className="link_name" href="#">Login</a></li>
                        </ul>
                    </li>
                    <li>
                        <div className="profile-details">
                            <div className="profile-content">
                            </div>
                            <CustomizedBiLogOut/>
                        </div>
                    </li>
                </ul>
            </div>
            <section className="home-section" onClick={handleContentClick}>
                <div className="home-content">
                    <CustomizedBiMenu/>
                    <span className="text"></span>
                </div>
            </section>
            <section className="how-to-section" style={{display: showVideo ? 'none' : 'block'}}>
                <div className="how-to-content">
                    <span className="how-to-text">How to file an expense:</span>
                </div>
            </section>
            <section className="video-section" style={{display: showVideo ? 'block' : 'none'}}>
                <div>
                    <video controls>
                        <source src={rainVideo} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                    <Link to="/TrainingFinishPage">
                        <button className = "next-button">Next -></button>
                    </Link>
                </div>
            </section>
            <section className="video-selection" style={{display: showVideo ? 'none' : 'block'}}>
                <div className="how-to-video">
                    <span className="how-to-button"></span>
                    <button className="video-button" onClick={handleVideoButtonClick}>Watch Video</button>
                </div>
            </section>

        </div>
    );
};

export default TrainingSecondPage;