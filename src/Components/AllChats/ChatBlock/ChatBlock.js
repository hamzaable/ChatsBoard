import React, { Component } from "react";
import classes from "./ChatBlock.module.css";

class ChatBlock extends Component {
  state = {};
  render() {
    return (
      <div className={classes.chatBlock} onClick={this.props.chatHandler}>
        <img className={classes.profilePic} src={this.props.profilepic} />
        <div className={classes.onlineDot}></div>
        <div className={classes.userInfo}>
          <div className={classes.userName}>{this.props.name}</div>
          <div className={classes.userWrites}>:: writes</div>
          <div className={classes.userOnlineStatus}>
            {this.props.userOnlineStatus} ago
          </div>
        </div>

        <div className={classes.text}>{this.props.text}</div>
        {this.props.unreadState ? (
          <div className={classes.unRead}>{this.props.unread}</div>
        ) : null}
      </div>
    );
  }
}

export default ChatBlock;
