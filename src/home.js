import { useState, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './home.css';
import Footer from './Components/Footer';
import picture from './DSC02062.JPG';


class home extends Component {

    state = {
        hell: false,
    };


    wrapperrTransition = () => {
        this.setState({ hell: true });
    }

    render() {
        document.title = "Keanu Natchev | Portfolio";

        return (
            // <div className="App">
            <div className={(this.state.hell) ? "wrapper-home" : "wrapper-home-white"} onLoad={this.wrapperrTransition}>
                <div className="container-home">
                    <div className="user-info-home">
                        <img className="profile-picture-home" src={picture} />
                        <div className="user-info-home-section">
                            <div>
                                <h1 className="user-info-element">Keanu Natchev</h1>
                            </div>
                            <div>
                                <h1 className="user-info-element">Software Engineering Student at McGill University</h1>
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="menu-element">
                            <Link className="page-link" to="/about" >
                                <h1 className="page-name">About Me</h1>
                            </Link>
                        </div>
                        <div className="menu-element">
                            <Link className="page-link" to="/contact">
                                <h1 className="page-name">Contact</h1>
                            </Link>
                        </div>
                        <div className="menu-element">
                            <Link className="page-link" to="/projects">
                                <h1 className="page-name">Projects</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default home;