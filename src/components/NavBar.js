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
          >
            {/* LOGO/HOME */}
            <Navbar.Brand href="/">
              <img
                src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618399155/Logo_grueso_sin_fondo_ijv4v6.png"
                width="100px"
                className="logo-home"
              ></img>
            </Navbar.Brand>

            <div className="nabvar-links-mobile">
              <a href="https://github.com/Noramartiin">
                <img
                  src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1619175680/github_PNG83_jylmzr.png"
                  width="30px"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/nora-martin-velasco/">
                <img
                  src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1619175135/linkedIn_logo_black_l0w4zt.png"
                  width="30px"
                ></img>
              </a>
            </div>

            {/* MENU */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="mr-auto"
            />
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
          {/* LOGO/HOME */}
          <a href="/">
            <img
              src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1618399142/Logo_fino_sin_fondo_va9dwo.png"
              width="70px"
              className="logo-home"
            ></img>
          </a>
          {/* PAGES */}
          <div className="navbar-right-side">
            <div className="butons">
              <a href="/about">About</a>
              <a href="/portfolio">Projects</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="nabvar-links">
              <a href="https://github.com/Noramartiin">
                <img
                  src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1619175680/github_PNG83_jylmzr.png"
                  width="30px"
                ></img>
              </a>
              <a href="https://www.linkedin.com/in/nora-martin-velasco/">
                <img
                  src="https://res.cloudinary.com/dja8ksmf0/image/upload/v1619175135/linkedIn_logo_black_l0w4zt.png"
                  width="30px"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
