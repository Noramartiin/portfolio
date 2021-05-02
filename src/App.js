// import './App.css';

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    fetching: true,
  };

  componentDidMount() {
    if (this.state.fetching) {
      this.setState({
        fetching: false,
      });
    }
  }

  render() {
    const { fetching } = this.state;

    if (fetching) {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }

    return (
      <React.Fragment>
        {/* BACKGROUND FOR WEB */}
        {
          <video playsInline className="background-video" muted autoPlay loop>
            <source
              type="video/mp4"
              src="https://res.cloudinary.com/dja8ksmf0/video/upload/v1618423744/Smoke-moving-mp4_vzyhlg.mp4"
            />
          </video>
        }

        {/* BACKGROUND FOR MOBILE DEVICES */}
        {
          <img
            src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1619109635/33cc4076d0810eb9f7963c2988fd0bee_j6zk3s.jpg"
            alt="background-image"
            className="background-img-mobile"
          ></img>
        }

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
