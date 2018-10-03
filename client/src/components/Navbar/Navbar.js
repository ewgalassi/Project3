import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { Container } from "../Grid";
import "./Navbar.css";

const Navbar = () => (
  <nav id="accountNav" className="navbar fixed-top navbar-expand-lg">
    <Container>
      <Link id="accountLogo" className="navbar-brand" to="/">
        Project 3
      </Link>
      <form className="form-inline my-2 my-lg-0">
        <input
          id="searchbox"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/newsfeed"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Newsfeed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/register"
              className={
                window.location.pathname === "/register"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/snippets"
              className={
                window.location.pathname === "/snippets"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Snippets
            </Link>
          </li>
          <li className="nav-item">
            <Logout />
          </li>
        </ul>
      </div>
    </Container>
  </nav>
);

export default Navbar;
