import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {
    
    navbar_en = {
        home: 'Home',
        aboutMe: 'About Me',
        contact: 'Contact',
        projects: 'Projects',
    };
    navbar_fr = {
        home: 'Accueil',
        aboutMe: 'À Propos',
        contact: 'Contact',
        projects: 'Projets',
    };

    state = {
        // language: 'English',
        burger: false,
        currentPage: this.props.pageName,
        home: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.navbar_en.home) : (this.navbar_fr.home),
        aboutMe: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.navbar_en.aboutMe) : (this.navbar_fr.aboutMe),
        contact: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.navbar_en.contact) : (this.navbar_fr.contact),
        projects: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.navbar_en.projects) : (this.navbar_fr.projects),
    };


    handleBurgerClick = () => {
        this.setState({ burger: !this.state.burger });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="burger" onClick={this.handleBurgerClick}>

                    <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                    <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                    <div className={(this.state.burger) ? "burger-slice-open" : "burger-slice"}></div>
                </div>
                <ul className={(this.state.burger) ? "menu-open" : "menu-closed"}>
                    <Link to="/">
                        <h1 className={(this.state.currentPage == "home") ? "page-title-hidden" : "page-title"}>{this.state.home}</h1>
                    </Link>
                    <Link to="/about">
                        <h1 className={(this.state.currentPage == "aboutme") ? "page-title-hidden" : "page-title"}>{this.state.aboutMe}</h1>
                    </Link>
                    <Link to="/contact">
                        <h1 className={(this.state.currentPage == "contactme") ? "page-title-hidden" : "page-title"}>{this.state.contact}</h1>
                    </Link>
                    <Link to="/projects">
                        <h1 className={(this.state.currentPage == "projects") ? "page-title-hidden" : "page-title"}>{this.state.projects}</h1>
                    </Link>
                </ul>
            </nav>
        )
    }
}