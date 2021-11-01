import anime_logo from '../LogoImages/anime.svg'; // with import
import react_logo from '../LogoImages/react.svg'; // with import
import webots_logo from '../LogoImages/webots.png'; // with import
import leocad_logo from '../LogoImages/leocad.svg'; // with import
import vue_logo from '../LogoImages/vue.svg'; // with import
import heroku_logo from '../LogoImages/heroku.svg'; // with import
import umple_logo from '../LogoImages/umple.svg'; // with import
import gherkin_logo from '../LogoImages/gherkin.svg'; // with import
import springboot_logo from '../LogoImages/springboot.svg'; // with import
import gradle_logo from '../LogoImages/gradle.svg'; // with import
import travisci_logo from '../LogoImages/travisci.svg'; // with import
// import pooop from './tools.svg'; // with import


export const UniversityProjects = [
    {
        title: 'Data Structure and Algorithm Visualization Website',
        date: 'September 2020 - December 2020',
        class: 'Software Engineering Practice (COMP 310 & ECSE 427)',
        description: [
            <li className="university-projects-content-entry-list-element">Worked in an <strong>agile environment</strong> using <strong>SCRUM</strong> (team of 8 people) to create a simple website
                application to visualize sorting algorithms applied to data structures (stacks, queues, arrays, singly and doubly linked lists) with animations to demonstrate algorithms using the <strong>React.js
                </strong> framework, <strong>Anime.js</strong> for animations, and <strong>GitHub</strong> for version control.</li>,
            <li className="university-projects-content-entry-list-element" >Worked on the <strong>Array</strong> and <strong>Doubly Linked List</strong> data structure pages of the website.</li>
        ],
        tools: [
            // <div>Poop</div>,
            // <img className="university-projects-content-entry-tools-image" src={pooop} />,
            <img className="university-projects-content-entry-tools-image" src={react_logo} />,
            <img className="university-projects-content-entry-tools-image" src={anime_logo} />
        ]
    },
    {
        title: 'Lego EV3 Mindstorms Robot',
        date: 'September 2020 - December 2020',
        class: 'Design Principles and Methods (ECSE 211)',
        description: [
            <li className="university-projects-content-entry-list-element">Worked in a design team of 6 to develop a robot that navigated in a <strong>Webots</strong> virtual environment to specific locations.</li>,
            <li className="university-projects-content-entry-list-element">Was responsible for the hardware design development in <strong>LeoCAD/Webots</strong> as well as the <strong>hardware documentation</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the localization class of the robot controller in <strong>Java</strong> and optimized <strong>threading</strong> between all other classes.</li>
        ],
        tools: [
            <img className="university-projects-content-entry-tools-image" src={webots_logo} />,
            <img className="university-projects-content-entry-tools-image" src={leocad_logo} />
        ]
    },
    {
        title: 'Event Registration System',
        date: 'January 2020 - April 2020',
        class: 'Introduction to Software Engineering (ECSE 321)',
        description: [
            <li className="university-projects-content-entry-list-element">Created a website application to register events with specified dates and time, attending people, performing artists, and a Google payment option.</li>,
            <li className="university-projects-content-entry-list-element">Used <strong>UML Lab</strong> for domain modeling, <strong>Heroku</strong> for database deployment, and <strong>Travis CI</strong> for continuous integration testing.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the backend using <strong>RESTful</strong> services, <strong>Java Spring Boot</strong>, and <strong>Gradle</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the website’s frontend with <strong>Vue.js</strong>, <strong>NPM</strong>, and <strong>JavaScript</strong>.</li>
        ],
        tools: [
            <img className="university-projects-content-entry-tools-image" src={vue_logo} />,
            <img className="university-projects-content-entry-tools-image" src={heroku_logo} />,
            <img className="university-projects-content-entry-tools-image" src={travisci_logo} />,
            <img className="university-projects-content-entry-tools-image" src={springboot_logo} />,
            <img className="university-projects-content-entry-tools-image" src={gradle_logo} />
        ]
    },
    {
        title: 'Quoridor (board game) application',
        date: 'September 2019 - December 2019',
        class: 'Model-Based Programming (ECSE 223)',
        description: [
            <li className="university-projects-content-entry-list-element">Created a Java application of the boar game of Quoridor in a team of 6 using the <strong>model-view-controller</strong> design pattern.</li>,
            <li className="university-projects-content-entry-list-element">Implemented a load screen where the user can create a new username or select an existing username, start a new game, or continue an existing game.</li>,
            <li className="university-projects-content-entry-list-element">Implemented a playback feature to watch saved games from start to finish.</li>,
            <li className="university-projects-content-entry-list-element">Used <strong>Umple</strong> with <strong>UML Model</strong> for code generation, <strong>Gherkin</strong> for writing testing scenarios, <strong>Cucumber</strong> for running test suites, and <strong>Java Swing/2D</strong> for the development of the user interface.</li>
        ],
        tools: [
            <img className="university-projects-content-entry-tools-image" src={umple_logo} />,
            <img className="university-projects-content-entry-tools-image" src={gherkin_logo} />
        ]
    },
    // {
    //     title: 'Quoridor (board game) application',
    //     date: 'September 2019 - December 2019',
    //     class: 'Model-Based Programming (ECSE 223)',
    //     description: [
    //         <li className="university-projects-content-entry-list-element">Created a Java application of the boar game of Quoridor in a team of 6 using the <strong>model-view-controller</strong> design pattern.</li>,
    //         <li className="university-projects-content-entry-list-element">Implemented a load screen where the user can create a new username or select an existing username, start a new game, or continue an existing game.</li>,
    //         <li className="university-projects-content-entry-list-element">Implemented a playback feature to watch saved games from start to finish.</li>,
    //         <li className="university-projects-content-entry-list-element">Used <strong>Umple</strong> with <strong>UML Model</strong> for code generation, <strong>Gherkin</strong> for writing testing scenarios, <strong>Cucumber</strong> for running test suites, and <strong>Java Swing/2D</strong> for the development of the user interface.</li>
    //     ],
    //     tools: [
    //         <img className="university-projects-content-entry-tools-image" src={umple_logo} />,
    //         <img className="university-projects-content-entry-tools-image" src={gherkin_logo} />
    //     ]
    // },
]