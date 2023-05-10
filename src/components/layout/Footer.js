import React from "react";
import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact-us">
      <div className={classes.contFooter}>
        <div className={classes.contLogo}>
          <Link
            to=""
            className={classes.logo}
            onClick={() => window.location.replace("#")}
          >
            <span>Your</span>
            Car
          </Link>
          <p>
            We are known for luxurious and premium chaffeur services worldwide.
            We are simply the best you can find.
          </p>
          <p>
            we are dedicated to providing our customers with a first-class car
            buying, selling, and renting experience.
          </p>
        </div>
        <div className={classes.contNews}>
          <h4 className={classes.titleNews}>News Letter</h4>
          <p>
            Subscribe to our news letter for <br /> updates, news and exclusive
            offers
          </p>
          <form>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className={classes.contContact}>
          <h4 className={classes.titleContact}>Contact</h4>
          <address>
            <p className={classes.address}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>
                2038 2nd Avenue,
                <br /> Las Vegas, United States
              </span>
            </p>
            <div className={classes.phone}>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <a href="tel:01444773421423">01444773421423</a>
                <a href="tel:01477678449405">01477678449405</a>
              </div>
            </div>
            <p className={classes.mail}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@YourCar.com">info@YourCar.com</a>
            </p>
          </address>
        </div>
      </div>
      <div className={classes.socialIcons}>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <div className={classes.copyRight}>
        <p>
          © Copyright 2023 · <span>YourCar</span> All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
