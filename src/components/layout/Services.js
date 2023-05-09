import React from "react";
import classes from "./Services.module.css";
import BoxServicesSec from "../Boxes";
import {
  faGem,
  faHandHoldingHand,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <section className={classes.servicesSection} id="services">
      <div className={classes.container}>
        <h2>Services</h2>
        <div className={classes.boxes}>
          <BoxServicesSec
            icon={faStar}
            title="Car sales"
            desc="At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs."
          />
          <BoxServicesSec
            icon={faHandHoldingHand}
            title="Car rental"
            desc="If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience."
          />
          <BoxServicesSec
            icon={faGem}
            title="Car selling"
            desc="At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
