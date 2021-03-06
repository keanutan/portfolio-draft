import React from 'react';
import { useState, Component } from 'react';
import './contactme.css';
// import pic from './pp.jpg'; // with import
import profile from './Components/PersonalImages/profile_small.jpg'; // with import
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


class contactme extends Component {
    
    
    state = {
        componentName: 'contactme',
        mountedContact: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        p: window.pageYOffset
    };

    wrapperTransition = () => {
        this.setState({ mountedContact: true });
    }


    render() {
        document.title = (localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Keanu Natchev | Contact Me') : ('Keanu Natchev | Contactez-Moi');
        
        return (

            <div className={(this.state.mountedContact) ? "wrapper-contact-me" : "wrapper-black-contact-me"} onLoad={this.wrapperTransition}>
                <h3 className="contact-me-title">{(localStorage.getItem('language') == 'English' || localStorage.getItem('language') != 'Français') ? ('Contact Me [UNDER CONSTRUCTION] Send an email to keanu.natchev@gmail.com') : ('Contactez-Moi [EN PROGRÈS] Envoyer un email à keanu.natchev@gmail.com')}</h3>
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="contact-form-wrapper">
                    <div className="contact-me-user-info-picture">
                        <img className="contact-me-profile-picture" src={profile} />
                    </div>
                    <div className="contact-form-user-info">
                        <div className="contact-form-user-input-section">
                            <div className="contact-form-user-input-section-title">First Name</div>
                            <input className="contact-form-user-first-name"></input>
                        </div>
                        <div className="contact-form-user-input-section">
                            <div className="contact-form-user-input-section-title">Last Name</div>
                            <input className="contact-form-user-last-name"></input>
                        </div>
                        <div className="contact-form-user-input-section">
                            <div className="contact-form-user-input-section-title">E-Mail</div>
                            <input className="contact-form-user-email"></input>
                        </div>
                    </div>
                    <textarea className="contact-form-user-message"></textarea>
                </div>
                <Footer />
            </div>
        );
    }
}

export default contactme;
