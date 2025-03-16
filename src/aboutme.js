import React from 'react';
import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './aboutme.css';
import profile from './Components/PersonalImages/profile_small.jpg'; // with import
import { TechnicalSkills } from './Components/ComponentData/TechnicalSkills';
import { UniversityProjectsEnglish, UniversityProjectsFrancais } from './Components/ComponentData/UniversityProjects';
import { PersonalProjectsEnglish, PersonalProjectsFrancais } from './Components/ComponentData/PersonalProjects';
import resume_en from './Components/Resume/Natchev_Keanu_CV_english.pdf';
import resume_fr from './Components/Resume/Natchev_Keanu_CV_francais.pdf';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';


class aboutme extends Component {

    aboutme_en = {
        pageTitle: 'About Me',
        TechnicalSkillsTitle: 'Technical Skills',
        WorkExperienceTitle: 'Work Experience',
        PersonalProjectsTitle: 'Personal Projects',
        UniversityProjectsTitle: 'University Projects',
        EducationTitle: 'Education',
        Title: '',
    };
    aboutme_fr = {
        pageTitle: 'À Propos',
        TechnicalSkillsTitle: 'Compétences Techniques',
        WorkExperienceTitle: 'Expérience de Travail',
        PersonalProjectsTitle: 'Projets Personnels',
        UniversityProjectsTitle: 'Projets Universitaires',
        EducationTitle: 'Éducation',
    };

