import React from "react";
import classes from "./SectionTestiContent.module.css";

const sectionTestiContent = (props) => (
  <blockquote className={classes.SectionTestiContent}>
    <h4 className={classes.TestiHeading}>{props.users}</h4>
    <p className={classes.TestiParagraph}>{props.text}</p>
  </blockquote>
);

export default sectionTestiContent;
