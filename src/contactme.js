import React from 'react';
import { useState, Component } from 'react';
import './contactme.css';
// import pic from './pp.jpg'; // with import
import pic from './export-3-07568.jpg'; // with import
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
        document.title = "Keanu Natchev | Contact Me";
        return (

            <div className={(this.state.mountedContact) ? "wrapper-contact-me" : "wrapper-black-contact-me"} onLoad={this.wrapperTransition}>
                <h3 className="contact-me-title">Contact Me</h3>
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="contact-form-wrapper">
                    <div className="contact-me-user-info-picture">
                        <img className="contact-me-profile-picture" src={pic} />
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