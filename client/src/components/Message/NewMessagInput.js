import React from "react";
import MessageAPI from "../../utils/messageAPI";

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
    };
    MessageAPI.newMessage(this.state.message, this.state.to).then(data => {
      console.log(data);
      window.location.replace("/messages");
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>

        <h3>Send a message!</h3>

        <form>
          <label>To: (username)</label>
          <input
          type="text"
          name="to"
          onChange={this.handleInput}
          value={this.state.to}
          />

          <br />
        
          <label>Message:</label>
          <input
          type="text"
          name="message"
          onChange={this.handleInput}
          value={this.state.message}
          />

          <button onClick={this.handleSubmit}>Send</button>
        </form>

      </div>
    );
  };
};

export default NewMessageInput;