    state = {
        language: 'English',
        componentName: 'aboutme',
        mounted: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        p: window.pageYOffset,
        pageTitle: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.aboutme_en.pageTitle) : (this.aboutme_fr.pageTitle),
        aboutMeData: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.aboutme_en) : (this.aboutme_fr),
    };

    wrapperTransition = () => {
        this.setState({ mounted: true });
    }

    // updateAboutMeStatesBasedOnLanguage = () => {
    //     switch (localStorage.getItem('language')) {
    //         case 'English':
    //             this.setState({ pageTitle: this.aboutme_en.pageTitle });
    //             this.setState({ aboutMeData: this.aboutme_en });
    //             break;

    //         case 'Français':
    //             this.setState({ pageTitle: this.aboutme_fr.pageTitle });
    //             this.setState({ aboutMeData: this.aboutme_fr });
    //             break;

    //         default:
    //             this.setState({ pageTitle: this.aboutme_en.pageTitle });
    //             this.setState({ aboutMeData: this.aboutme_en });
    //             break;
    //     }
    // }

    initializationAboutMe = () => {
        this.wrapperTransition();
        // this.updateAboutMeStatesBasedOnLanguage();
    }

    render() {
        document.title = (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Keanu Natchev | About Me') : ('Keanu Natchev | À Propos');

        return (

            <div className={(this.state.mounted) ? "wrapper-about-me" : "wrapper-black-about-me"} onLoad={this.initializationAboutMe}>
                <h3 className="about-me-title">{this.state.pageTitle}</h3>
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
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Hello there,') : ('Salut,')}
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('I am Keanu Natchev') : ('Je suis Keanu Natchev')}
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Software Engineering Student at McGill University in my last year.') : ('Étudiant en Génie en Logiciel à l\'Université de McGill dans ma dernière année.')}
                            </p>
                            <p className="about-me-user-info-text-paragraph">
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('I am very passionate about software development and design which you can check out by looking at the ') : ('Je suis très passionné par le développement et design de logiciel que vous pouvez voir en visitant la page ')}
                                <Link className="about-me-user-info-text-paragraph-link" to="/projects">
                                    {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('projects') : ('projets')}
                                </Link>
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (' section of my portfolio as well as taking a look at my resume found below.') : (' de mon portfolio ou même en lançant un coup d\'oeuil sur mon CV qui peut être trouvé ci-dessous.')}
                            </p>

                            <p className="about-me-user-info-text-paragraph">
                                {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Moreover, I am eager to start my professional software engineering carreer by doing an internship. For this purpose, you may contact me through the contact page of my portfolio by clicking the button below (in development).') : ('De plus, je suis exité d\'entamer ma carrière professionnelle en génie en logiciel en faisant un stage. Pour ce fait, vous pouvez me contactez à travers la page de contact de mon portfolio en cliquant le bouton ci-dessous (en développement).')}
                            </p>
                            <div className="resume-contact-button-section">
                                <a className="resume-link">
                                    {/* View Resume */}
                                    {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('View Resume') : ('Télécharger CV')}
                                    <div className='dropdown-resume'>
                                        <a className='resume-link-option' href={resume_en} target='_blank' rel='noopener noreferrer'>English</a>
                                        <a className='resume-link-option' href={resume_fr} target='_blank' rel='noopener noreferrer'>Français</a>
                                    </div>
                                </a>
                                <Link className="contact-me-link" to="/contact">
                                    {(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Contact Me') : ('Contactez-Moi')}
                                    {/* Contact Me */}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-user-info-resume">
                    <div className="technical-skills">
                        <h3 className="technical-skills-title">{this.state.aboutMeData.TechnicalSkillsTitle}</h3>
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
                        <h3 className="work-experience-title">{this.state.aboutMeData.WorkExperienceTitle}</h3>
                        <div className="work-experience-content">
                            <div className="work-experience-content-entry">
                                <h4 className="work-experience-content-entry-title">Amazon Software Development Engineer</h4>
                                <h4 className="work-experience-content-entry-date">January 2023 - Now</h4>
                                <ul className="work-experience-content-entry-list">
                                    {/* <li className="work-experience-content-entry-list-element">Worked with owner of <strong>cimerestudio.com</strong> to customize website by working on <strong>CSS</strong> and <strong>Liquid</strong> files.</li> */}
                                </ul>
                            </div>
                            <div className="work-experience-content-entry">
                                <h4 className="work-experience-content-entry-title">Amazon Software Development Engineer Intern</h4>
                                <h4 className="work-experience-content-entry-date">July - August 2022</h4>
                                <ul className="work-experience-content-entry-list">
                                    {/* <li className="work-experience-content-entry-list-element">Worked with owner of <strong>cimerestudio.com</strong> to customize website by working on <strong>CSS</strong> and <strong>Liquid</strong> files.</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="personal-projects">
                        <h3 className="personal-projects-title">{this.state.aboutMeData.PersonalProjectsTitle}</h3>
                        <div className="personal-projects-content">
                            {((localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (PersonalProjectsEnglish) : (PersonalProjectsFrancais)).map((project) => {
                                return (
                                    <div className="personal-projects-content-entry">
                                        <div className="personal-projects-content-entry-title-date-section">
                                            <h4 className="personal-projects-content-entry-title">{project.title}{project.githubLink})</h4>
                                            <h4 className="personal-projects-content-entry-date">{project.date}</h4>
                                        </div>
                                        <ul className="personal-projects-content-entry-list">
                                            {project.description.map((bullet) => {
                                                return (
                                                    <div>
                                                        {bullet}
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                        <br></br>
                                        <div className="personal-projects-content-entry-tools-title">{(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Tools:') : ('Outils:')}</div>
                                        <div className="personal-projects-content-entry-tools">
                                            {project.tools.map((tool) => {
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
                    <div className="university-projects">
                        <h3 className="university-projects-title">{this.state.aboutMeData.UniversityProjectsTitle}</h3>


                        <div className="university-projects-content">
                            {((localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (UniversityProjectsEnglish) : (UniversityProjectsFrancais)).map((project, index) => {
                                return (
                                    <div className="university-projects-content-entry">
                                        <div className="university-projects-content-entry-title-date-section">
                                            <h4 className="university-projects-content-entry-title">{project.title}</h4>
                                            <h4 className="university-projects-content-entry-date">{project.date}</h4>
                                        </div>
                                        <h5 className="university-projects-content-entry-class-title"><i>{project.class}</i></h5>
                                        <ul className="university-projects-content-entry-list">
                                            {project.description.map((bullet) => {
                                                return (
                                                    <div>
                                                        {bullet}
                                                    </div>
                                                )
                                            })}
                                        </ul>
                                        <br></br>
                                        <div className="university-projects-content-entry-tools-title">{(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Tools:') : ('Outils:')}</div>
                                        <div className="university-projects-content-entry-tools">
                                            {project.tools.map((tool) => {
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
                        <h3 className="education-title">{this.state.aboutMeData.EducationTitle}</h3>
                        <div className="education-content">
                            <div className="education-content-entry">
                                <div className="education-content-entry-title-date-section">
                                    <h4 className="education-content-entry-title">Bachelor of Software Engineering</h4>
                                    <h4 className="education-content-entry-date">December 2022</h4>
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