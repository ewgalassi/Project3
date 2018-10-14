import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Grid";
import LoginInputs from "../LoginInputs";
import "./Navbar2.css";
import "../../mobile.css";

const Navbar2 = () => (
  <nav className="navbar navbar-expand-lg">
    <Container>
      <Link id="logo" className="navbar-brand" to="/">
        <span className="socialCodeChar">
          &lt; <span className="socialCodeText">SocialCode </span> /&gt;{" "}
        </span>
      </Link>
      <LoginInputs />
    </Container>
  </nav>
);

export default Navbar2;
