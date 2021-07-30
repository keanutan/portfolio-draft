import React from 'react';
import { useState, Component } from 'react';
import './contactme.css';
import pic from './pp.jpg'; // with import
import Navbar from './Components/Navbar';


class contactme extends Component {
    
    
    state = {
        componentName: 'contactme',
        mountedContact: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        outOfRange: false,
        p: window.pageYOffset
    };















    wrapperTransition = () => {
        this.setState({ mountedContact: true });
    }


    render() {
        document.title = "Keanu Natchev | Contact Me";
        return (

            <div className={(this.state.mountedContact) ? "wrapper-contact" : "wrapper-black-contact"} onLoad={this.wrapperTransition}>
                <h3 className="title">Contact Me</h3>
                <div className={(this.state.outOfRange) ? "scroll-to-top" : "scroll-to-top-hidden"} onClick={this.goToTop}>
                    <div className="arrow-left"></div>
                    <div className="arrow-right"></div>
                </div>
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="contact-form-wrapper">
                    <div className="about-user-info-picture">
                        <img className="profile-picture" src={pic} />
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
            </div>
        );
    }
}

export default contactme;
