import React, { useContext, useEffect, useState } from "react";
import classes from "./Cars.module.css";
import Car from "./Car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import dataCars from "../../../data.json";
import { CartContext } from "../../../context/CartContext";

const Cars = () => {
  const { carList } = useContext(CartContext);

  const [data, setData] = useState(dataCars.cars);
  const [page, setPage] = useState(dataCars.cars);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  const sliceDataCars = (index) => {
    setPage(() => data.slice(index, index + 3));
    setCount(index);
  };

  useEffect(() => {
    setStart(count * 1);
    setEnd(count + 3);

    setPage(() => data.slice(start, end));
  }, [count, start, end, data]);

  const nextBtn = () => {
    if (end === 6) return setCount(3);

    setCount(count + 1);
  };

  const prevBtn = () => {
    if (count === 0) return setCount(0);

    setCount(count - 1);
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
