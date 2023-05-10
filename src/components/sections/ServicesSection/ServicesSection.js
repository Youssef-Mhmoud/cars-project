import React from "react";
import classes from "./ServicesSection.module.css";
import {
  faGem,
  faHandHoldingHand,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import BoxServicesSection from "./BoxServicesSection";

const ServicesSection = () => {
  return (
    <section className={classes.servicesSection} id="services">
      <div className={classes.container}>
        <h2>Services</h2>
        <div className={classes.boxes}>
          <BoxServicesSection
            icon={faStar}
            title="Car sales"
            desc="At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs."
          />
          <BoxServicesSection
            icon={faHandHoldingHand}
            title="Car rental"
            desc="If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience."
          />
          <BoxServicesSection
            icon={faGem}
            title="Car selling"
            desc="At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
