import React from "react";
import classes from "./CarModelsSection.module.css";
import { Link } from "react-router-dom";
import MinifyImgs from "../MinifyImgs";

const CarModelsSection = () => {
  return (
    <section className={classes.modelsSection}>
      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-1"
      />
      <MinifyImgs pathImg="cars-model/Car-2" />
      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-3"
      />
      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-4"
      />

      <div className={classes.imgInfo}>
        <MinifyImgs pathImg="cars-model/Car-5" />

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

      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-6"
      />
      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-7"
      />
      <MinifyImgs pathImg="cars-model/Car-8" />
      <MinifyImgs
        classHiddenImg={classes.imgHidden}
        pathImg="cars-model/Car-9"
      />
    </section>
  );
};

export default CarModelsSection;
