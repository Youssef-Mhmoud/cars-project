import React, { useContext, useState } from "react";
import classes from "./Cars.module.css";
import Car from "./Car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dataCars from "../../data.json";
import { CartContext } from "../../context/CartContext";

const Cars = () => {
  const { carList } = useContext(CartContext);

  const [data, setData] = useState(dataCars.cars);

  const sliceDataCars = () => {
    // setData((prevData) => {
    //   return prevData.slice(2, 5);
    // });
  };

  return (
    <section className={classes.carsSection}>
      <button className={classes.arrowLeft} onClick={sliceDataCars}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={classes.carsContainer}>
        <h2>Cars</h2>
        <div className={classes.carsBoxes}>
          {data.map((car, i) => (
            <Car
              key={i}
              img={car.image}
              name={car.name}
              class={car.class}
              desc={car.description}
              seats={car.seats}
              luggage={car.luggage}
              carItem={carList.find((c) => c.name === car.name)}
            />
          ))}
        </div>
        <div className={classes.pagination}>
          {data.map((carsPaginationLength, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>
      <button className={classes.arrowRight}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
};

export default Cars;
