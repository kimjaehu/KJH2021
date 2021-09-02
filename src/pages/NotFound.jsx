import { Link } from "react-router-dom";

import "../styles/404.css";

const NotFound = () => {
  return (
    <div className="main main--404">
      <div className="header-container">
        <h2 className="content__secondary-header text-shadow">404</h2>
        <h2 className="content__secondary-header text-shadow">
          Nothing to see here
        </h2>
      </div>
    </div>
  );
};
export default NotFound;
