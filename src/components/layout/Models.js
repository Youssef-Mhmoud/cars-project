import React from "react";
import classes from "./Models.module.css";

const Models = () => {
  return (
    <section className={classes.modelsSection}>
      <img src={require("../../assets/cars-model/Car-1.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-2.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-3.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-4.png")} alt="" />
      <div className={classes.imgInfo}>
        <img src={require("../../assets/cars-model/Car-5.png")} alt="" />
        <div>
          <h3>Tesla Model 3</h3>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </div>
      </div>
      <img src={require("../../assets/cars-model/Car-6.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-7.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-8.png")} alt="" />
      <img src={require("../../assets/cars-model/Car-9.png")} alt="" />
    </section>
  );
};

export default Models;
