import React, { useState } from 'react';
import './TrainingMainPage.css';
import techImg from './tech.jpg'
import intro3Img from './intro3.png'
import { Link, useLocation } from "react-router-dom";
import {
    BiGridAlt,
    BiCollection,
    BiFace,
    BiLineChart,
    BiCog,
    BiLogOut,
    BiChevronDown,
    BiMenu,
    BiTime,
    BiHelpCircle, BiSkipNext
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

const TrainingMainPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleArrowClick = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    };

    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    if (isLoginPage) {
        return null;
    }
    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleSidebarClick = (e) => {
        // Check if the clicked element is a link
        if (e.target.tagName === 'A') {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setSidebarOpen(!sidebarOpen);
        }
    };


    const handleContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <Link to="/TrainingSecondPage">
                <img src={intro3Img} alt='BackgroundImage' className='intro-image'/>
            </Link>
            <img src={techImg} alt='BackgroundImage' className='background-image'/>
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
            <div className="skip-page">
                <div className="next-page">
                </div>
                <CustomizedSkipPage/>
            </div>
        </>
    )
        ;
};
export default TrainingMainPage;