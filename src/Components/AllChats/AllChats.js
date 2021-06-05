import React, { Component } from "react";
import classes from "./AllChats.module.css";
import ChatBlock from "./ChatBlock/ChatBlock";
import Chat from "../Chat/Chat";
import { FiSearch } from "react-icons/fi";

class AllChats extends Component {
  state = {
    chat1: false,
    chat2: false,
    chat3: false,
    chat4: false,
    unreadState: true,
  };
  chatHandler1 = () => {
    this.setState({
      chat1: true,
      chat2: false,
      chat3: false,
      chat4: false,
      unreadState: false,
    });
  };
  chatHandler2 = () => {
    this.setState({ chat2: true, chat1: false, chat3: false, chat4: false });
  };
  chatHandler3 = () => {
    this.setState({ chat3: true, chat1: false, chat2: false, chat4: false });
  };
  chatHandler4 = () => {
    this.setState({ chat4: true, chat1: false, chat2: false, chat3: false });
  };
  render() {
    return (
      <span>
        <div className={classes.allChats}>
          <div className={classes.title}>
            <div className={classes.chats}>Chats</div>
            <div className={classes.filter}>Recent Chats ></div>
            <button className={classes.button}>+ Create New Chat</button>
          </div>
          <div className={classes.search}>
            <div className={classes.searchType}>Messages ></div>
            <div className={classes.searchFilter}>
              <FiSearch />
              <input className={classes.searchInput} placeholder={"Search"} />
            </div>
          </div>
          <div className={classes.chatBlockContainer}>
            <ChatBlock
              chatHandler={this.chatHandler1}
              name={"John Snow"}
              unread={"2"}
              unreadState={this.state.unreadState}
              userOnlineStatus={"1 mintute"}
              profilepic={
                "https://www.acupuncturepainrelief.co.nz/wp-content/uploads/2017/02/WDF_1102596.png"
              }
              text={"ohhh..the Good Luck"}
            />
            <ChatBlock
              chatHandler={this.chatHandler2}
              name={"Rob Stark"}
              unreadState={false}
              userOnlineStatus={"4 hours"}
              profilepic={
                "https://familyfirstmalaysia.com/wp-content/uploads/2016/08/profile-pics-18.jpg"
              }
              text={"thnx man , I will be waitng"}
            />
            <ChatBlock
              chatHandler={this.chatHandler3}
              name={"Ned Stark"}
              unreadState={false}
              userOnlineStatus={"2 days"}
              profilepic={
                "https://www.over40datingsite.co.uk/wp-content/uploads/2016/09/shutterstock_341919467.jpg"
              }
              text={"ohhh..the Good Luck I am going for a trip btw"}
            />
            <ChatBlock
              chatHandler={this.chatHandler4}
              name={"Arya Stark"}
              unreadState={false}
              userOnlineStatus={"2 days"}
              profilepic={"https://www.dw.com/image/51515161_303.jpg"}
              text={"thnx man , I will be waitng"}
            />
          </div>
        </div>
        {this.state.chat1 ? (
          <Chat
            name={"John Snow"}
            userStatus={"1 minute"}
            profilepicture={
              "https://www.acupuncturepainrelief.co.nz/wp-content/uploads/2017/02/WDF_1102596.png"
            }
            receivedMsg1={"hello,whats up?"}
            receivedMsg2={"are You free for tomorrow??"}
            sentMsg3={
              "nothning, m just chilling out,what about you?? I have an exam tomorrow, Trying to get started "
            }
            receivedMsg4={"ohhh..the Good Luck"}
          />
        ) : null}
        {this.state.chat2 ? (
          <Chat
            name={"Rob Stark"}
            userStatus={"2 hours"}
            profilepicture={
              "https://familyfirstmalaysia.com/wp-content/uploads/2016/08/profile-pics-18.jpg"
            }
            receivedMsg1={
              "You Coming for Party tomorrow?my kitchen is almost empty right now.."
            }
            receivedMsg2={"If Yes Then Plz bring some cold Drinks with"}
            sentMsg3={"m not sure, but i would have a plan i will bring it"}
            receivedMsg4={"thnx man , I will be waitng"}
          />
        ) : null}
        {this.state.chat3 ? (
          <Chat
            name={"Ned Stark"}
            userStatus={"6 hours"}
            profilepicture={
              "https://www.over40datingsite.co.uk/wp-content/uploads/2016/09/shutterstock_341919467.jpg"
            }
            receivedMsg1={"hello,whats up?"}
            receivedMsg2={"are You free for tomorrow??"}
            sentMsg3={
              "nothning, m just chilling out,what about you?? I have an exam tomorrow, Trying to get started "
            }
            receivedMsg4={"ohhh..the Good Luck I am going for a trip btw"}
          />
        ) : null}
        {this.state.chat4 ? (
          <Chat
            name={"Arya Stark"}
            userStatus={"1 day"}
            profilepicture={"https://www.dw.com/image/51515161_303.jpg"}
            receivedMsg1={
              "You Coming for Party tomorrow?my kitchen is almost empty right now.."
            }
            receivedMsg2={"If Yes Then Plz bring some cold Drinks with"}
            sentMsg3={"m not sure, but i would have a plan i will bring it"}
            receivedMsg4={"thnx man , I will be waitng"}
          />
        ) : null}
      </span>
    );
  }
}

export default AllChats;
