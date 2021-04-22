import React, { Component } from "react";
import "./NavBar.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {/* NAVBAR FOR MOBILE DEVICES */}
        <div className="navbar-mobile">
          <Navbar
            collapseOnSelect
            expand="lg"
            // bg="dark"
            // variant="dark"
            
          >
            <Navbar.Brand href="/home">
              <img
                src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618399155/Logo_grueso_sin_fondo_ijv4v6.png"
                // src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618168278/imageonline-co-whitebackgroundremoved_e9ux92.png"
                width="100px"
                className="logo-home"
              ></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="mr-auto"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav expand="true">
                <Nav.Link className="mr-auto2" href="/about">
                  About
                </Nav.Link>
                <Nav.Link className="mr-auto2" href="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link className="mr-auto2" href="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        {/* NAVBAR FOR THE WEB */}
        <div className="navbar-web">
          <a href="/home">
            <img
              src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618399142/Logo_fino_sin_fondo_va9dwo.png"
              width="100px"
              className="logo-home"
            ></img>
          </a>

          <div className="butons">
            <a href="/about">About</a>
            <a href="/portfolio">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    );
  }
}
