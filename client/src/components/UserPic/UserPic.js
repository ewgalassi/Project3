import React from "react";
import Card from "../Card/Card";
import UserAPI from "../../utils/userAPI";

import "./UserPic.css";

class UserPic extends React.Component {
  state = {
    id: this.props.id,
    loggedInUser: this.props.loggedInUser,
    following: false
  };

  handleFollow = id => {
    UserAPI.followUser(id).then(data => {
      this.setState({
        following: true
      });
    }).catch(err => {
      console.log(err);
    });
  };

  handleUnfollow = id => {
    UserAPI.unfollowUser(id).then(data => {
      this.setState({
        following: false
      });
    }).catch(err => {
      console.log(err);
    });
  };

  renderButton = () => {
    if (this.props.userId === this.props.loggedInUser) {
      return;
    } else {
      if (this.state.following) {
        return (
          <button
            onClick={() => this.handleUnfollow(this.props.userId)}
            className="btn btn-danger btn-sm">
            Unfollow
        </button>
        );
      } else {
        return (
          <button
            onClick={() => this.handleFollow(this.props.userId)}
            className="btn btn-primary btn-sm">
            Follow
        </button>
        );
      };
    };
  };

  render() {
    return (
      <Card className="profile-card">
        <img className="userImage img-responsive" src={this.props.pic} alt="Profile" />
        <h2 className="profile-name">{this.props.fullName}</h2>
        {this.renderButton()}
      </Card>
    );
  }
}

export default UserPic;
