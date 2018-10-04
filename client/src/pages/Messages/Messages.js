import React from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Col, Row, Container } from "../../components/Grid";
import "./Messages.css";

class Messages extends React.Component {
  state = {
    total: 0,
    messages: [],
    reply: ""
  };

  componentDidMount() {
    // axios.get("/api/message/unread").then(data => {
      axios.get("/api/message").then(data => {
      this.setState({
        total: data.data.total,
        messages: data.data.messages || []
      });
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <br /><br /><br />
          </Row>
            
          <Row>
            <Col size="md-4">
              <h4>{this.state.total} messages:</h4>

              {
                this.state.messages.map(message => {
                  return (
                    <div key={message._id}>
                      {message.from.firstName}: {message.message}
                    </div>
                  );
                })
              }

              <form>
                <input type="text" name="reply" onChange={this.handleInput} value={this.state.reply} />
                <button onClick={this.handleSubmit}>Reply</button>
              </form>

            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Messages;
