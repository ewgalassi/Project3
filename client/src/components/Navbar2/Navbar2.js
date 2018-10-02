import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Grid";
import Login from "../Login";
import "./Navbar2.css";

const Navbar2 = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Container>
      <Link className="navbar-brand" to="/">
        Project 3
      </Link>
      <Login />
    </Container>
  </nav>
);

export default Navbar2;
