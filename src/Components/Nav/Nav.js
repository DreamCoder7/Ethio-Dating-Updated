import React, { Component } from "react";
import ToggleNav from "../UI/ToggleNav/ToggleNav";
import Modal from "../UI/Modal/Modal";
import BackDrop from "../UI/BackDrop/BackDrop";
import ToggleLight from "../UI/ToggleLight/ToggleLight";
import NavItems from "./NavItems/Navitems";
import Logo from "../Logo/Logo";
import classes from "./Nav.module.css";
import sunIcon from "../../assets/Images/sun.svg";
import moonIcon from "../../assets/Images/moon.svg";

class Nav extends Component {
  state = {
    showModal: false,
    iconShow: false,
    darkMode: false,
  };

  showModalHundler = () => {
    this.setState({ showModal: true });
  };

  iconShowHundler = () => {
    this.setState({ iconShow: true, darkMode: true });
  };

  iconHideHundler = () => {
    this.setState({ iconShow: false });
  };

  render() {
    let icon = (
      <ToggleLight
        src={moonIcon}
        alt="Moon Icon"
        clicked={this.iconShowHundler}
      />
    );

    if (this.state.iconShow) {
      icon = (
        <ToggleLight
          src={sunIcon}
          alt="Sun Icon"
          clicked={this.iconHideHundler}
        />
      );
    }

    return (
      <nav className={classes.Nav}>
        <Logo />
        <NavItems />
        <Modal show={this.state.showModal} />
        <BackDrop
          show={this.state.showModal}
          clicked={this.hiddeModalHundler}
        />
        {icon}
        <ToggleNav clicked={this.showModalHundler} />
      </nav>
    );
  }
}

export default Nav;
