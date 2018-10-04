import React from "react";
import MessageAPI from "../../utils/messageAPI";
import Card from "../Card/Card";
import "./NewMessage.css";

class NewMessageInput extends React.Component {
  state = {
    message: "",
    to: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.message === "" || this.state.to === "") {
      return alert("Please fill out all the forms");
    }
    MessageAPI.newMessage(this.state.message, this.state.to)
      .then(data => {
        console.log(data.data);
        window.location.replace("/messages");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Card id="newMessageCard">
          <h3>Send a message!</h3>

          <form>
            <label>To:</label>
            <br />
            <input
              id="toUser"
              type="text"
              name="to"
              placeholder="Username"
              onChange={this.handleInput}
              value={this.state.to}
            />

            <br />

            <label>Message:</label>
            <br />
            <textarea
              id="messageTextArea"
              type="text"
              name="message"
              placeholder="Write a message..."
              onChange={this.handleInput}
              value={this.state.message}
            />
            <br />
            <button id="submitMessageBtn" onClick={this.handleSubmit}>
              Send
            </button>
          </form>
        </Card>
      </div>
    );
  }
}

export default NewMessageInput;
