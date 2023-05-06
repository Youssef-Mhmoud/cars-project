import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import classes from "./Boxes.module.css";

const BoxServicesSec = (props) => {
  return (
    <div className={classes.box}>
      <FontAwesomeIcon icon={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  );
};

export default BoxServicesSec;
