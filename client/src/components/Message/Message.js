import React from "react";
import Reply from "./Reply";
import ReplyInput from "./ReplyInput";

class Message extends React.Component {
  state = {
    conversation: this.props.conversation || [],
  };



  render() {
    return (
      <div>
        <h5>
          Your conversation with: {this.props.from.fullName}
        </h5>

        {
          this.state.conversation.map(msg => {
            return (
              <div key={msg._id}>
                <Reply
                  from={msg.from.firstName}
                  fromId={msg.from._id}
                  message={msg.message}
                />

              </div>
            );
          })}
        <ReplyInput
          id={this.props.id} />

      </div>
    );
  };
};

export default Message;
