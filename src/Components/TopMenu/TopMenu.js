import React, { Component } from "react";
import classes from "./TopMenu.module.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import { GrNotification } from "react-icons/gr";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

class TopMenu extends Component {
  render() {
    return (
      <div className={classes.topMenu}>
        <img
          className={classes.profilePic}
          src={
            "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png"
          }
        />
        <div className={classes.profileName}>Harry Potter</div>
        <div className={classes.profileOptionbtn}>></div>

        <div className={classes.homeOption}>
          <div className={classes.homeIcon}>
            <AiFillHome />
          </div>
          <div className={classes.homeText}>HOME</div>
        </div>

        <div className={classes.chatOption}>
          <div className={classes.chatIcon}>
            <BsFillChatDotsFill />
          </div>
          <div className={classes.chatText}>CHAT</div>
        </div>

        <div className={classes.contactOption}>
          <div className={classes.contactIcon}>
            <RiContactsLine />
          </div>
          <div className={classes.contactText}>CONTACTS</div>
        </div>

        <div className={classes.notificationsOption}>
          <div className={classes.notificationsIcon}>
            <GrNotification />
          </div>
          <div className={classes.notificationsText}>NOTIFACTIONS</div>
        </div>

        <div className={classes.settingsOption}>
          <div className={classes.settingsIcon}>
            <AiOutlineSetting />
          </div>
          <div className={classes.settingsText}>SETTINGS</div>
        </div>

        <div className={classes.logoutOption}>
          <div className={classes.logoutIcon}>
            <AiOutlineLogout />
          </div>
          <div className={classes.logoutText}>LOGOUT</div>
        </div>
      </div>
    );
  }
}

export default TopMenu;
