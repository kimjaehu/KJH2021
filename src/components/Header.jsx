import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "./Logo";

import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <button
        className="header__button nav-btn-js"
        data-state={menuOpen}
        type="button"
        onClick={handleClick}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav className="header__nav nav-js" data-state={menuOpen}>
        <Link className="logo logo--light" to="/">
          <Logo />
        </Link>
        <div className="header__menu">
          <div className="header__menu-container">
            <NavLink
              exact
              activeClassName="header__menu-item--active"
              className="header__menu-item"
              to="/"
              onClick={handleClick}
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="header__menu-item--active"
              className="header__menu-item"
              to="/about"
              onClick={handleClick}
            >
              About
            </NavLink>
            <NavLink
              activeClassName="header__menu-item--active"
              className="header__menu-item"
              to="/work"
              onClick={handleClick}
            >
              Work
            </NavLink>
            <NavLink
              activeClassName="header__menu-item--active"
              className="header__menu-item"
              to="/contact"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
