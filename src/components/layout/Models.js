import React from "react";
import classes from "./Models.module.css";
import { Link } from "react-router-dom";

const Models = () => {
  return (
    <section className={classes.modelsSection}>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-1.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-1.png")}
          type="image/png"
        />
        <img
          src={require("../../assets/cars-model/Car-1.png")}
          className={classes.imgHidden}
          alt=""
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-2.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-2.png")}
          type="image/png"
        />
        <img src={require("../../assets/cars-model/Car-2.png")} alt="" />
      </picture>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-3.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-3.png")}
          type="image/png"
        />
        <img
          src={require("../../assets/cars-model/Car-3.png")}
          className={classes.imgHidden}
          alt=""
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-4.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-4.png")}
          type="image/png"
        />
        <img
          src={require("../../assets/cars-model/Car-4.png")}
          className={classes.imgHidden}
          alt=""
        />
      </picture>

      <div className={classes.imgInfo}>
        <picture>
          <source
            srcSet={require("../../assets/cars-model/Car-5.webp")}
            type="image/webp"
          />
          <source
            srcSet={require("../../assets/cars-model/Car-5.png")}
            type="image/png"
          />
          <img src={require("../../assets/cars-model/Car-5.png")} alt="" />
        </picture>
        <div>
          <h3>Tesla Model 3</h3>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <Link
            to="/contact-us"
            onClick={() => window.location.replace("#contact-us")}
          >
            Contact
          </Link>
        </div>
      </div>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-6.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-6.png")}
          type="image/png"
        />
        <img
          src={require("../../assets/cars-model/Car-6.png")}
          className={classes.imgHidden}
          alt=""
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-7.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-7.png")}
          type="image/png"
        />
        <img
          src={require("../../assets/cars-model/Car-7.png")}
          className={classes.imgHidden}
          alt=""
        />
      </picture>
      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-8.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-8.png")}
          type="image/png"
        />

        <img src={require("../../assets/cars-model/Car-8.png")} alt="" />
      </picture>

      <picture>
        <source
          srcSet={require("../../assets/cars-model/Car-9.webp")}
          type="image/webp"
        />
        <source
          srcSet={require("../../assets/cars-model/Car-9.png")}
          type="image/png"
        />

        <img
          src={require("../../assets/cars-model/Car-9.png")}
          alt=""
          className={classes.imgHidden}
        />
      </picture>
    </section>
  );
};

export default Models;
