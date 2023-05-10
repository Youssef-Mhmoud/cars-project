import React, { useContext } from "react";
import classes from "./Car.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../../context/CartContext";

const Car = (props) => {
  const { increaseCarCart, decreaseCarCart } = useContext(CartContext);

  const increaseCar = () => {
    const carDetails = {
      name: props.name,
      class: props.class,
      img: props.img,
    };

    increaseCarCart(carDetails);
  };

  const removeCar = () => {
    decreaseCarCart({ name: props.name });
  };

  return (
    <div className={classes.cardCar}>
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p className={classes.carClass}>{props.class}</p>
      <p className={classes.carDesc}>{props.desc}</p>
      <div className={classes.flexBox}>
        <div className={classes.luggageFlex}>
          <div className={classes.seats}>
            <FontAwesomeIcon icon={faUserGroup} />
            <br />
            <FontAwesomeIcon icon={faSuitcase} />
          </div>
          <div className={classes.seats}>
            <span>{props.seats} Seats</span>
            <br />
            <span>{props.luggage} Luggage</span>
          </div>
        </div>
        <div className={classes.btnBuy}>
          <button className={classes.decrease} onClick={removeCar}>
            -
          </button>
          {props.carItem ? (
            <span>{props.carItem.quantity}</span>
          ) : (
            <span>0</span>
          )}
          <button className={classes.increase} onClick={increaseCar}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Car;
