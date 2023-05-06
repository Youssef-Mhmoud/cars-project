import React from "react";
import classes from "./Cars.module.css";
import Car from "./Car";

const Cars = () => {
  return (
    <section className={classes.carsSection}>
      <div>
        <h2>Cars</h2>
        <div>
          <Car />
        </div>
      </div>
    </section>
  );
};

export default Cars;
