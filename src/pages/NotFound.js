import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
import "./NotFound.css";

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <Reveal bottom>
          <div className="not-found-container">
            <div className="not-found-text">
              <h1>404</h1>
              <p>Page Not Found</p>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }
}
