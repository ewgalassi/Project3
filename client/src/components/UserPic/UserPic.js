import React from "react";
import Card from "../Card/Card";
import UserAPI from "../../utils/userAPI";

import "./UserPic.css";

let followStatus = false;

class UserPic extends React.Component {
  state = {
    userId: this.props.userId,
    loggedInUser: this.props.loggedInUser,
    isFollowing: false,
    followStatus: false
  };

  componentDidMount() {
    this.checkFollowStatus();
  };

  checkFollowStatus = () => {
    console.log(this.props.following)
    for (let i = 0; i < this.props.following.length; i++) {
      if (this.props.following[i]._id === this.props.userId) {
        followStatus = true;
        return console.log(followStatus);
      };
    };
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
      if (followStatus) {
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
        {this.checkFollowStatus()}
        <img className="userImage img-responsive" src={this.props.pic} alt="Profile" />
        <h2 className="profile-name">{this.props.fullName}</h2>
        {this.renderButton()}
      </Card>
    );
  }
}

export default UserPic;
