import React from "react";
import classes from "./SectionTestiImg.module.css";

const sectionTestiImg = (props) => (
  <img className={classes.SectionTestiImg} src={props.src} alt={props.alt} />
);

export default sectionTestiImg;
