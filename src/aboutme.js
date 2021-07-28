import React from 'react';
import ReactDOM from 'react-dom';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
// import { Link } from 'react-router-dom/Link';
import './aboutme.css';
// import './pp.jpg';
import pic from './pp.jpg'; // with import
import { UniversityProjects } from './UniversityProjects';
import { TechnicalSkills } from './TechnicalSkills';
import resume from './Natchev_Keanu_Resume.pdf';
// import react from './react.png'



class aboutme extends Component {

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

    handleBurgerClick = () => {
        this.setState({ burger: !this.state.burger });
    }

    revealScroll = () => {
        if (window.pageYOffset > 400) {
            this.setState({ outOfRange: true });
        }
        else {
            this.setState({ outOfRange: false });
        }
    }

    goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    wrapperTransition = () => {
        console.log("poop");
        this.setState({ mounted: true });
    }

    render() {
        window.onscroll = () => {
            this.revealScroll();
            console.log("ff");
        }

        return (

            <div className={(this.state.mounted) ? "wrapper" : "wrapper-white"} onLoad={this.wrapperTransition}>
                <h3 className="title">About Me</h3>
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
                                <Link to="/portfolio-draft/">
                                    <h1 className="page-title">Home</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/portfolio-draft/about">
                                    <h1 className="page-title">About Me</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/portfolio-draft/contact">
                                    <h1 className="page-title">Contact</h1>
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a>
                                <Link to="/portfolio-draft/projects">
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
                    <div className="about-user-info-text-container">
                        <div className="about-user-info-text">
                            <p>
                                Hello there,
                            </p>
                            <p>
                                I'm Keanu Natchev
                            </p>
                            <p>
                                Software Engineering Student at McGill University completing my third year.
                            </p>
                            <p>
                                I am a very passionate about software development and design which you can check out by looking at projects I have completed in the past.
                            </p>
                            <div className="resume-contact-button-section">
                                <a className="resume-link" href={resume} target='_blank' rel='noopener noreferrer'>View Resume</a>
                                <Link className="contact-me-link" to="/contact">
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-user-info-resume">
                    <div className="technical-skills">
                        <h3 className="technical-skills-title">Technical Skills</h3>
                        <div className="technical-skills-content">
                            {TechnicalSkills.map((skill, index) => {
                                return (
                                    <div className="technical-skills-section">
                                        <h4 className="technical-skills-section-list-title">{skill.skillTitle}</h4>
                                        <ul className="technical-skills-section-list">
                                            {skill.skillElements.map((element, id) => {
                                                return (
                                                    <li className="technical-skills-section-list-element">{element}</li>

                                                )
                                            })}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="work-experience">
                        <h3 className="work-experience-title">Work Experience</h3>
                        <div className="work-experience-content">
                            <div className="work-experience-content-entry">
                                <h4 className="work-experience-content-entry-title">Freelance Shopify Website Template Customization</h4>
                                <h4 className="work-experience-content-entry-date">March 2021</h4>
                                <ul className="work-experience-content-entry-list">
                                    <li className="work-experience-content-entry-list-element">Worked with owner of <strong>cimerestudio.com</strong> to customize website by working on <strong>CSS</strong> and <strong>Liquid</strong> files.</li>
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
                                    <li className="personal-projects-content-entry-list-element">Built a Binary Search Tree Visualizer <strong>Java Applet</strong> using <strong>VSCode</strong>.</li>
                                    <li className="personal-projects-content-entry-list-element" >Implemented features such as adding/removing nodes, generating random trees, and traversal animations.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="university-projects">
                        <h3 className="university-projects-title">University Projects</h3>


                        <div className="university-projects-content">

                            {UniversityProjects.map((project, index) => {
                                return (
                                    <div className="university-projects-content-entry">
                                        <div className="university-projects-content-entry-title-date-section">
                                            <h4 className="university-projects-content-entry-title">{project.title}</h4>
                                            <h4 className="university-projects-content-entry-date">{project.date}</h4>
                                        </div>
                                        <h5 className="university-projects-content-entry-class-title"><i>{project.class}</i></h5>
                                        <ul className="university-projects-content-entry-list">
                                            {project.description.map((bullet, number) => {
                                                return (
                                                    <div>
                                                        {bullet}
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                        <br></br>
                                        <div className="university-projects-content-entry-tools-title">Tools Utilized:</div>
                                        <div className="university-projects-content-entry-tools">
                                            {project.tools.map((tool, ppppppp) => {
                                                return (
                                                    <div>
                                                        {tool}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="education">
                        <h3 className="education-title">Education</h3>
                        <div className="education-content">
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">Bachelor of Software Engineering</h4>
                                    <h4 className="education-content-entry-date">September 2017 - Present</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>McGill University, Montreal, QC</i></h5>
                            </div>
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">College Diploma in Pure and Applied Sciences</h4>
                                    <h4 className="education-content-entry-date">August 2017</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>Dawson College, Montreal, QC</i></h5>
                            </div>
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">High School Studies Diploma</h4>
                                    <h4 className="education-content-entry-date">June 2015</h4>
                                </div>
                                <h5 className="education-content-entry-class-title"><i>Collège Jean-Eudes, Montreal, QC</i></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutme;