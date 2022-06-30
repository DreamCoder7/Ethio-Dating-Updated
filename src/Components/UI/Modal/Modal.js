import React from "react";
import NavItems from "../../Nav/NavItems/Navitems";
import classes from "./Modal.module.css";

const modal = (props) =>
  props.show ? (
    <div
      className={[classes.Modal, props.show ? classes.ModalShow : null].join(
        " "
      )}
    >
      <NavItems />
    </div>
  ) : null;

export default modal;
