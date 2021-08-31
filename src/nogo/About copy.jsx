import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../styles/about.css";

import reactLogo from "../assets/react_logo.png";
import icecream from "../assets/icecream.png";
import canvasHello from "../assets/canvas_hello_world.png";
import smileyFace from "../assets/smiley_face.png";
import pmpBadge from "../assets/pmp_badge.png";
import simpsonsFootball from "../assets/simpsons_football.gif";
import premierLeagueLogo from "../assets/premier_league_logo.png";
import starcraft from "../assets/starcraft.jpg";

const About = () => {
  // currentItem for .image-item that has .visible attached
  const [elemIndex, setElemIndex] = useState();

  useEffect(() => {
    const body = document.querySelector(".body");
    body.addEventListener("scroll", handleScroll);
    return () => body.removeEventListener("scroll", handleScroll);
  }, [elemIndex]);

  const handleScroll = () => {
    const stepElems = document.querySelectorAll(".step");
    const imageElems = document.querySelectorAll(".image-item");

    for (let i = 0; i < stepElems.length; i++) {
      stepElems[i].dataset.index = i;
      imageElems[i].dataset.index = i;
    }

    let step;
    let boundingRect;

    for (let i = 0; i < stepElems.length; i++) {
      step = stepElems[i];
      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.1 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        return setElemIndex(step.dataset.index * 1);
      }
      setElemIndex(null);
    }
  };

  return (
    <div className="main-container">
      <section className="about__header">
        <div className="text-container text-container--left">
          <h1 className="content__primary-header">
            About me<span className="content__name">?</span>
          </h1>

          <h2 className="content__secondary-header">
            I am a Front End developer.
          </h2>
        </div>
        <svg
          className="icon__down"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
        </svg>
      </section>
      <section className="about__container">
        <div className="content__images">
          <div className={`image-item ${elemIndex === 0 ? "visible" : ""}`}>
            <div className="image-item__background image-rotate-left">
              <img
                className="image spin-logo image--react-logo"
                src={reactLogo}
                alt="react-logo"
              />
            </div>
          </div>
          <div className={`image-item ${elemIndex === 1 ? "visible" : ""}`}>
            <div className="icecream image-item__background image-rotate-right">
              <img className="image float-logo" src={icecream} alt="icecream" />
            </div>
            <div className="canvas image-item__background image-rotate-left">
              <img className="image" src={canvasHello} alt="" />
            </div>
          </div>
          {/* <div className="image-item image-item--canvas">
            <img className="image image--canvas" src={canvasHello} alt="" />
          </div> */}
          <div className={`image-item ${elemIndex === 2 ? "visible" : ""}`}>
            <div className="smiley-face image-item__background image-rotate-left">
              <img className="image" src={smileyFace} alt="" />
            </div>
          </div>
          <div className={`image-item ${elemIndex === 3 ? "visible" : ""}`}>
            <div className="pmp-badge image-item__background image-rotate-right">
              <img className="image" src={pmpBadge} alt="" />
            </div>
          </div>
          <div className={`image-item ${elemIndex === 4 ? "visible" : ""}`}>
            <div className="simpsons-football image-item__background">
              <img className="image" src={simpsonsFootball} alt="" />
            </div>
            <div className="premier-league image-item__background">
              <img className="image" src={premierLeagueLogo} alt="" />
            </div>
            <div className="starcraft image-item__background">
              <img className="image" src={starcraft} alt="" />
            </div>
          </div>
          {/* <div className="image-item image-item--premier-league">
            <img
              className="image image--premier-league"
              src={premierLeagueLogo}
              alt=""
            />
          </div>
          <div className="image-item image-item--starcraft">
            <img className="image image--starcraft" src={starcraft} alt="" />
          </div> */}
        </div>
        <div className="text-container text-container--left">
          <div className="step">
            <p className="content__paragraph">I enjoy coding with ReactJS.</p>
          </div>
          <div className="step">
            <p className="content__paragraph">
              I also like to code interactive animation with Vanilla Javascript
              and Canvas.
            </p>
          </div>
          <div className="step">
            <p className="content__paragraph">
              I am interested in exploring brands and improving their web
              presence with interactive user experience.
            </p>
          </div>
          <div className="step">
            <p className="content__paragraph">
              I am Project Management Professional (PMP)® certified.
            </p>
          </div>
          <div className="step">
            <p className="content__paragraph">
              On my free time, I spend time with my family, play football/
              soccer (or just running after tha ball), follow English Primier
              League or Starcraft 2 with my buddies.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-container text-container--right text-container--bottom">
          <h2 className="content__secondary-header">
            I am also very fortunate to work on various projects.
          </h2>
          <Link className="link" to="/work">
            /Work
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
