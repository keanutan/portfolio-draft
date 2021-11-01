import React from 'react';
import { useState, Component } from 'react';
import './projects.css';
import { FileSystem } from './Components/ComponentData/FileSystem';
// import pic from './pp.jpg'; // with import
import Navbar from './Components/Navbar';
import close from './Components/FileSystemComponentsImages/close.svg';
import minimize from './Components/FileSystemComponentsImages/minimize.svg';
import tab from './Components/FileSystemComponentsImages/tab.svg';
import back from './Components/FileSystemComponentsImages/back.svg';
import forward from './Components/FileSystemComponentsImages/forward.svg';
import harddriveicon from './Components/FileSystemComponentsImages/harddriveicon.svg';
// import folder from './Components/FileSystemComponents/folder.svg';
import Footer from './Components/Footer';


class projects extends Component {


    state = {
        componentName: 'projects',
        mountedProjects: false,
        intro: false,
        mobileWindow: false,
        windowSize: window.innerWidth,
        pictureWidth: "80vw",
        p: window.pageYOffset,
        visitedFolders: [],
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
            if (folder.Subfolders.lenght != 0) {
                folder.Subfolders.map((element) => {
                    this.FindParentFolder(item, element);
                })
            }
        }

    }

    visitedFoldersUpdate(currentFolder) {
        if (!this.state.visitedFolders.includes(currentFolder)) {
            // let tmp = this.state.visitedFolders;
            this.state.visitedFolders.push(currentFolder);
            // tmp.push(currentFolder);
            // this.setState({ visitedFolders: tmp });

            // this.state.visitedFolders.push(currentFolder);
            // console.log(this.state.visitedFolders);
        }
    }

    backButton() {
        // let last = this.state.visitedFolders[this.state.visitedFolders.length - 1];
        // this.FileSystemDisplay('Keanutan');
        if (this.state.visitedFolders.length > 0) {
            this.setState({ folderName: this.state.visitedFolders.pop() });
            // console.log(this.state.visitedFolders);
        }
    }

    linkOpen(link) {
        window.open(link);
    }

    FileSystemSidebarDisplay(props) {
        // console.log(props);
        switch (props) {
            case 'Keanutan':
                return (
                    <div className="projects-window-file-system-sidebar">
                        <div className="root">
                            <img className="projects-window-file-system-sidebar-icon" src={harddriveicon} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Keanutan</h5>
                        </div>
                        <div className="folder" onClick={() => { this.setState({ folderName: 'Projects' }); this.visitedFoldersUpdate('Keanutan') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Projects</h5>
                        </div>
                    </div>
                )
                break;
            case 'Projects':
                return (
                    <div className="projects-window-file-system-sidebar">
                        <div className="root">
                            <img className="projects-window-file-system-sidebar-icon" src={harddriveicon} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Keanutan</h5>
                        </div>
                        <div className="folder" onClick={() => { this.setState({ folderName: 'Projects' }); this.visitedFoldersUpdate('Keanutan') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Projects</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Java' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Java</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Python' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Python</h5>
                        </div>
                    </div>
                )
                break;
            case 'Java':
                return (
                    <div className="projects-window-file-system-sidebar">
                        <div className="root">
                            <img className="projects-window-file-system-sidebar-icon" src={harddriveicon} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Keanutan</h5>
                        </div>
                        <div className="folder" onClick={() => { this.setState({ folderName: 'Projects' }); this.visitedFoldersUpdate('Keanutan') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Projects</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Java' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Java</h5>
                        </div>
                        <div className="folder-level-2">
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Binary Search Tree Visualizer</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Python' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Python</h5>
                        </div>
                    </div>
                )
                break;
            case 'Python':
                return (
                    <div className="projects-window-file-system-sidebar">
                        <div className="root">
                            <img className="projects-window-file-system-sidebar-icon" src={harddriveicon} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Keanutan</h5>
                        </div>
                        <div className="folder" onClick={() => { this.setState({ folderName: 'Projects' }); this.visitedFoldersUpdate('Keanutan') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Projects</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Java' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Java</h5>
                        </div>
                        <div className="folder-level-1" onClick={() => { this.setState({ folderName: 'Python' }); this.visitedFoldersUpdate('Projects') }}>
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Python</h5>
                        </div>
                        <div className="folder-level-2">
                            <img className="projects-window-file-system-sidebar-icon-folder" src={forward} />
                            <h5 className="projects-window-file-system-sidebar-folder-name">Fast Fourier Transform Image Processor</h5>
                        </div>
                    </div>
                )
                break;

            default:
                break;
        }
    }

    FileSystemDisplayTEST(props) {
        console.log(props);
        if (props = 'Keanu') {
            return (
                <div className="projects-window-file-system-files">
                    {
                        FileSystem.Subfolders.map((element) => {
                            return (
                                <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.setState({ folderName: element.Name }); this.visitedFoldersUpdate(element.Parent) }}>
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
        }
        if (props = 'Projects') {
            return (
                <div className="projects-window-file-system-files">
                    {
                        FileSystem.Subfolders[0].Subfolders.map((element) => {
                            return (
                                <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.setState({ folderName: element.Name }); this.visitedFoldersUpdate(element.Parent) }}>
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
        }

        if (props = 'Java') {
            return (
                <div className="projects-window-file-system-files">
                    {
                        FileSystem.Subfolders[0].Subfolders[0].Subfolders.map((element) => {
                            return (
                                <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.linkOpen(element.Link) }}>
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
        }

        if (props = 'Python') {
            return (
                <div className="projects-window-file-system-files">
                    {
                        FileSystem.Subfolders[0].Subfolders[1].Subfolders.map((element) => {
                            return (
                                <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.linkOpen(element.Link) }}>
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
        }
    }


    FileSystemDisplay(props) {
        // console.log(props);
        switch (props) {
            case 'Keanutan':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.setState({ folderName: element.Name }); this.visitedFoldersUpdate(element.Parent) }}>
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
                // break;
            case 'Projects':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.setState({ folderName: element.Name }); this.visitedFoldersUpdate(element.Parent) }}>
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
                // break;
            case 'Java':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders[0].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.linkOpen(element.Link) }}>
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
                // break;
            case 'Python':
                return (
                    <div className="projects-window-file-system-files">
                        {
                            FileSystem.Subfolders[0].Subfolders[1].Subfolders.map((element) => {
                                return (
                                    <div className="projects-window-file-system-files-item-wrapper" onClick={() => { this.linkOpen(element.Link) }}>
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
                // break;

            default:
                return (
                    <h5>Nothing</h5>
                )
                // break;
        }
    }


    render() {
        document.title = "Keanu Natchev | Projects";
        // console.log(this.FindParentFolder('Projects', FileSystem.Subfolders));

        return (

            <div className={(this.state.mountedProjects) ? "wrapper-projects" : "wrapper-black-projects"} onLoad={this.wrapperTransitionProjects}>
                <h3 className="projects-title">Projects [UNDER CONSTRUCTION]</h3>
                <Navbar pageName={this.state.componentName}></Navbar>
                <div className="projects-window-wrapper">
                    <div className="projects-window-top-bar">
                        <img className="projects-window-top-bar-icon" src={minimize} />
                        <img className="projects-window-top-bar-icon" src={tab} />
                        <img className="projects-window-top-bar-icon" src={close} />
                    </div>
                    <div className="projects-window-navigation-bar">
                        <img className="projects-window-navigation-bar-icon" src={back} onClick={() => this.backButton()} />
                        <img className="projects-window-navigation-bar-icon" src={forward} />
                    </div>
                    <div className="projects-window-file-system-wrapper">
                        {this.FileSystemSidebarDisplay(this.state.folderName)}
                        {this.FileSystemDisplay(this.state.folderName)}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default projects;