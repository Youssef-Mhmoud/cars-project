import React from "react";
import classes from "./Testimonials.module.css";
import { useState } from "react";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [testiData, setTestiData] = useState(data.testimonials);

  return (
    <section className={classes.testiSection}>
      <div className={classes.containerTesti}>
        <h2>Testimonials</h2>
        {testiData.slice(0, 1).map((testi, i) => (
          <div className={classes.cardTesti} key={i}>
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
            <span key={i}></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
