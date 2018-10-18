import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Col, Row, Container } from "../../components/Grid";
import "./Messages.css";
import MessageAPI from "../../utils/messageAPI";
import Message from "../../components/Message/Message";
import NewMessageInput from "../../components/Message/NewMessagInput";

class Messages extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    MessageAPI.getMessages()
      .then(data => {
        console.log(data.data);
        this.setState({
          messages: data.data || []
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDelete = id => {
    MessageAPI.delete(id)
      .then(data => {
        window.location.replace("/messages");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col size="sm-12 md-7">
              <div className="stationary">
                <NewMessageInput />
              </div>
            </Col>
          </Row>
          <div className="messageBump" />
          <Row>
            <Col size="sm-12 md-7">
              <div className="scrolly">
                {this.state.messages.map(message => {
                  return (
                    <div key={message._id}>
                      <button
                        id="messageDeleteBtn"
                        onClick={() => this.handleDelete(message._id)}
                      >
                        X
                      </button>
                      <Message
                        key={message._id}
                        id={message._id}
                        conversation={message.conversation}
                        from={message.from}
                        to={message.to}
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Messages;
