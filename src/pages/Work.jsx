import { Link } from "react-router-dom";

import CreateSpans from "../utils/CreateSpans";
import useTextStyleChange from "../utils/useTextStyleChange";
import "../styles/work.css";

const About = () => {
  const randomNumbers = useTextStyleChange(".content__secondary-header");
  return (
    <div className="main work">
      <div className="header-container">
        <h1 className="content__primary-header">
          Awesome companies<span className="content__name">, </span> awesome
          projects
        </h1>
        <h2 className="content__secondary-header text-shadow">
          I am very fortunate to have worked with amazing companies.
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Companies</h2>
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "Salvation Army, Autotrader, Keilhauer, University of San Francisco (UCSF), PRHC Foundation, TIAA"
            }
            randomNumbers={randomNumbers}
          />
        </h2>
      </div>
      <div className="text-container">
        <h2 className="link">Projects</h2>
        <h2 className="content__secondary-header">
          <a
            href="https://play.google.com/store/apps/details?id=com.kosmicdust.turalura&hl=en&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            <CreateSpans
              content={"Turalura Baby"}
              randomNumbers={randomNumbers}
            />
          </a>
          <CreateSpans content={", "} randomNumbers={randomNumbers} />
          <a href="https://dreammakersca.com/" target="_blank" rel="noreferrer">
            <CreateSpans
              content={"Dreammakers Music"}
              randomNumbers={randomNumbers}
            />
          </a>
          <CreateSpans content={", "} randomNumbers={randomNumbers} />
          <a href="http://www.auroratkd.com/" target="_blank" rel="noreferrer">
            <CreateSpans content={"AuroraTKD"} randomNumbers={randomNumbers} />
          </a>
          <CreateSpans content={", "} randomNumbers={randomNumbers} />
          <a
            href="https://borealoutdoorinnovations.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <CreateSpans
              content={"Boreal Outdoor Innovations"}
              randomNumbers={randomNumbers}
            />
          </a>
        </h2>
      </div>

      <div className="text-container">
        <h2 className="link">Canvas</h2>
        <h2 className="content__secondary-header">
          <a
            href="https://noon.kimjaehun.com/airplane"
            target="_blank"
            rel="noreferrer"
          >
            <CreateSpans content={"KLM"} randomNumbers={randomNumbers} />
          </a>
          <CreateSpans content={", "} randomNumbers={randomNumbers} />
          <a
            href="https://noon.kimjaehun.com/pipe/"
            target="_blank"
            rel="noreferrer"
          >
            <CreateSpans content={"Nike"} randomNumbers={randomNumbers} />
          </a>
          <CreateSpans content={", "} randomNumbers={randomNumbers} />
          <a
            href="https://noon.kimjaehun.com/fireworks/"
            target="_blank"
            rel="noreferrer"
          >
            <CreateSpans
              content={"DisneyWorld"}
              randomNumbers={randomNumbers}
            />
          </a>
        </h2>
      </div>

      <div className="text-container text-container--bottom text-container--right">
        <h2 className="content__secondary-header">
          <CreateSpans
            content={"I am always ready to learn something from you."}
            randomNumbers={randomNumbers}
          />
        </h2>
        <Link className="link" to="/contact">
          /Contact
        </Link>
      </div>
    </div>
  );
};

export default About;
