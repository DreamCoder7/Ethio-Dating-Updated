import React from "react";
import classes from "./SectionHowContent.module.css";

const sectionHowContent = (props) => (
  <div className={classes.SectionHowContent}>
    <h4 className={classes.Title}>{props.title}</h4>
    <p className={classes.Paragraph}>{props.text}</p>
  </div>
);

export default sectionHowContent;
