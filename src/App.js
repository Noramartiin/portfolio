// import './App.css';

import React from "react";
import { Switch, Route} from "react-router-dom";

import Home from './pages/Home'
import NavBar from "./pages/NavBar";
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Footer from './pages/Footer'

import BackgroundVideo from './images/Smoke-moving-mp4.mp4'

function App() {
  return (
    <React.Fragment>
      {
        <video className="background-video" muted autoPlay loop>
          <source type="video/mp4" src={BackgroundVideo} />
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
