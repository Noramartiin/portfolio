import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./About.css";
import Slide from "react-reveal/Slide";
import Reveal from "react-reveal/Reveal";

export default class About extends Component {
  state = {
    display: false,
    button: "More ...",
  };

  handleDisplay = () => {
    !this.state.display
      ? this.setState({ display: true, button: "X" })
      : this.setState({ display: false, button: "More ..." });
  };

  render() {
    return (
      <div>
        <Slide left>
          <h1 className="section-title">About me</h1>
        </Slide>

        <Reveal bottom>
          <div className="section">
            <div className="container">
              {/* MY PRESENTATION */}
              <div className="presentation">
                {/* MOBILE-VIDEO */}
                <ReactPlayer
                  url="https://res.cloudinary.com/dja8ksmf0/video/upload/v1618405655/video-dcha_nprryn.mov"
                  playing
                  muted
                  height="100%"
                  width="90%"
                  className="video-presentation-mobile"
                />
                <h2 id="title">Who am I?</h2>
                <h2 id="profession">
                  A Web Developer, Publicist & Event Director
                </h2>

                {/* MP-TEXT */}
                <div className="text">
                  <p>
                    Always ready to try new things, I like to enrich myself with
                    changes, discover new programs and methodologies and use
                    them to create incredible projects.
                  </p>
                  <p>
                    I like to see teams as cocktail shakers, with a lot of
                    different ingredients you create the best flavors.
                  </p>
                </div>

                {/* MP-ITEMS */}
                <div className="all-items">
                  <div id="items">
                    <div className="each-item">
                      <p>Name</p>
                      <p className="arrow"> ---&gt;&gt;&gt;</p>
                      <p>Nora</p>
                    </div>
                    <div className="each-item">
                      <p>Born in</p>
                      <p className="arrow"> ---&gt;&gt;&gt;</p>
                      <p>1996</p>
                    </div>
                  </div>
                  <div id="items">
                    <div className="each-item">
                      <p>Native from</p>
                      <p className="arrow"> ---&gt;&gt;&gt;</p>
                      <p>Bilbao, Spain</p>
                    </div>
                    <div className="each-item">
                      <p>Email</p>
                      <p className="arrow"> ---&gt;&gt;&gt;</p>
                      <p>noramartiin96@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEB-VIDEO */}
              <ReactPlayer
                url="https://res.cloudinary.com/dja8ksmf0/video/upload/v1618405655/video-dcha_nprryn.mov"
                playing
                muted
                height="50%"
                width="60%"
                className="video-presentation"
              />
            </div>

            {/* LINKS */}
            <div className="links-container">
              <a
                href="https://drive.google.com/file/d/10mKHxcDtKXMHIna9Yik76jFpsRt4seU2/view?usp=sharing"
                className="links"
              >
                LINK TO CV
              </a>
              <a
                href="https://www.linkedin.com/in/nora-martin-velasco/"
                className="links"
              >
                LINK TO LINKED IN
              </a>
              <a href="https://github.com/Noramartiin" className="links">
                LINK TO GITHUB
              </a>
            </div>

            {/* ABOUT */}
            <div className="about">
              <h3 className="about-title">Get to Know me Better</h3>
              <div className="about-text">
                <p>
                  I’m an Advertisement, Events and Protocol studies lover who
                  have recently discovered programming. Now I'm eager to dive
                  myself into new projects where I can keep improving, keep
                  challenging myself and learn something new everyday.
                </p>
                <p className="quote">
                  With my skills I want to help companies develop their online
                  presence and bussines growth through meaningful experiences.
                </p>

                {!this.state.display ? (
                  <div></div>
                ) : (
                  <div>
                    <h5>How I started in Web Development ?</h5>
                    <p>
                      I remember the first time I watched my first Javascript
                      tutorial, I was surfing the Net when I discovered some
                      random video. I didn't even knew much about HTML or CSS,
                      but that video blew me away! That got me so wrapped up
                      that I started learning the basics with tutorials and free
                      intro courses, I can't put into words the feeling when I
                      saw my first HTML structure on the screen.
                    </p>
                    <p>
                      From that moment, I took it seriously and joined the
                      FullStack Development Bootcamp with IronHack and a whole
                      new world of possibilities opened right in front of my
                      eyes.
                      <b> But that was only the start.</b>
                    </p>
                    <h5>What can I bring to your company ?</h5>
                    <p>
                      As my work in Communication & Events I've discovered two
                      main things:
                    </p>
                    <p>
                      The first one is that as a part of a team you would have
                      to work with too different people with different
                      backgrounds, and this is the best thing that can happen to
                      you because this allows you to explore and learn from
                      other thinking processes
                    </p>
                    <p>
                      The second one is that when you perform an event or
                      specific Marketing strategy, the people usually forgets
                      about the content, the memory that remains on them are the
                      experiences, and the way that these made them feel. So
                      that's why the most important thing is to create something
                      shocking, unexpected and unforgettable for the users.
                    </p>
                  </div>
                )}
                <div className="button-container">
                  <button className="more-button" onClick={this.handleDisplay}>
                    {this.state.button}
                  </button>
                </div>
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="my-technologies">
              <h3>Tools</h3>
              <p>These are some technologies I work with:</p>
              <div id="tools">
                <img
                  alt="Visual Studio Code"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
                ></img>
                <img
                  alt="HTML5"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                ></img>
                <img
                  alt="CSS3"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                ></img>
                <img
                  alt="JavaScript"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                ></img>
                <img
                  alt="React"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                ></img>
                <img
                  alt="Node.js"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                ></img>
                <img
                  alt="MongoDB"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                ></img>
                <img
                  alt="Git"
                  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                ></img>

                <img
                  alt="GitHub"
                  src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
                ></img>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    );
  }
}
