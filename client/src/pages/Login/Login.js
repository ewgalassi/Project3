import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import RegisterInputs from "../../components/RegisterInputs";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <Container>
            <Row>
              <Col size="md-6">Lorem </Col>
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
