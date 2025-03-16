import React, { Component, useEffect } from 'react';
import './Footer.css';
import github from './FooterImages/github.svg'; // with import
import linkedin from './FooterImages/linkedin.svg'; // with import

export default class Footer extends Component {


    state = {
        language: 'English',
    };

    handleLanguageSelect = () => {
        if (localStorage.getItem('language') == '') {
            localStorage.setItem('language', 'English');
            console.log('D');
        } else {
            (localStorage.getItem('language') == 'English') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
            (localStorage.getItem('language') == 'English') ? (this.setState({ language: 'Français' })) : ((this.setState({ language: 'English' })));
            console.log('E');
        }
        window.location.reload();
    };

    initialize = () => {
        switch (localStorage.getItem('language')) {
            case 'English':
                this.setState({ language: 'English' });
                console.log('C');
                break;

            case 'Français':
                this.setState({ language: 'Français' });
                console.log('B');
                break;

            default:
                localStorage.setItem('language', 'English');
                this.setState({ language: 'English' });
                console.log('A');
                break;
        }
    };

    render() {
        return (
            <div className="page-footer">
                <div className="social-media-links-languages">
                    <a href="https://github.com/keanutan" target="_blank">
                        <img className="social-media-links-languages-images" src={github} onLoad={this.initialize} />
                    </a>
                    <a href="https://www.linkedin.com/in/keanu-natchev/" target="_blank">
                        <img className="social-media-links-languages-images" src={linkedin} />
                    </a>
                </div>
                <footer className="copyright-footer"> <small> Copyright © 2021 - 2025 Keanu Natchev</small> </footer>
                <div className="social-media-links-languages" onClick={this.handleLanguageSelect}>
                    {(this.state.language == 'English') ? ('Français') : ('English')}
                </div>
            </div>
        )
    }
}
