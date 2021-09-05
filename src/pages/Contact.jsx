import { motion } from "framer-motion";

import CreateSpans from "../utils/CreateSpans";
import useTextStyleChange from "../utils/useTextStyleChange";
import "../styles/work.css";

const Contact = () => {
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
          Let us connect<span className="content__name">!</span>
        </h1>
        <h2 className="content__secondary-header text-shadow">
          I am always happy to talk, discuss and learn something new.
        </h2>
      </div>
      <div className="text-container text-container--bottom">
        <h2 className="content__secondary-header">
          <CreateSpans
            content={
              "You are welcome to drop me a message and I will try my best to get backto you as soon as I can."
            }
            randomNumbers={randomNumbers}
          />
        </h2>
        <a className="link" href="mailto:kimjaehu@gmail.com">
          /email
        </a>
      </div>
    </motion.div>
  );
};

export default Contact;
