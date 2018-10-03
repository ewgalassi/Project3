import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import { Container } from "../Grid";
import "./Navbar.css";

const Navbar = () => (
  <nav id="accountNav" className="navbar navbar-expand-lg">
    <Container>
      <Link id="accountLogo" className="navbar-brand" to="/">
        Project 3
      </Link>
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
