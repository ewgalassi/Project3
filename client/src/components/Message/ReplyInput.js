import React from "react";
import MessageAPI from "../../utils/messageAPI";

class ReplyInput extends React.Component {
  state = {
    input: ""
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props.id);
    MessageAPI.reply(this.state.input, this.props.id).then(data => {
      console.log(data);
      window.location.replace("/messages");
    }).catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div>
        <form>
          <input type="text"
            name="input"
            onChange={this.handleInput}
            value={this.state.reply}
          />
          <button onClick={this.handleSubmit}>Reply</button>
        </form>
      </div>
    );
  };
};

export default ReplyInput;
