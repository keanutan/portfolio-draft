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
            <li className="university-projects-content-entry-list-element">Was responsible for the hardware design development in <strong><strong>LeoCAD/Webots</strong></strong> as well as the <strong>hardware documentation</strong>.</li>,
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

export const UniversityProjectsEnglish = [
    {
        title: 'Operating System in C',
        date: 'January 2021 - March 2021',
        class: 'Operating Systems (COMP 310 & ECSE 427)',
        description: [
            <li className="university-projects-content-entry-list-element" >Built an <strong>OS Shell in C</strong> with <strong>shell memory</strong> to store and update variables using the set VAR STRING command (more commands were available such as help, quit, print VAR, run SCRIPT.TXT).</li>,
            <li className="university-projects-content-entry-list-element" >Upgraded the OS with a <strong>Kernel</strong> to house the <strong>Shell</strong> with an added <strong>exec prog1 prog2 prog3</strong> command for program execution that was handled using a simulated <strong>1 core CPU</strong>, <strong>Process Control Block (PCB)</strong> for each program, a <strong>ready queue</strong> for the PCBs, a <strong>CPU scheduler</strong> and <strong>temporary simple memory</strong>.</li>,
            <li className="university-projects-content-entry-list-element" >Further upgraded the <strong>OS</strong> with a <strong>Boot Sequence</strong> as well as a <strong>Memory Manager</strong> that utilized <strong>RAM pages</strong>, <strong>frames</strong>, and <strong>Page Fault</strong> handling for the <strong>exec prog1 prog2 prog3</strong> command.</li>
        ],
        tools: [
            <img alt="C" src="https://shields.io/badge/c-333333?logo=c&style=for-the-badge&logoColor=white"></img>
        ]
    },
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
            <img alt="React" src="https://shields.io/badge/React-333333?logo=react&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/ANIME.JS-333333?&style=for-the-badge&logoColor=white"></img>,
        ]
    },
    {
        title: 'Lego EV3 Mindstorms Robot',
        date: 'September 2020 - December 2020',
        class: 'Design Principles and Methods (ECSE 211)',
        description: [
            <li className="university-projects-content-entry-list-element">Worked in a design team of 6 to develop a robot that navigated in a virtual obstacle course in <strong>Webots</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Was responsible for the hardware design development in <strong><strong>LeoCAD/Webots</strong></strong> as well as the <strong>hardware documentation</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the Localization class of the robot controller in <strong>Java</strong> and optimized <strong>threading</strong> between all other classes.</li>
        ],
        tools: [
            <img alt="Java" src="https://shields.io/badge/JAVA-333333?logo=java&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/WEBOTS-333333?&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/LEOCAD-333333?&style=for-the-badge&logoColor=white"></img>

        ]
    },
    {
        title: 'Event Registration System',
        date: 'January 2020 - April 2020',
        class: 'Introduction to Software Engineering (ECSE 321)',
        description: [
            <li className="university-projects-content-entry-list-element">Created a website application to register events with date, time, participants, artists, and Google payment.</li>,
            <li className="university-projects-content-entry-list-element">Used <strong>UML Lab</strong> for domain modeling, <strong>Heroku</strong> for database deployment, and <strong>Travis CI</strong> for continuous integration.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the <strong>REST API</strong> backend using <strong>Java Spring Boot</strong> and <strong>Gradle</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Implemented the website’s frontend with <strong>Vue.js</strong>, <strong>NPM</strong>, and <strong>JavaScript</strong>.</li>
        ],
        tools: [
            <img alt="Vue" src="https://shields.io/badge/Vue.js-333333?logo=vuedotjs&style=for-the-badge&logoColor=white"></img>,
            <img alt="Heroku" src="https://shields.io/badge/Heroku-333333?logo=heroku&style=for-the-badge&logoColor=white"></img>,
            <img alt="Travis CI" src="https://shields.io/badge/Travis%20CI-333333?logo=travisci&style=for-the-badge&logoColor=white"></img>,
            <img alt="Spring Boot" src="https://shields.io/badge/Spring%20Boot-333333?logo=springboot&style=for-the-badge&logoColor=white"></img>,
            <img alt="Gradle" src="https://shields.io/badge/Gradle-333333?logo=gradle&style=for-the-badge&logoColor=white"></img>
        ]
    },
]
export const UniversityProjectsFrancais = [
    {
        title: 'Systèmes Opérateurs en C',
        date: 'Janvier 2021 - Mars 2021',
        class: 'Operating Systems (COMP 310 & ECSE 427)',
        description: [
            <li className="university-projects-content-entry-list-element" >Créer un <strong>OS Shell en C</strong> avec de la <strong>mémoire shell</strong> pour stocker et mettre à jour des variables en utilisant la commande <strong>set VAR STRING</strong> (D’autres commandes sont offertes tels que <strong>help</strong>, <strong>quit</strong>, <strong>print VAR</strong> et <strong>run SCRIPT.TXT</strong>).</li>,
            <li className="university-projects-content-entry-list-element" >Améliorer le <strong>SO</strong> avec un <strong>Kernel</strong> pour contenir la <strong>shell</strong> avec l’addition de la commande <strong>exec prog1 prog2 prog3</strong> pour l’exécution de programmes qui sont gérer par un <strong>1 core CPU</strong>, <strong>Process Control Block (PCB)</strong> pour chaque programme, un <strong>ready queue</strong> pour les PCBs, un <strong>CPU scheduler</strong> et une <strong>mémoire temporaire simple</strong>.</li>,
            <li className="university-projects-content-entry-list-element" >Améliorer le <strong>SO</strong> davantage avec une <strong>Boot Sequence</strong> et un <strong>Gestionnaire de Mémoire</strong> qui utilise des <strong>RAM pages</strong>, <strong>frames</strong> et la gestion de <strong>Page Fault</strong> pour la commande <strong>exec prog1 prog2 prog3</strong>.</li>
        ],
        tools: [
            <img alt="C" src="https://shields.io/badge/c-333333?logo=c&style=for-the-badge&logoColor=white"></img>
        ]
    },
    {
        title: 'Site Web de Visualisation de Structures de Données et d’Algorithmes',
        date: 'Septembre 2020 - Décembre 2020',
        class: 'Software Engineering Practice (COMP 310 & ECSE 427)',
        description: [
            <li className="university-projects-content-entry-list-element" >Créer un site web <strong>React</strong> pour la visualisation animée d’algorithmes de tri appliqués sur des structures de données dans un <strong>Environnement Agile</strong> en utilisant <strong>SCRUM</strong> (Équipe de huit personnes).</li>,
            <li className="university-projects-content-entry-list-element" >Implémenter les pages web de structures de données <strong>Tableau</strong> et <strong>Liste Doublement Chaînée</strong>.</li>
        ],
        tools: [
            <img alt="React" src="https://shields.io/badge/React-333333?logo=react&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/ANIME.JS-333333?&style=for-the-badge&logoColor=white"></img>,
        ]
    },
    {
        title: 'Robot Lego EV3 Mindstorms',
        date: 'September 2020 - Décember 2020',
        class: 'Design Principles and Methods (ECSE 211)',
        description: [
            <li className="university-projects-content-entry-list-element">Développer un robot pour naviguer dans une course à obstacles virtuel dans <strong>Webots</strong> dans une équipe de 6.</li>,
            <li className="university-projects-content-entry-list-element">Développer la conception matérielle du robot dans <strong>LeoCAD/Webots</strong> incluant la documentation de ce développement.</li>,
            <li className="university-projects-content-entry-list-element">Implémenter la classe <strong>Java</strong> Localization du contrôleur et optimiser les <strong>fils d’exécution</strong> entre les autres classes.</li>
        ],
        tools: [
            <img alt="Java" src="https://shields.io/badge/JAVA-333333?logo=java&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/WEBOTS-333333?&style=for-the-badge&logoColor=white"></img>,
            <img alt="Anime" src="https://shields.io/badge/LEOCAD-333333?&style=for-the-badge&logoColor=white"></img>

        ]
    },
    {
        title: 'Système d’Enregistrement d’Événements',
        date: 'January 2020 - April 2020',
        class: 'Introduction to Software Engineering (ECSE 321)',
        description: [
            <li className="university-projects-content-entry-list-element">Créer une application web pour l’enregistrement d’événements avec date, temps, participants et paiement Google.</li>,
            <li className="university-projects-content-entry-list-element">Utiliser <strong>UML Lab</strong> pour la modélisation, <strong>Heroku</strong> pour la base de données et <strong>Travis CI</strong> pour l’intégration continue.</li>,
            <li className="university-projects-content-entry-list-element">Créer un backend <strong>REST API</strong> en utilisant <strong>Java Spring Boot</strong> et <strong>Gradle</strong>.</li>,
            <li className="university-projects-content-entry-list-element">Créer un frontend avec <strong>Vue.js</strong>, <strong>NPM</strong> et <strong>JavaScript</strong>.</li>
        ],
        tools: [
            <img alt="Vue" src="https://shields.io/badge/Vue.js-333333?logo=vuedotjs&style=for-the-badge&logoColor=white"></img>,
            <img alt="Heroku" src="https://shields.io/badge/Heroku-333333?logo=heroku&style=for-the-badge&logoColor=white"></img>,
            <img alt="Travis CI" src="https://shields.io/badge/Travis%20CI-333333?logo=travisci&style=for-the-badge&logoColor=white"></img>,
            <img alt="Spring Boot" src="https://shields.io/badge/Spring%20Boot-333333?logo=springboot&style=for-the-badge&logoColor=white"></img>,
            <img alt="Gradle" src="https://shields.io/badge/Gradle-333333?logo=gradle&style=for-the-badge&logoColor=white"></img>
        ]
    },
]