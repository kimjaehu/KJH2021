import { Link } from "react-router-dom";

import CreateSpans from "../utils/CreateSpans";
import useTextStyleChange from "../utils/useTextStyleChange";

import "../styles/about.css";

const About = () => {
  const randomNumbers = useTextStyleChange(".content__secondary-header");
  return (
    <div className="main">
      <div className="header-container">
        <h1 className="content__primary-header">
          About me<span className="content__name">?</span>
        </h1>
        <h2 className="content__secondary-header text-shadow">
          I am a Front End developer.
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Started</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "I started as an analyst building tools and automating reports using VBA and SQL. It has been my desire to work in IT industry and develop things that are useful and that can make people's lives easier."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Code with</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "I code with ReactJS or Vanilla. Other techs include jQuery, PHP, Node.js / Express.js, and Flutter."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Interested in</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "I like creative coding and interactive animation. I am interested in exploring brands and improving their web presence with interactive user experience."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Certified</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={"I am Project Management Professional (PMP)® certified."}
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">My free time</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "On my free time, I spend time with my family, play football/ soccer (or just running after tha ball), follow English Primier League or Starcraft 2 with my buddies."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container text-container--bottom text-container--right">
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "I have been fortunate with the opportunity to work on various projects."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
        <Link className="link" to="/work">
          /Work
        </Link>
      </div>
    </div>
  );
};

export default About;
