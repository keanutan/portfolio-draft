import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import './home.css';
import Footer from './Components/Footer';
// import picture from './DSC02062.JPG';


class home extends Component {

    home_en = {
        data: 'Software Engineering Student at McGill University',
        aboutMe: 'About Me',
        contact: 'Contact',
        projects: 'Projects',
    }
    home_fr = {
        data: "Étudiant en Génie en Logiciel à l'Université de McGill",
        aboutMe: 'À Propos',
        contact: 'Contact',
        projects: 'Projets',
    }

    state = {
        hell: false,
        data: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.home_en.data) : (this.home_fr.data),
        aboutMe: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.home_en.aboutMe) : (this.home_fr.aboutMe),
        contact: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.home_en.contact) : (this.home_fr.contact),
        projects: (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? (this.home_en.projects) : (this.home_fr.projects),
    };

    // updateStatesBasedOnLanguage = () => {
    //     switch (localStorage.getItem('language')) {
    //         case 'English':
    //             this.setState({ data: this.home_en.data });
    //             this.setState({ aboutMe: this.home_en.aboutMe });
    //             this.setState({ contact: this.home_en.contact });
    //             this.setState({ projects: this.home_en.projects });
    //             break;

    //         case 'Français':
    //             this.setState({ data: this.home_fr.data });
    //             this.setState({ aboutMe: this.home_fr.aboutMe });
    //             this.setState({ contact: this.home_fr.contact });
    //             this.setState({ projects: this.home_fr.projects });
    //             break;

    //         default:
    //             this.setState({ data: this.home_en.data });
    //             this.setState({ aboutMe: this.home_en.aboutMe });
    //             this.setState({ contact: this.home_en.contact });
    //             this.setState({ projects: this.home_en.projects });
    //             break;
    //     }
    // }





    wrapperrTransition = () => {
        this.setState({ hell: true });
    }

    poop = () => {
        if (localStorage.getItem('language') == 'English') {
            return this.home_en.data;
        }
        else {
            return this.home_fr.data;
        }
    }
    // handleChange = () => {
    //     if (localStorage.getItem('language') == 'English') {
    //         this.setState({ data: this.home_en.data });
    //     }
    //     else {
    //         this.setState({ data: this.home_fr.data });
    //     }
    // }

    // componentDidUpdate() {
    //     console.log(localStorage.getItem('language'));
    // }

    initialization = () => {
        this.wrapperrTransition();
        // this.updateStatesBasedOnLanguage();
    }

    render() {
        document.title = "Keanu Natchev | Portfolio";
        // document.addEventListener
        // this.componentDidUpdate();

        return (
            <div className={(this.state.hell) ? "wrapper-home" : "wrapper-home-white"} onLoad={this.initialization}>
                <div className="container-home">
                    <div className="user-info-home">
                        <img className="profile-picture-home" />
                        <h1 className="user-info-element">Keanu Natchev</h1>
                        <h1 className="user-info-element" onChange={this.handleChange}>
                            {/* Software Engineering Student at McGill University */}
                            {/* {this.state.data} */}
                            {/* {this.poop()} */}
                            {this.state.data}
                        </h1>
                    </div>
                    <div className="menu">
                        <Link className="page-link" to="/about" >
                            <div className="menu-element">
                                <h1 className="page-name">
                                    {this.state.aboutMe}
                                    {/* About Me */}
                                </h1>
                            </div>
                        </Link>
                        <Link className="page-link" to="/contact">
                            <div className="menu-element">
                                <h1 className="page-name">
                                    {this.state.contact}
                                    {/* Contact */}
                                </h1>
                            </div>
                        </Link>
                        <Link className="page-link" to="/projects">
                            <div className="menu-element">
                                <h1 className="page-name">
                                    {this.state.projects}
                                    {/* Projects */}
                                </h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default home;