// import './App.css';

import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from './components/Home'
import NavBar from "./components/NavBar";
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Footer from './components/Footer'


function App() {
  return (
    <React.Fragment>
      {
        <video className="background-video" muted autoPlay loop>
          <source
            type="video/mp4"
            src="https://res.cloudinary.com/dja8ksmf0/video/upload/v1618423744/Smoke-moving-mp4_vzyhlg.mp4"
          />
        </video>
      }

      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
