import logo from './logo.svg';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Home from "./home";
import About from "./aboutme";
import Contact from "./contactme";
import Projects from "./projects";
// import { Link } from 'react-router-dom/Link';
import './App.css';

function App() {
  return (
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/projects" exact component={Projects}></Route>
      </Switch>
  );
}

export default App;