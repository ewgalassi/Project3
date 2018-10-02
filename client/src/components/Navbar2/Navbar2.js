import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Grid";
import LoginInputs from "../LoginInputs";
import "./Navbar2.css";

const Navbar2 = () => (
  <nav className="navbar navbar-expand-lg">
    <Container>
      <Link className="navbar-brand" to="/">
        Project 3
      </Link>
      <LoginInputs />
    </Container>
  </nav>
);

export default Navbar2;
