import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Col, Row, Container } from "../../components/Grid";
import "./Messages.css";
import MessageAPI from "../../utils/messageAPI";
import Message from "../../components/Message/Message";

class Messages extends React.Component {
  state = {
    messages: [],
    reply: ""
  };

  componentDidMount() {
    this.getMessages();
  };

  getMessages = () => {
    MessageAPI.getMessages().then(data => {
      console.log(data.data);
      this.setState({
        messages: data.data || []
      });
    }).catch(err => {
      console.log(err);
    });
  };


  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    MessageAPI.reply(this.state.reply, this.props.id).then(data => {
      console.log(data);
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
              <h3>Messages</h3>
            </Col>
          </Row>

          {this.state.messages.map(message => {
            return (
              <div key={message._id}>
                <Message
                  key={message._id}
                  id={message._id}
                  conversation={message.conversation}
                  from={message.from}
                />

                <form>
                  <input type="text"
                    name="reply"
                    onChange={this.handleInput}
                    value={this.state.reply}
                  />
                  <button onClick={this.handleSubmit}>Reply</button>
                </form>
              </div>
            );
          })}
          <hr />

        </Container>
      </div>
    );
  };
};

export default Messages;
