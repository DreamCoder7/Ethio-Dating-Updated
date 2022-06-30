import React from "react";
import classes from "./ToggleLight.module.css";

const toggleLight = (props) => (
  <div className={classes.ToggleLight}>
    <img src={props.src} alt={props.alt} onClick={props.clicked} />
  </div>
);

export default toggleLight;
