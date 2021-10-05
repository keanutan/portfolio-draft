import React, { Component } from 'react';
import './Footer.css';
// import french from './french.svg'; // with import
import french from './FooterImages/french.svg'; // with import
import github from './FooterImages/github.svg'; // with import
import linkedin from './FooterImages/linkedin.svg'; // with import
// import linkedin from './linkedin.svg'; // with import


export default class Footer extends Component {
    render() {
        return (
            <div className="page-footer">
                <div className="empty-div"></div>
                <footer className="copyright-footer"> <small> Copyright © 2021 Keanu Natchev</small> </footer>
                <div className="social-media-links-languages">
                    <img className="social-media-languages-footer-image" src={french} />
                    <img className="social-media-languages-footer-image" src={github} />
                    <img className="social-media-languages-footer-image" src={linkedin} />
                </div>
            </div>
        )
    }
}
