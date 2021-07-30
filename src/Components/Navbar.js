import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

    state = {
        burger: false,
        currentPage: this.props.pageName
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
                <ul className={(this.state.burger) ? "mo" : "mm"}>
                    <Link to="/">
                        <h1 className={(this.state.currentPage == "home") ? "page-title-hidden" : "page-title"}>Home</h1>
                    </Link>
                    <Link to="/about">
                        <h1 className={(this.state.currentPage == "aboutme") ? "page-title-hidden" : "page-title"}>About Me</h1>
                    </Link>
                    <Link to="/contact">
                        <h1 className={(this.state.currentPage == "contactme") ? "page-title-hidden" : "page-title"}>Contact</h1>
                    </Link>
                    <Link to="/projects">
                        <h1 className={(this.state.currentPage == "projects") ? "page-title-hidden" : "page-title"}>Projects</h1>
                    </Link>
                </ul>
            </nav>
        )
    }
}