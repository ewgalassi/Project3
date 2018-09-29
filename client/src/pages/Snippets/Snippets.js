import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Postfeed from "../../components/Postfeed/Postfeed";

class Snippet extends Component {

    render() {
        return (
          <Container>
              <Row>
                <Col size="md-8">
                  <Postfeed />
                </Col>
              </Row>
          </Container>


        )
    }

}

export default Snippet; 