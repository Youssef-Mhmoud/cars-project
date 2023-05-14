import React, { useEffect } from "react";
import classes from "./TestimonialsSection.module.css";
import { useState } from "react";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialsSection = () => {
  const [testiData, setTestiData] = useState([]);
  const [count, setCount] = useState(0);

  const pagiTest = (index) => {
    setCount(index);
  };

  useEffect(() => {
    setTestiData(data.testimonials);
  }, []);

  useEffect(() => {
    if (count === 4) return setCount(0);

    const slider = setTimeout(() => {
      setCount(count + 1);
    }, 5000);

    return () => {
      clearInterval(slider);
    };
  }, [count]);

  return (
    <section className={classes.testiSection}>
      <div className={classes.containerTesti}>
        <h2>Testimonials</h2>

        {testiData.map((testi, i) => (
          <div
            className={`${classes.cardTesti} ${
              count === i ? classes.activeCard : ""
            }`}
            key={i}
          >
            <div className={classes.carTestiCard}>
              <p>{testi.description}</p>
              <div className={classes.stars}>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div>
                <h3>{testi.name}</h3>
              </div>
              <img src={require("../../assets/car4.png")} alt="" />
            </div>
          </div>
        ))}

        <div className={classes.paginationTesti}>
          {testiData.map((testiLength, i) => (
            <span
              key={i}
              onClick={() => pagiTest(i)}
              className={count === i ? classes.active : ""}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
