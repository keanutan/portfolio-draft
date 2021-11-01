import React from 'react';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './aboutme.css';
// import pic from './pp.jpg'; // with import
import profile from './Components/PersonalImages/profile.jpg'; // with import
import { UniversityProjects } from './Components/ComponentData/UniversityProjects';
import { TechnicalSkills } from './Components/ComponentData/TechnicalSkills';
import resume from './Components/Resume/Natchev_Keanu_Resume.pdf';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';



class aboutme extends Component {

    state = {
        componentName: 'aboutme',
        mounted: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        // outOfRange: false,
        p: window.pageYOffset
    };

    // revealScroll = () => {
    //     if (window.pageYOffset > 400) {
    //         this.setState({ outOfRange: true });
    //     }
    //     else {
    //         this.setState({ outOfRange: false });
    //     }
    // }

    // goToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // }

    wrapperTransition = () => {
        this.setState({ mounted: true });
    }

    render() {
        document.title = "Keanu Natchev | About Me";

        // window.onscroll = () => {
        //     this.revealScroll();
        // }

        return (

            <div className={(this.state.mounted) ? "wrapper-about-me" : "wrapper-black-about-me"} onLoad={this.wrapperTransition}>
                <h3 className="about-me-title">About Me [ALMOST COMPLETE]</h3>
                <ScrollToTop></ScrollToTop>
                {/* <div className={(this.state.outOfRange) ? "scroll-to-top" : "scroll-to-top-hidden"} onClick={this.goToTop}>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </div> */}
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="about-user-info">
                    <div className="about-user-info-picture">
                        <img className="profile-picture" src={profile} />
                    </div>
                    <div className="about-user-info-text-container">
                        <div className="about-user-info-text">
                            <p className="about-me-user-info-text-paragraph">
                                Hello there,
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                I'm Keanu Natchev
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                Software Engineering Student at McGill University completing my third year.
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                I am very passionate about software development and design which you can check out by looking at the&nbsp;
                                <Link className="about-me-user-info-text-paragraph-link" to="/projects">
                                    projects
                                </Link>
                                &nbsp;section of my portfolio as well as taking a look at my Resume found below.
                            </p>

                            <p className="about-me-user-info-text-paragraph">
                                Moreover, I am eager to start my professional software engineering carreer by doing an internship.
                                
                                For this purpose, you may contact me through the contact page of my portfolio by clicking the Contact Me button below.
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
                <Footer />
            </div>
        );
    }
}

export default aboutme;