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
        language: 'Français',
        
    };
    
    languageSelect = () => {
        // const [theme, setTheme] = usePersistedState('theme', 'light');
        // usePersistedState('language', 'English'); 
        (this.state.language == 'English') ? (this.setState({ language: 'Français' })) : (this.setState({ language: 'English' }));
    }

    render() {
        return (
            <div className="page-footer">
                <div className="social-media-links-languages">
                    <a href="https://github.com/keanutan" target="_blank">
                        <img className="social-media-links-languages-images" src={github} />
                    </a>
                    <a href="https://www.linkedin.com/in/keanu-natchev/" target="_blank">
                        <img className="social-media-links-languages-images" src={linkedin} />
                    </a>
                </div>
                <footer className="copyright-footer"> <small> Copyright © 2021 Keanu Natchev</small> </footer>
                <div className="social-media-links-languages" onClick={this.languageSelect}>
                    {this.state.language}
                </div>
            </div>
        )
    }
}
