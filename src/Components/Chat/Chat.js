import React, { Component } from "react";
import classes from "./Chat.module.css";
import { FaPhotoVideo } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { FiSmile } from "react-icons/fi";
import { RiSendPlaneLine, RiAddLine } from "react-icons/ri";

class Chat extends Component {
  state = {
    FurtherIcons: false,
    msg: null,
    msgArray: [],
    Singlemessage: null,
  };
  addIconHandler = () => {
    this.setState({ FurtherIcons: !this.state.FurtherIcons });
  };
  InputHandler = (e) => {
    this.state.msg = e.target.value;
  };
  sendHandler = () => {
    this.state.msgArray.push(this.state.msg);
    console.log(this.state.msgArray);
    this.setState({
      Singlemessage: this.state.msgArray.map((singlemsg) => (
        <div className={classes.sent4}>
          <div className={classes.tick4}>✓✓</div>
          <div className={classes.sentMsg4}>{singlemsg}</div>
          <div className={classes.threeDots5}>...</div>
        </div>
      )),
    });
  };

  render() {
    let FurtherIcon = this.state.FurtherIcons ? (
      <div className={classes.FurtherIcons}>
        <div className={classes.iconVideo}>
          <FaPhotoVideo />
        </div>
        <div className={classes.iconPhoto}>
          <IoMdPhotos />
        </div>
        <div className={classes.iconFile}>
          <AiOutlineFilePdf />
        </div>
      </div>
    ) : null;

    return (
      <div className={classes.chat}>
        <div className={classes.userInfo}>
          <div className={classes.nameStatus}>
            <img
              className={classes.profilePic}
              src={this.props.profilepicture}
            />
            <div className={classes.userName}>{this.props.name}</div>
            <div className={classes.userStatus}>
              last online {this.props.userStatus} ago
            </div>
          </div>
          <div className={classes.userFile}>§</div>
          <div className={classes.userMore}>:</div>
        </div>
        <div className={classes.chatContainer}>
          <div className={classes.received1}>
            <img
              className={classes.profilePic1}
              src={this.props.profilepicture}
            />
            <div className={classes.a1}>
              <div className={classes.receivedMsg1}>
                {this.props.receivedMsg1}
              </div>
              <div className={classes.threeDots1}>...</div>
            </div>
          </div>

          <div className={classes.received2}>
            <div className={classes.a2}>
              <div className={classes.receivedMsg2}>
                {this.props.receivedMsg2}
              </div>
              <div className={classes.threeDots2}>...</div>
            </div>
            <div className={classes.time2}>4 days ago</div>
          </div>

          <div className={classes.sent3}>
            <div className={classes.tick3}>✓✓</div>
            <div className={classes.sentMsg3}>{this.props.sentMsg3}</div>
            <div className={classes.threeDots3}>...</div>
          </div>

          <div className={classes.received4}>
            <img
              className={classes.profilePic4}
              src={this.props.profilepicture}
            />
            <div className={classes.a4}>
              <div className={classes.receivedMsg4}>
                {this.props.receivedMsg4}
              </div>
              <div className={classes.threeDots4}>...</div>
            </div>
            <div className={classes.time4}>4 days ago</div>
          </div>
          <div className={classes.qwe}>{this.state.Singlemessage}</div>
        </div>
        <div className={classes.messageBlock}>
          {FurtherIcon}
          <div className={classes.messageLine}></div>
          <div className={classes.addIcon} onClick={this.addIconHandler}>
            <RiAddLine />
          </div>

          <input
            className={classes.messageType}
            type="input"
            placeholder="Type message here"
            onChange={(e) => this.InputHandler(e)}
          />
          <div className={classes.sendIcon} onClick={this.sendHandler}>
            <RiSendPlaneLine />
          </div>
          <div className={classes.smileIcon}>
            <FiSmile />
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
