import React from "react";
import classes from "./Models.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Models = () => {
  return (
    <section className={classes.modelsSection}>
      <img
        src={require("../../assets/cars-model/Car-1.png")}
        className={classes.imgHidden}
        alt=""
      />
      <img src={require("../../assets/cars-model/Car-2.png")} alt="" />
      <img
        src={require("../../assets/cars-model/Car-3.png")}
        className={classes.imgHidden}
        alt=""
      />
      <img
        src={require("../../assets/cars-model/Car-4.png")}
        className={classes.imgHidden}
        alt=""
      />
      <div className={classes.imgInfo}>
        <img src={require("../../assets/cars-model/Car-5.png")} alt="" />
        <div>
          <h3>Tesla Model 3</h3>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <Link smooth to="/#contact-us">
            Contact
          </Link>
        </div>
      </div>
      <img
        src={require("../../assets/cars-model/Car-6.png")}
        className={classes.imgHidden}
        alt=""
      />
      <img
        src={require("../../assets/cars-model/Car-7.png")}
        alt=""
        className={classes.imgHidden}
      />
      <img src={require("../../assets/cars-model/Car-8.png")} alt="" />
      <img
        src={require("../../assets/cars-model/Car-9.png")}
        alt=""
        className={classes.imgHidden}
      />
    </section>
  );
};

export default Models;
