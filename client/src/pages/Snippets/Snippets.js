import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";
import Navbar from "../../components/Navbar/Navbar"

class Snippet extends Component {

    render() {
        return (
          <div>
          <Navbar/>
          <Container>
              <Row>
                <Col size="md-8">
                  <Postfeed />
                </Col>
              </Row>
          </Container>
          </div>


        )
    }

}

export default Snippet; 