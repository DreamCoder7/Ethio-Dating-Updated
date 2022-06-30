import React from "react";
import classes from "./SectionTitle.module.css";

const sectionTitle = (props) => (
  <h2 className={classes.SectionTitle}>
    {props.title.split("").map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </h2>
);

export default sectionTitle;
