import React, { Component } from "react";
import config from "../config";
import axios from "axios";
import "./Contact.css";

import Slide from "react-reveal/Slide";
import Reveal from "react-reveal/Reveal";
import Fade from "react-reveal/Fade";

import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

export default class Contact extends Component {
  state = {
    contacts: [],
    msg: false,
  };

  handleContact = (event) => {
    event.preventDefault();
    axios
      .post(`${config.API_URL}/api/contact/create`, {
        name: event.target.name.value,
        email: event.target.email.value,
        subject: event.target.subject.value,
        message: event.target.message.value,
      })
      .then((response) => {
        this.setState(
          {
            contacts: [response.data],
            msg: true,
          },
          () => {
            this.refs.nameref.value = "";
            this.refs.emailref.value = "";
            this.refs.subjectref.value = "";
            this.refs.messageref.value = "";
            setTimeout(
              () =>
                this.setState({
                  msg: false,
                }),
              3000
            );
          }
        );
      })
      .catch((error) => {
        console.log("Message NOT sent");
      });
  };

  render() {
    return (
      <div>
        <Slide left>
          <h1 className="section-title">Get in Touch</h1>
        </Slide>

        {/* ALERT MESSAGE */}
        {this.state.msg ? (
          <Fade top cascade>
            <div>
              <Alert className="alert-success">
                <AlertTitle>
                  <h4>Your message has been send</h4>
                </AlertTitle>
                <h5>
                  I will contact you as soon as possible.
                  <strong>Thank you!</strong>
                </h5>
              </Alert>
            </div>
          </Fade>
        ) : null}

        {/* SECTION */}
        <Reveal bottom>
          <div className="section-contact">
            {/* MESSAGE */}
            <div className="left-side">
              <h3>Message me</h3>
              <form className="contact-form" onSubmit={this.handleContact}>
                <div>
                  <input
                    type="text"
                    name="name"
                    ref="nameref"
                    placeholder="Name"
                  ></input>
                  <input
                    type="email"
                    name="email"
                    ref="emailref"
                    placeholder="Email"
                  ></input>
                </div>
                <input
                  type="text"
                  name="subject"
                  ref="subjectref"
                  placeholder="Subject"
                ></input>
                <textarea
                  type="text"
                  name="message"
                  ref="messageref"
                  placeholder="Message"
                  className="message"
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>

            {/* INFORMATION */}
            <div className="right-side">
              <div>
                <h3>Contact Info</h3>
              </div>

              <div className="info-text">
                <p>
                  Always ready for new challenges and currently looking for
                  opportunities.
                  <br /> Feel free to contact me!
                </p>
              </div>

              <div>
                <div className="each-item-contact">
                  <p>Contact Name</p>
                  <p className="arrow"> ---&gt;&gt;&gt;</p>
                  <p>Nora</p>
                </div>
                <div className="each-item-contact">
                  <p>Actual Location</p>
                  <p className="arrow"> ---&gt;&gt;&gt;</p>
                  <p>Bilbao, Spain</p>
                </div>
                <div className="each-item-contact">
                  <p>Call/Whatsapp me</p>
                  <p className="arrow"> ---&gt;&gt;&gt;</p>
                  <p>679087886</p>
                </div>
                <div className="each-item-contact">
                  <p>Email</p>
                  <p className="arrow"> ---&gt;&gt;&gt;</p>
                  <p>noramartiin96@gmail.com</p>
                </div>
              </div>

              <div className='social-media-contact'>
                <a href="https://github.com/Noramartiin"> See my Github ! </a>
                <p>or</p>
                <a href="https://www.linkedin.com/in/nora-martin-velasco/"> Follow me on LinkedIn !</a>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    );
  }
}
