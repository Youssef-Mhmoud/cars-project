import React, { useEffect } from "react";
import classes from "./Testimonials.module.css";
import { useState } from "react";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [testiData, setTestiData] = useState(data.testimonials);
  const [page, setPage] = useState(data.testimonials);
  const [count, setCount] = useState(0);

  // const pagiTest = useCallback(
  //   (index) => {
  //     setPage(() => testiData.slice(index, index + 1));
  //     setCount(index);
  //   },
  //   [testiData]
  // );

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 5000);

    if (count === 4) return setCount(0);

    setPage(() => testiData.slice(count, count + 1));
  }, [count, testiData]);

  return (
    <section className={classes.testiSection}>
      <div className={classes.containerTesti}>
        <h2>Testimonials</h2>

        {page.map((testi, i) => (
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
            <span
              key={i}
              // onClick={() => pagiTest(i)}
              className={testiLength === page[0] ? classes.active : null}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
