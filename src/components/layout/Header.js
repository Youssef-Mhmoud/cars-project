import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { CardContext } from "../../context/CardContext";

const Header = () => {
  const { setCardActive, carList } = useContext(CardContext);

  const totalAmount = carList.reduce((curNum, car) => {
    return curNum + car.quantity;
  }, 0);

  const activeCard = () => {
    setCardActive((prevActive) => !prevActive);
  };

  return (
    <header className={classes.header}>
      <nav>
        <NavLink to="..">
          <div className={classes.logo}>
            <span>Your</span>
            <span>Car</span>
          </div>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to=".."
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="cars"
            >
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="contact-us"
            >
              Contact us
            </NavLink>
          </li>
          <li className={classes.cartItem}>
            <button onClick={activeCard}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <div>{totalAmount}</div>
          </li>
        </ul>
      </nav>

      <div className={classes.heroInfo}>
        <div className={classes.innerHeroInfo}>
          <h1>Find the perfect car for you at YourCar.</h1>
          <p>
            We offer a wide range of cars that cater to your needs and budget.
            Visit us today and drive away with your dream car!
          </p>
          <button>
            <span>Discover</span>
            <span>
              <svg
                className={classes.arrow}
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.5L1 15.5M3.33333 1.5H15V13.1667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
