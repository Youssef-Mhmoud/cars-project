import React from "react";
import classes from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
  return (
    <div className={classes.card}>
      <div className={classes.cardCar}>
        <div>
          <h3>SUV</h3>
          <p>Mercedes M class</p>
          <div className={classes.flexCard}>
            <button className={classes.decrease}>-</button>
            <span>7</span>
            <button className={classes.increase}>+</button>
            <button className={classes.trash}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
        <img src={require("../../assets/car-1.png")} alt="" />
      </div>
      <button className={classes.clearAll}>
        <span>Delete All</span>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Card;
