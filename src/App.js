// import logo from './logo.svg';
// import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
// import Switch from 'react-router-dom/Switch';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// import Route from 'react-router-dom/Route';
import Home from "./home";
import About from "./aboutme";
import Contact from "./contactme";
import Projects from "./projects";
// import { Link } from 'react-router-dom/Link';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route exact path="/projects" component={Projects}></Route>
    </Switch>
  );
}

export default App;
