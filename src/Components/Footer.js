import React, { Component, useEffect } from 'react';
import './Footer.css';
// import french from './french.svg'; // with import
// import french from './FooterImages/french.svg'; // with import
import github from './FooterImages/github.svg'; // with import
import linkedin from './FooterImages/linkedin.svg'; // with import
// import linkedin from './linkedin.svg'; // with import

// function usePersistedState(key, defaultValue) {
//     const [state, setState] = React.useState(
//         () => JSON.parse(localStorage.getItem(key)) || defaultValue
//     );
//     useEffect(() => {
//         localStorage.setItem(key, JSON.stringify(state));
//     }, [key, state]);
//     return [state, setState];
// }


export default class Footer extends Component {


    state = {
        // language: 'Français',
        language: 'English',
        // language: '',

    };

    // localStorage.setItem('language', 'Français');

    // setLanguage = language => {
    //     window.localStorage.setItem('language', language);
    //     // this.setState({ language: language});
    // };

    // handleLanguageChange = (e) => {

    // };
    // initialize() {
    //     if (localStorage.getItem('language') != 'English' && localStorage.getItem('language') != 'Français') {
    //         localStorage.setItem('language', 'English');
    //     }
    //     if (localStorage.getItem('language') == 'English') {
    //         this.setState({ language: 'Français' });
    //     }
    //     else if (localStorage.getItem('language') == 'Français') {
    //         this.setState({ language: 'English' });
    //     }
    //     // if (this.state.language != 'English' && this.state.language != 'Français') {
    //     //     this.setState({ language: 'English'});
    //     // }
    // }

    handleLanguageSelect = () => {
        // const { language } = this.state;
        // (localStorage.getItem('language') == '') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
        // localStorage.setItem('language', language);
        if (localStorage.getItem('language') == '') {
            localStorage.setItem('language', 'English');
        } else {
            (localStorage.getItem('language') == 'English') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
            (localStorage.getItem('language') == 'English') ? (this.setState({ language: 'Français' })) : ((this.setState({ language: 'English' })));
        }
        // (localStorage.getItem('language') == 'English') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
        // (localStorage.getItem('language') == 'English') ? (this.setState({ language: 'Français' })) : ((this.setState({ language: 'English' })));
        window.location.reload();
    };

    // handleLanguageSelect = () => {
    //     // const { language } = this.state;
    //     // (localStorage.getItem('language') == '') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
    //     // localStorage.setItem('language', language);
    //     if (localStorage.getItem('language') == '') {
    //         localStorage.setItem('language', 'Français');
    //     } else {
    //         (localStorage.getItem('language') == 'Français') ? (localStorage.setItem('language', 'English')) : (localStorage.setItem('language', 'Français'));
    //         (localStorage.getItem('language') == 'Français') ? (this.setState({ language: 'English' })) : ((this.setState({ language: 'Français' })));
    //     }
    //     // (localStorage.getItem('language') == 'English') ? (localStorage.setItem('language', 'Français')) : (localStorage.setItem('language', 'English'));
    //     // (localStorage.getItem('language') == 'English') ? (this.setState({ language: 'Français' })) : ((this.setState({ language: 'English' })));
    //     window.location.reload();
    // };

    initialize = () => {
        if (localStorage.getItem('language') != 'English' && localStorage.getItem('language') != 'Français') {
            localStorage.setItem('language', 'English');
        }
        if (localStorage.getItem('language') == 'English') {
            this.setState({ language: 'Français' });
        }
        else if (localStorage.getItem('language') == 'Français') {
            this.setState({ language: 'English' });
        }
        // if (this.state.language != 'English' && this.state.language != 'Français') {
        //     this.setState({ language: 'English'});
        // }
    };

    // initialize = () => {
    //     if (localStorage.getItem('language') != 'Français' && localStorage.getItem('language') != 'English') {
    //         localStorage.setItem('language', 'Français');
    //     }
    //     if (localStorage.getItem('language') == 'Français') {
    //         this.setState({ language: 'English' });
    //     }
    //     else if (localStorage.getItem('language') == 'Français') {
    //         this.setState({ language: 'English' });
    //     }
    //     // if (this.state.language != 'English' && this.state.language != 'Français') {
    //     //     this.setState({ language: 'English'});
    //     // }
    // };

    // componentDidMount() {
    //     this.handleLanguageSelect();
    //     // const language = localStorage.getItem('language') === 'Français';
    //     // this.setState({ language });
    // }

    // setLanguage('Français');


    // languageSelect = () => {
    //     // const [theme, setTheme] = usePersistedState('theme', 'light');
    //     // usePersistedState('language', 'English'); 
    //     // (this.state.language == 'English') ? (this.setLanguage('Français')) : (this.setLanguage('English'));
    //     (window.localStorage.getItem('language') == 'English') ? (this.setLanguage('Français')) : (this.setLanguage('English'));
    //     // (this.state.language == 'English') ? (this.setState({ language: 'Français' })) : (this.setState({ language: 'English' }));
    // }

    // handleLanguageSelect();

    render() {
        // localStorage.setItem('language', 'Français');
        // localStorage.setItem('language', 'English');
        // this.setLanguage('English');
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
                <footer className="copyright-footer"> <small> Copyright © 2021 - 2022 Keanu Natchev</small> </footer>
                <div className="social-media-links-languages" onClick={this.handleLanguageSelect}>
                    {this.state.language}
                    {/* {window.localStorage.language} */}
                </div>
            </div>
        )
    }
}
