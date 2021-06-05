import React, { Component } from "react";
import classes from "./Container.module.css";
import TopMenu from "../Components/TopMenu/TopMenu";
import AllChats from "../Components/AllChats/AllChats";
import Chat from "../Components/Chat/Chat";

class Container extends Component {
  render() {
    return (
      <div className={classes.container}>
        <TopMenu />
        <AllChats />
      </div>
    );
  }
}

export default Container;
