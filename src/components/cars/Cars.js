import React, { useContext, useState } from "react";
import classes from "./Cars.module.css";
import Car from "./Car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dataCars from "../../data.json";
import { CardContext } from "../../context/CardContext";

const Cars = () => {
  const { carList } = useContext(CardContext);

  const [data, setData] = useState(dataCars.cars);

  return (
    <section className={classes.carsSection}>
      <button className={classes.arrowLeft}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={classes.carsContainer}>
        <h2>Cars</h2>
        <div className={classes.carsBoxes}>
          {data.slice(0, 3).map((car, i) => (
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
