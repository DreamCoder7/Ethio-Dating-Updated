import React from "react";
import Button from "../UI/Button/Button";
import classes from "./HeaderContent.module.css";

const headerContent = () => (
  <div className={classes.HeaderContent}>
    <h1 className={classes.PrimaryHeading}>
      <span>Be with someone</span> who says: let's fix this.{" "}
      <span>i can't lose you</span>
    </h1>
    <p className={classes.HeaderContentText}>
      Ethio-dating is one of the biggest dating communities on the Internet.
    </p>
    <Button>Create now</Button>
  </div>
);

export default headerContent;
