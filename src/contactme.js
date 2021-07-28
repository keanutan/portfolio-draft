import React from 'react';
import ReactDOM from 'react-dom';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import { Link } from 'react-router-dom/Link';
import './aboutme.css';
// import './pp.jpg';
import pic from './pp.jpg'; // with import
import resume from './Natchev_Keanu_Resume.pdf';


class contactme extends Component {

    state = {
        mounted: false,
        intro: false,
        burger: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        outOfRange: false,
        p: window.pageYOffset
    };















    wrapperTransition = () => {
        console.log("poop");
        this.setState({ mounted: true });
    }
    

    render() {

        return (

            <div className={(this.state.mounted) ? "wrapper" : "wrapper-white"} onLoad={this.wrapperTransition}>
                <h3 className="title">Contact Me</h3>
                <div className={(this.state.outOfRange) ? "scroll-to-top" : "scroll-to-top-hidden"} onClick={this.goToTop}>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </div>
                <nav className="navbar">
                    <div className="burger" onClick={this.handleBurgerClick}>

                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                        <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                    </div>
                    <ul className={(this.state.burger) ? "mo" : "mm"}>
                        <li>
                            <a>
                                <Link to="/">
                                    <h1 className="page-title">Home</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/about">
                                    <h1 className="page-title">About Me</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/contact">
                                    <h1 className="page-title">Contact</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/projects">
                                    <h1 className="page-title">Projects</h1>
                                </Link>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="about-user-info">
                    <div className="about-user-info-picture">
                        <img className="profile-picture" src={pic} />
                    </div>
                </div>
                <div className="about-user-info-resume">
                    <div className="technical-skills">
                        <h3 className="technical-skills-title">Technical Skills</h3>
                        <div className="technical-skills-content">
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Programming Languages</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Java</li>
                                    <li className="technical-skills-section-list-element">C</li>
                                    <li className="technical-skills-section-list-element">Python</li>
                                    <li className="technical-skills-section-list-element">Javascript</li>
                                    <li className="technical-skills-section-list-element">VHDL</li>
                                    <li className="technical-skills-section-list-element">ARM Assembly</li>
                                    <li className="technical-skills-section-list-element">BASH</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Tools</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Git</li>
                                    <li className="technical-skills-section-list-element">Cucumber.js</li>
                                    <li className="technical-skills-section-list-element">Linux</li>
                                    <li className="technical-skills-section-list-element">Gradle</li>
                                    <li className="technical-skills-section-list-element">Spring Boot</li>
                                    <li className="technical-skills-section-list-element">Heroku</li>
                                    <li className="technical-skills-section-list-element">Maven</li>
                                    <li className="technical-skills-section-list-element">Travis CI</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Frameworks</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">React.js</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Development Environments</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Visual Studio Code</li>
                                    <li className="technical-skills-section-list-element">Eclipse</li>
                                    <li className="technical-skills-section-list-element">Adobe Dreamweaver</li>
                                </ul>
                            </div>
                            <div className="technical-skills-section">
                                <h4 className="technical-skills-section-list-title">Other</h4>
                                <ul className="technical-skills-section-list">
                                    <li className="technical-skills-section-list-element">Figma</li>
                                    <li className="technical-skills-section-list-element">Adobe Photoshop</li>
                                    <li className="technical-skills-section-list-element">Adobe Premiere Pro</li>
                                    <li className="technical-skills-section-list-element">MS Office Suite</li>
                                    <li className="technical-skills-section-list-element">Webots</li>
                                    <li className="technical-skills-section-list-element">LeoCAD</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="work-experience">
                        <h3 className="work-experience-title">Work Experience</h3>
                        <div className="work-experience-content">
                            <div className="work-experience-content-entry">
                                <h4 className="work-experience-content-entry-title">Freelance Shopify Website Template Customization</h4>
                                <h4 className="work-experience-content-entry-date">March 2021</h4>
                                <ul className="work-experience-content-entry-list">
                                    <li className="work-experience-content-entry-list-element">Worked with owner of cimerestudio.com to customize website by working on CSS and Liquid files.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="personal-projects">
                        <h3 className="personal-projects-title">Personal Projects</h3>
                        <div className="personal-projects-content">
                            <div className="personal-projects-content-entry">
                                <h4 className="personal-projects-content-entry-title">Binary Search Tree Visualizer</h4>
                                <h4 className="personal-projects-content-entry-date">December 2020</h4>
                                <ul className="personal-projects-content-entry-list">
                                    <li className="personal-projects-content-entry-list-element">Built a Binary Search Tree Visualizer Java Applet using VSCode.</li>
                                    <li className="personal-projects-content-entry-list-element" >Implemented features such as adding/removing nodes, generating random trees, and traversal animations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="university-projects"></div>
                </div>
            </div>
        );
    }
}

export default contactme;
