import React from 'react';
import { useState, Component } from 'react';
import './projects.css';
import pic from './pp.jpg'; // with import
import Navbar from './Components/Navbar';
import close from './Components/FileSystemComponents/close.svg';
import minimize from './Components/FileSystemComponents/minimize.svg';
import tab from './Components/FileSystemComponents/tab.svg';
import back from './Components/FileSystemComponents/back.svg';
import forward from './Components/FileSystemComponents/forward.svg';
import harddriveicon from './Components/FileSystemComponents/harddriveicon.svg';


class projects extends Component {


    state = {
        componentName: 'projects',
        mountedProjects: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        p: window.pageYOffset
    };

    wrapperTransitionProjects = () => {
        this.setState({ mountedProjects: true });
    }


    render() {
        document.title = "Keanu Natchev | Projects";
        return (

            <div className={(this.state.mountedProjects) ? "wrapper-contact" : "wrapper-black-contact"} onLoad={this.wrapperTransitionProjects}>
                <h3 className="title">Projects</h3>
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="projects-window-wrapper">
                    <div className="projects-window-top-bar">
                        <img className="projects-window-top-bar-icon" src={close} />
                        <img className="projects-window-top-bar-icon" src={minimize} />
                        <img className="projects-window-top-bar-icon" src={tab} />
                    </div>
                    <div className="projects-window-navigation-bar">
                        <img className="projects-window-navigation-bar-icon" src={back} />
                        <img className="projects-window-navigation-bar-icon" src={forward} />
                    </div>
                    <div className="projects-window-file-system-wrapper">
                        <div className="projects-window-file-system-sidebar">
                        <img className="projects-window-file-system-sidebar-icon" src={harddriveicon} />

                        </div>
                        <div className="projects-window-file-system-files"></div>
                    </div>
                    {/* <img className="profile-picture-projects" src={pic} height="0" /> */}
                </div>
            </div>
        );
    }
}

export default projects;