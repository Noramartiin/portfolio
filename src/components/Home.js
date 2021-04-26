import React, { Component } from "react";
import './Home.css'

import Zoom from "react-reveal/Zoom";

export default class Home extends Component {


  render() {
    return (
      <div>
        <div className="home">
          <Zoom>
            <div id="presentation">
              <img
                src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618399155/Logo_grueso_sin_fondo_ijv4v6.png"
                alt="img"
                className="img"
              ></img>

              <h1 className="name">NORA MARTIN</h1>
            </div>
          </Zoom>

          {/* Web Version */}
          
            <div>
              <h1 className="msg">
              <Zoom top cascade>
                FullStack Developer | Publicist | Event Director
              </Zoom>
              </h1>
            </div>
          
          {/* Mobile version */}

          <div className="msg-mobile">
            <Zoom top cascade>
              <h1>FullStack Developer</h1>
            </Zoom>
            <Zoom top cascade>
              <h1>Publicist</h1>
            </Zoom>

            <Zoom top cascade>
              <h1>Event Director</h1>
            </Zoom>
          </div>
        </div>
      </div>
    );
  }
}
