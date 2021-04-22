import React, { Component } from "react";
import './First.css'

import Zoom from "react-reveal/Zoom";

export default class First extends Component {

changeThis() {
  window.location.href = "/home"
}

  render() {
    return (
      <div>
        <Zoom>
          <div className='first-page'>
            <video
              muted
              autoPlay
              className="starting-video"
              onEnded={this.changeThis.bind(this)}
            >
              <source
                type="video/mp4"
                src="https://res.cloudinary.com/dja8ksmf0/video/upload/v1618936170/Starting-video_lehjp8.mp4"
              />
            </video>
          </div>
        </Zoom>
      </div>
    );
  }
}
