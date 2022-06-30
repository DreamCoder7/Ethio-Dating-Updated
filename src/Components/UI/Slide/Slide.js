import React from "react";
import LeftArrow from "../../../assets/Images/caret-right.svg";
import RightArrow from "../../../assets/Images/caret-left.svg";
import classes from "./Slide.module.css";

const slide = (props) => (
  <div className={classes.Slide}>
    <button className={classes.SlideButton} onClick={props.Rightclicked}>
      <img className={classes.SlideIcon} src={RightArrow} alt="Right Arrow" />
    </button>
    <button className={classes.SlideButton} onClick={props.Leftclicked}>
      <img className={classes.SlideIcon} src={LeftArrow} alt="Left Arrow" />
    </button>
  </div>
);

export default slide;
