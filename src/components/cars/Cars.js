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
  const [page, setPage] = useState(dataCars.cars);
  const [count, setCount] = useState(0);

  const sliceDataCars = (index) => {
    setPage(() => data.slice(index, index + 3));
    setCount(index);
  };

  const nextBtn = () => {
    setCount(count + 1);

    setPage(() => data.slice(count + 1, count + 4));

    if (count === data.length - 4) return setCount(2);
  };

  const prevBtn = () => {
    setPage(() => data.slice(count, count + 3));

    setCount(count - 1);

    if (count === 0) return setCount(0);
  };

  return (
    <section className={classes.carsSection} id="cars">
      <button
        className={classes.arrowLeft}
        onClick={prevBtn}
        aria-label="prev button slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className={classes.carsContainer}>
        <h2>Cars</h2>
        <div className={classes.carsBoxes}>
          {page.slice(0, 3).map((car, i) => (
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
          {data.slice(0, 4).map((carsPaginationLength, i) => (
            <span
              key={i}
              onClick={() => sliceDataCars(i)}
              className={carsPaginationLength === page[0] ? classes.active : ""}
            ></span>
          ))}
        </div>
      </div>
      <button
        className={classes.arrowRight}
        onClick={nextBtn}
        aria-label="next button slide"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
};

export default Cars;
