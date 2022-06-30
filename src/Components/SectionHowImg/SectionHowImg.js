import React from "react";
import classes from "./SectionHowImg.module.css";

const sectionHowImg = (props) => (
  <img className={classes.SectionHowImg} src={props.src} alt={props.alt} />
);

export default sectionHowImg;
