import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
    Project 3
  </Link>
  <div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link
          to="/"
          className={
            window.location.pathname === "/" || window.location.pathname === "/newsfeed"
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
          to="/login"
          className={
            window.location.pathname === "/login"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Login
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
    </ul>
  </div>
</nav>
  );
  
  export default Navbar;