import React, { Component } from "react";
import "./Projects.css";

import Slide from "react-reveal/Slide";
import Reveal from "react-reveal/Reveal";
import Zoom from "react-reveal/Zoom";

export default class Projects extends Component {
  state = {
    display1: false,
    display2: false,
    display3: false,
    button1: "See the Image...",
    button2: "See the Image...",
    button3: "See the Image...",
  };

  handleDisplayImage1 = () => {
    !this.state.display1
      ? this.setState({ display1: true, button1: "X" })
      : this.setState({ display1: false, button1: "See the Image..." });
  };

  handleDisplayImage2 = () => {
    !this.state.display2
      ? this.setState({ display2: true, button2: "X" })
      : this.setState({ display2: false, button2: "See the Image..." });
  };

  handleDisplayImage3 = () => {
    !this.state.display3
      ? this.setState({ display3: true, button3: "X" })
      : this.setState({ display3: false, button3: "See the Image..." });
  };

  render() {
    return (
      <div>
        <Slide left>
          <h1 className="section-title">My projects</h1>
        </Slide>

        <Reveal bottom>
          {/* CARDS */}
          <div className="row row-cols-1 g-4 my-projects">
            {/* BON APPETEAT */}
            <div className="flip-card-container">
              <div className="flip-card">
                {/* Frontside of the card */}
                <div className="card-front-side">
                  <h3>Bon Appeteat</h3>
                  <h4>
                    #React | #NodeJs | #MongoDb | #ExpressJs | #Responsive
                  </h4>
                </div>

                {/* Backside of the card */}
                <div className="card-back-side">
                  {this.state.display1 ? (
                    <Zoom>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618573714/Bon_Appeteat_pmfoo2.png"
                          className="card-img-top"
                          alt="Bon Appeteat"
                        ></img>
                      </div>
                    </Zoom>
                  ) : (
                    <div>
                      <h3>Bon Appeteat</h3>
                      <h5>FullStack Responsive Web application</h5>
                      <p className="card-text">
                        This is a one page application where you can search for
                        restaurants that are near you and make bookings on them.
                      </p>

                      <div className="links-projects">
                        <a href="https://github.com/Noramartiin/bonappeteat-client">
                          Client Repository
                        </a>
                        <a href="https://github.com/Noramartiin/bonappeteat-server">
                          Server Repository
                        </a>
                        <a href="https://bonappeteat.herokuapp.com/">
                          Try it out!
                        </a>
                      </div>

                      <h4>
                        #React | #NodeJs | #MongoDb | #ExpressJs | #Responsive
                      </h4>
                    </div>
                  )}

                  <div className="button-container-projects">
                    <button
                      className="see-image-button"
                      onClick={this.handleDisplayImage1}
                    >
                      {this.state.button1}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GLOBAL NGO */}
            <div className="flip-card-container">
              <div className="flip-card">
                {/* Frontside of the card */}
                <div className="card-front-side">
                  <h3>Global NGO</h3>
                  <h4>#NodeJs | #ExpressJs | #Handlebars | #Bootstrap</h4>
                </div>

                {/* Backside of the card */}
                <div className="card-back-side">
                  {this.state.display2 ? (
                    <Zoom>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618573256/Global_NGO_axv7lc.png"
                          className="card-img-top"
                          alt="Global NGO"
                        ></img>
                      </div>
                    </Zoom>
                  ) : (
                    <div>
                      <h3>Global NGO</h3>
                      <h5>FullStack Responsive application</h5>
                      <p className="card-text">
                        This app that gathers NGOs worldwide is a portal where
                        you can manage your NGOs allowing you to create or
                        modify them your
                      </p>

                      <div className="links-projects">
                        <a href="https://github.com/Noramartiin/globalngo">
                          Go to Repository
                        </a>
                        <a href="https://globalngo.herokuapp.com/">
                          Try it out!
                        </a>
                      </div>

                      <h4>#NodeJs | #ExpressJs | #Handlebars | #Bootstrap</h4>
                    </div>
                  )}
                  <div className="button-container-projects">
                    <button
                      className="see-image-button"
                      onClick={this.handleDisplayImage2}
                    >
                      {this.state.button2}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* SAVE THE HOBBITS */}
            <div className="flip-card-container">
              <div className="flip-card">
                {/* Frontside of the card */}
                <div className="card-front-side">
                  <h3>Save The Hobbits</h3>
                  <h4>#HTML | #CSS | #JavaScript | #Kanban</h4>
                </div>

                {/* Backside of the card */}
                <div className="card-back-side">
                  {this.state.display3 ? (
                    <Zoom>
                      <div>
                        <img
                          src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618573872/Save_The_Hobbits_odcggj.png"
                          className="card-img-top"
                          alt="Save The Hobbits"
                        ></img>
                      </div>
                    </Zoom>
                  ) : (
                    <div>
                      <h3>Save The Hobbits</h3>
                      <h5>Vanilla JavaScript game made with canvas.</h5>
                      <p className="card-text">
                        First game after studying two weeks of JavaScript. Set
                        in the Lord of the Rings, the user must kill the orcs
                        throwing arrows to increase score aboiding killing the
                        hobbits.
                      </p>

                      <div className="links-projects">
                        <a href="https://github.com/Noramartiin/SAVE-THE-HOBBITS">
                          Go to the Repository
                        </a>
                        <a href="https://save-the-hobbits.netlify.app/">
                          Try it out!
                        </a>
                      </div>

                      <h4>#HTML | #CSS | #JavaScript | #Kanban</h4>
                    </div>
                  )}

                  <div className="button-container-projects">
                    <button
                      className="see-image-button"
                      onClick={this.handleDisplayImage3}
                    >
                      {this.state.button3}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }
}
