import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="main-container">
      <div className="text-container text-container--left">
        <h1 className="content__primary-header">
          Work<span className="content__name">!</span>
        </h1>
        <h2 className="content__secondary-header">
          I am very fortunate to have worked with amazing companies.
        </h2>
      </div>
      <div className="text-container text-container--right">
        <h2 className="content__secondary-header">
          Salvation Army, Autotrader, Keilhauer,
        </h2>
        <Link className="link" to="/about">
          /About
        </Link>
      </div>
      <div className="text-container text-container--left">
        <h2 className="content__secondary-header">
          I have been fortunate with the opportunity to work on various
          projects.
        </h2>
        <Link className="link" to="/about">
          /Work
        </Link>
      </div>
      <div className="text-container text-container--right text-container--bottom">
        <h2 className="content__secondary-header">
          I am always ready to learn something from you.
        </h2>
        <Link className="link" to="/contact">
          /Contact
        </Link>
      </div>
    </div>
  );
};

export default Work;
