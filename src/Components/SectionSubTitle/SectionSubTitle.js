import React from "react";
import classes from "./SectionSubTitle.module.css";

const sectionSubTitle = (props) => (
  <h3 className={classes.SectionSubTitle}>{props.subTitle}</h3>
);

export default sectionSubTitle;
