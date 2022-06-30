import React from "react";
import classes from "./ToggleNav.module.css";

const toggleNav = (props) => (
  <button
    onClick={props.clicked}
    className={[
      classes.ToggleNav,
      props.show ? classes.ToggleNavOpen : null,
    ].join(" ")}
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
);

export default toggleNav;
