import React from "react";
import classes from "./NavItem.module.css";

const navItem = (props) => (
  <li className={classes.NavItem}>
    {/* TEMP : REPLACE WITH Link or NavLink USING react-router-dom */}
    <a className={classes.NavItemLink} href={props.link}>
      {props.children}
    </a>
  </li>
);

export default navItem;
