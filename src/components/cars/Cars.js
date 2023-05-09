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
    // setCount(index);
  };

  const nextBtn = () => {
    setCount(count + 1);
    if (count === data.length - 2) return setCount(3);

    setPage(() => data.slice(count + 2, count + 5));
  };

  const prevBtn = () => {
    setCount(count - 1);
    if (count === -1) return setCount(0);

    setPage(() => data.slice(count, count + 3));
  };

  return (
    <section className={classes.carsSection}>
      <button className={classes.arrowLeft} onClick={prevBtn}>
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
          {data.map((carsPaginationLength, i) => (
            <span
              key={i}
              onClick={() => sliceDataCars(i)}
              className={
                carsPaginationLength === page[0] ? classes.active : null
              }
            ></span>
          ))}
        </div>
      </div>
      <button className={classes.arrowRight} onClick={nextBtn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </section>
  );
};

export default Cars;
