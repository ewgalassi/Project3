import React from "react";
import Reply from "./Reply";
import ReplyInput from "./ReplyInput";
import Card from "../Card/Card";
import "./Messagecomp.css";
import "../../mobile.css";

class Message extends React.Component {
  state = {
    conversation: this.props.conversation || []
  };

  render() {
    return (
      <div>
        <Card id="messageCard">
          <h5>
            {this.props.from.fullName} to {this.props.to.fullName}
          </h5>
          <hr />
          <div className="messageboard">
            {this.state.conversation.map(msg => {
              return (
                <div id="exchanges" key={msg._id}>
                  <Reply
                    from={msg.from.firstName}
                    fromId={msg.from._id}
                    message={msg.message}
                  />
                </div>
              );
            })}
          </div>
          <ReplyInput id={this.props.id} />
        </Card>
      </div>
    );
  }
}

export default Message;
