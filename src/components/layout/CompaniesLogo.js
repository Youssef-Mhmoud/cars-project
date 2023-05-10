import React from "react";
import classes from "./CompaniesLogo.module.css";

const CompaniesLogo = () => {
  return (
    <div className={classes.carsCompany}>
      <div className={classes.contCompany}>
        <img src={require("../../assets/cars-company/BMW.png")} alt="" />
        <img
          src={require("../../assets/cars-company/Volvo_logo1-1.png")}
          alt=""
        />
        <img
          src={require("../../assets/cars-company/Suzuki_logo_2-1.png")}
          alt=""
        />
        <img
          src={require("../../assets/cars-company/Toyota_EU-1.png")}
          alt=""
        />
        <img
          src={require("../../assets/cars-company/Nissan_2020_logo.png")}
          alt=""
        />
        <img
          src={require("../../assets/cars-company/Mercedes-Benz_free_logo.png")}
          alt=""
        />
        <img src={require("../../assets/cars-company/image-262.png")} alt="" />
        <img src={require("../../assets/cars-company/Vector.png")} alt="" />
      </div>
    </div>
  );
};

export default CompaniesLogo;
