import React from 'react';
import { useState, Component } from 'react';
import './projects.css';
import { FileSystem } from './FileSystem';
import pic from './pp.jpg'; // with import
import Navbar from './Components/Navbar';
import close from './Components/FileSystemComponents/close.svg';
import minimize from './Components/FileSystemComponents/minimize.svg';
import tab from './Components/FileSystemComponents/tab.svg';
import back from './Components/FileSystemComponents/back.svg';
import forward from './Components/FileSystemComponents/forward.svg';
import harddriveicon from './Components/FileSystemComponents/harddriveicon.svg';
import folder from './Components/FileSystemComponents/folder.svg';


class projects extends Component {


    state = {
        componentName: 'projects',
        mountedProjects: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        p: window.pageYOffset,
        folderName: 'Keanutan',
        folderLevel: 1
    };

    wrapperTransitionProjects = () => {
        this.setState({ mountedProjects: true });
    }

    SubfoldersNameMatch(name, folder) {
        for (let index = 0; index < folder.length; index++) {
            if (folder[index].Name == name) return true;
        }
        return false;
    }

    FindParentFolder(item, folder) {
        if (item == null) return;
        if (this.SubfoldersNameMatch(item, folder)) {
            return folder.Name;
        } else {
            if(folder.Subfolders.lenght != 0) {
                folder.Subfolders.map((element) => {
                    this.FindParentFolder(item, element);
                })
            }
        }

    }


    FileSystemDisplay(props) {
        switch (props) {
            case 'Keanutan':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => this.setState({ folderName: element.Name })}>
                                        <div>
                                            {element.Image}
                                        </div>
                                        <div className="projects-window-file-system-files-item-title">
                                            {element.Name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                break;
            case 'Projects':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => this.setState({ folderName: element.Name })}>
                                        <div>
                                            {element.Image}
                                        </div>
                                        <div className="projects-window-file-system-files-item-title">
                                            {element.Name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                break;
            case 'Java':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders[0].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => this.setState({ folderName: element.Name })}>
                                        <div>
                                            {element.Image}
                                        </div>
                                        <div className="projects-window-file-system-files-item-title">
                                            {element.Name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                break;
            case 'Python':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders[1].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => this.setState({ folderName: element.Name })}>
                                        <div>
                                            {element.Image}
                                        </div>
                                        <div className="projects-window-file-system-files-item-title">
                                            {element.Name}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
                break;

            default:
                return (
                    <h5>Nothing</h5>
                )
                break;
        }
    }

    render() {
        document.title = "Keanu Natchev | Projects";
        console.log(this.FindParentFolder('Projects', FileSystem.Subfolders));

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
                        {/* <div className="projects-window-file-system-files"> */}
                        {this.FileSystemDisplay(this.state.folderName)}
                        {/* <this.FileSystemDisplay /> */}
                        {/* <this.FileSystemDisplay></this.FileSystemDisplay> */}
                        {/* </div> */}
                    </div>
                    {/* <img className="profile-picture-projects" src={pic} height="0" /> */}
                </div>
            </div>
        );
    }
}

export default projects;