import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import HeaderContent from "../../Components/HeaderContent/HeaderContent";
import HeaderImg from "../../Components/HeaderImg/HeaderImg";
import classes from "./Header.module.css";

class Header extends Component {
  // TODO : THIS SHOULD BE FIXED ASAP
  state = {
    showDarkHeader: false,
  };

  render() {
    return (
      <header
        className={
          this.state.showDarkHeader
            ? [classes.Header, classes.HeaderDark].join(" ")
            : classes.Header
        }
      >
        <Nav />
        <div className={classes.HeaderContainer}>
          <HeaderContent />
          <HeaderImg />
        </div>
      </header>
    );
  }
}

export default Header;
