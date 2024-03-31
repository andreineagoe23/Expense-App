import React, { useState } from 'react';
import './TrainingMainPage.css';
import techImg from './tech.jpg'
import {
    BiGridAlt,
    BiCollection,
    BiBookAlt,
    BiFace,
    BiLineChart,
    BiCog,
    BiLogOut,
    BiChevronDown,
    BiMenu,
    BiMoneyWithdraw,
    BiTime,
    BiHelpCircle
} from 'react-icons/bi';
const CustomizedBiLogOut = () => {
    return (
        <BiLogOut className="custom-logout-icon" />
    );
};
const CustomizedBiFace = () => {
    return (
        <BiFace className = 'custom-face-icon' />
    )
}
const CustomizedBiGridAlt = () => {
    return (
        <BiGridAlt className = 'custom-grid-icon' />
    )
}
const TrainingMainPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handleArrowClick = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
    };

    const handleSidebarToggle = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
        <div className={`sidebar ${sidebarOpen ? '' : 'close'}`}>

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
                    <a href="#">
                        <BiCog/>
                        <span className="link_name">Setting</span>
                    </a>
                    <ul className="sub-menu blank">
                        <li><a className="link_name" href="#">Setting</a></li>
                    </ul>
                </li>
                <li>
                    <div className="profile-details">
                        <div className="profile-content">
                        </div>
                        <CustomizedBiLogOut />
                    </div>
                </li>
            </ul>
        </div>
            <section className="home-section" onClick={handleSidebarToggle}>
                <div className="home-content">
                    <BiMenu className="bi-menu" />
                    <span className="text"></span>
                </div>
            </section>
        </>
    )
        ;
};
export default TrainingMainPage;