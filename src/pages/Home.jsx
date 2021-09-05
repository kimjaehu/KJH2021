import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CreateSpans from "../utils/CreateSpans";
import useTextStyleChange from "../utils/useTextStyleChange";

import "../styles/home.css";

const Home = () => {
  const randomNumbers = useTextStyleChange(".content__secondary-header");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <div className="header-container">
        <h1 className="content__primary-header">
          Hi, my name is Jay
          <span className="content__name">.</span>
        </h1>
        <h2 className="content__secondary-header text-shadow">
          Front End Developer
        </h2>
        <p className="content__paragraph">ReactJS · Vanilla · Canvas.</p>
      </div>
      <div className="text-container text-container--right">
        <h2 className="content__secondary-header" data-index="0">
          <CreateSpans
            content={"I love coding, problem solving, art and design."}
            randomNumbers={randomNumbers}
          />
        </h2>
        <Link className="link" to="/about">
          /About
        </Link>
      </div>
      <div className="text-container text-container--left">
        <h2 className="content__secondary-header" data-index="1">
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
      <div className="text-container text-container--right text-container--bottom">
        <h2 className="content__secondary-header" data-index="2">
          <CreateSpans
            content={"I am always ready to learn something from you."}
            randomNumbers={randomNumbers}
          />
        </h2>
        <Link className="link" to="/contact">
          /Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
