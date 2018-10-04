import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Col, Row, Container } from "../../components/Grid";
import "./Messages.css";
import MessageAPI from "../../utils/messageAPI";
import Message from "../../components/Message/Message";
import NewMessageInput from "../../components/Message/NewMessagInput";

class Messages extends React.Component {
  state = {
    messages: [],
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

  handleDelete = id => {
    console.log(id);
    MessageAPI.delete(id).then(data => {
      console.log(data);
      // window.location.replace("/messages");
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

          <NewMessageInput />

          <hr />

          {this.state.messages.map(message => {
            return (
              <div key={message._id}>
                <Message
                  key={message._id}
                  id={message._id}
                  conversation={message.conversation}
                  from={message.from}
                />
                <button onClick={() => this.handleDelete(message._id)}>X</button>
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
