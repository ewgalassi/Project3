import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2/Navbar2";
import RegisterInputs from "../../components/RegisterInputs";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <Navbar2 />
        <div className="banner">
          <Container>
            <Row>
              <Col size="md-6">
                <h2 className="landingTitle">Built for developers</h2>
                <div className="iconsection">
                  <span id="icon" className="fas fa-user-friends fa-3x" />
                  <span className="iconText">Grow your network</span>
                  <small className="smallText">with like minded coders</small>
                </div>
                <div className="iconsection">
                  <span id="icon2" className="fas fa-laptop-code fa-3x" />
                  <span className="iconText">Share what you've learned </span>
                  <small className="smallText">on your timeline</small>
                </div>
                <div className="iconsection">
                  <span id="icon3" className="fab fa-readme fa-3x" />
                  <span className="iconText">Keep up to date </span>
                  <small className="smallText">with the latest tech news</small>
                </div>
              </Col>
              <Col size="md-6">
                <RegisterInputs />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
