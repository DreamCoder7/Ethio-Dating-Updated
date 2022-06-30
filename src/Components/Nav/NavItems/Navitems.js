import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";

const navItems = (props) => (
  <ul className={classes.NavItems}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/">About</NavItem>
    <NavItem link="/">Blog</NavItem>
    <NavItem link="/">Sign up</NavItem>
  </ul>
);

export default navItems;
