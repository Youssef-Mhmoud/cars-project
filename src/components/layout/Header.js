import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  const { setCartActive, carList } = useContext(CartContext);
  const [sticky, setSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) setSticky(true);
      else setSticky(false);
    });
  }, []);

  const totalAmount = carList.reduce((curNum, car) => {
    return curNum + car.quantity;
  }, 0);

  const activeCart = () => {
    setCartActive((prevActive) => !prevActive);
  };

  return (
    <header
      className={`${classes.header} ${sticky ? classes.headerSticky : ""}`}
    >
      <nav className={sticky ? classes.sticky : ""} ref={navRef}>
        <div className={classes.nav}>
          <NavHashLink smooth to="#">
            <div className={classes.logo}>
              <span>Your</span>
              <span>Car</span>
            </div>
          </NavHashLink>
          <div className={classes.navCartFlex}>
            <ul className={showMenu ? classes.showMenu : ""}>
              <li>
                <NavHashLink
                  to="#"
                  smooth
                  className={window.location.hash === "" ? classes.active : ""}
                >
                  Home
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  className={() =>
                    window.location.hash === "#about" ? classes.active : ""
                  }
                  to="/#about"
                >
                  About
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#services"
                  smooth
                  className={() =>
                    window.location.hash === "#services" ? classes.active : ""
                  }
                >
                  Services
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#cars"
                  smooth
                  className={() =>
                    window.location.hash === "#cars" ? classes.active : ""
                  }
                >
                  Cars
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  smooth
                  className={() =>
                    window.location.hash === "#contact-us" ? classes.active : ""
                  }
                  to="/#contact-us"
                >
                  Contact us
                </NavHashLink>
              </li>
            </ul>
            <div className={classes.cartItem}>
              <button onClick={activeCart}>
                <svg
                  width="42"
                  height="36"
                  viewBox="0 0 42 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.7257 0.306648C1.02605 0.484398 0.670556 1.27481 1.01093 1.89883C1.12817 2.1144 1.25675 2.23542 1.49501 2.364C1.64628 2.4472 1.67654 2.4472 3.45025 2.45855L5.25421 2.46989L5.39036 2.85565C5.46222 3.06743 5.75343 3.88811 6.03329 4.67852C6.31315 5.46894 6.77454 6.76991 7.05818 7.57167C7.34182 8.37344 7.72379 9.45128 7.90911 9.97318C8.09442 10.4913 8.52177 11.6939 8.85458 12.6394C9.19117 13.5849 9.60718 14.7611 9.78114 15.2489C9.95511 15.7368 10.2463 16.5537 10.4241 17.0642C10.6056 17.5748 10.9384 18.5165 11.1691 19.1632C11.396 19.8061 11.7704 20.865 12.0011 21.5155L12.4171 22.6917L12.2621 23.1039C12.1789 23.3271 11.933 23.9927 11.7175 24.5751C11.2712 25.7702 11.2296 25.929 11.2296 26.4207C11.2296 26.8518 11.3128 27.1959 11.5057 27.5968C11.9066 28.4251 12.871 29.0529 13.737 29.0529C13.8391 29.0529 13.9223 29.0604 13.9223 29.0718C13.9223 29.0831 13.8656 29.2079 13.7937 29.3478C13.321 30.2933 13.2075 31.322 13.4685 32.3166C13.9828 34.2794 15.9003 35.6182 17.8971 35.4102C19.372 35.2552 20.5936 34.4042 21.2441 33.0806C21.8114 31.9195 21.8114 30.5807 21.2441 29.4235C21.1533 29.2419 21.089 29.0831 21.1004 29.0718C21.1306 29.0415 29.4886 29.0491 29.5151 29.0793C29.5302 29.0907 29.5151 29.1436 29.481 29.1928C29.36 29.3819 29.1558 29.9151 29.065 30.282C28.8306 31.2501 28.9402 32.2145 29.3903 33.1184C30.279 34.911 32.3439 35.8224 34.2614 35.2703C36.1826 34.7181 37.4684 32.8234 37.2642 30.8568C37.2075 30.316 37.1091 29.9605 36.8784 29.4802C36.7801 29.2684 36.7045 29.0869 36.7196 29.0755C36.7309 29.0642 37.6348 29.0529 38.7278 29.0529C39.9758 29.0529 40.77 29.0377 40.857 29.015C40.9326 28.9923 41.0801 28.9091 41.186 28.8259C41.7306 28.3948 41.7268 27.5363 41.1747 27.1203C41.0763 27.0447 40.9288 26.9615 40.8494 26.9388C40.7435 26.9085 37.1734 26.8972 27.3065 26.8972C18.2942 26.8972 13.858 26.8858 13.7635 26.8594C13.6046 26.814 13.4496 26.6476 13.4118 26.4887C13.3891 26.3866 13.6046 25.7664 14.2778 23.9662L14.3799 23.7015L15.6544 23.5388C16.3541 23.4519 18.8085 23.1417 21.1079 22.8543C27.7716 22.011 32.7221 21.3907 34.4958 21.1676C35.3997 21.0504 36.2771 20.9256 36.4435 20.8802C37.1167 20.7062 37.8126 20.2902 38.3307 19.7456C38.8412 19.2086 39.1778 18.5921 39.348 17.8849L39.4312 17.537V11.051V4.56507L39.348 4.41001C39.2194 4.17175 39.0984 4.04316 38.8753 3.92214L38.6748 3.80869L23.3544 3.79734L8.03391 3.78978L7.99609 3.66497C7.91289 3.41537 7.07331 1.05547 7.02414 0.934444C6.94472 0.74913 6.71024 0.507088 6.49468 0.393631L6.3018 0.291519L4.07048 0.283958C2.84515 0.280174 1.79 0.291519 1.7257 0.306648ZM37.2566 11.607C37.2566 16.1868 37.2453 17.2685 37.2037 17.4235C37.0411 18.0324 36.5494 18.5505 35.9519 18.7434C35.8498 18.7774 34.0685 19.0157 31.9998 19.2766C29.9311 19.5338 26.6787 19.9423 24.7764 20.1843C18.0522 21.0314 14.3875 21.4891 14.3535 21.4891C14.3119 21.4891 14.3194 21.5117 12.9012 17.4992C12.7197 16.9773 12.3339 15.8994 12.0503 15.0977C11.5397 13.6567 11.0859 12.3822 10.2425 9.99209C10.0005 9.31513 9.7282 8.53984 9.62987 8.27133C9.53154 7.99903 9.38783 7.59058 9.30841 7.36367C9.22899 7.13297 9.08906 6.73209 8.99451 6.46358L8.82054 5.98328H23.0367H37.2566V11.607ZM17.9879 29.3365C18.6837 29.518 19.2586 30.1042 19.425 30.7963C19.6859 31.9157 18.9485 33.0201 17.8139 33.2129C16.528 33.4285 15.333 32.2523 15.5448 30.9816C15.7376 29.8054 16.8646 29.0453 17.9879 29.3365ZM33.6033 29.3403C34.0987 29.4689 34.5828 29.8357 34.8286 30.2668C34.9724 30.5202 35.1009 30.993 35.1009 31.2615C35.0972 31.9952 34.6206 32.7364 33.9512 33.0428C33.3802 33.3075 32.8091 33.3037 32.2456 33.0238C31.5876 32.7024 31.1867 32.1011 31.1413 31.3787C31.1035 30.8039 31.3001 30.2895 31.7161 29.8697C32.2116 29.3667 32.9264 29.1663 33.6033 29.3403Z" />
                  <path d="M14.3269 9.13743C14.2096 9.1639 14.0395 9.23575 13.9487 9.29627C13.7596 9.42863 13.5629 9.70849 13.5024 9.92784C13.4079 10.2833 13.5667 10.7826 13.8541 11.0284C14.168 11.3007 13.2755 11.278 24.243 11.278H34.1365L34.3293 11.1872C34.7794 10.9792 35.0366 10.4913 34.9458 10.0186C34.8512 9.51562 34.5298 9.2055 34.0117 9.1223C33.6599 9.06179 14.5992 9.0807 14.3269 9.13743Z" />
                  <path d="M17.0996 15.1998C16.8689 15.283 16.5625 15.5931 16.4831 15.8314C16.4037 16.0658 16.3999 16.3571 16.4793 16.584C16.5625 16.826 16.8235 17.1096 17.0693 17.2193L17.2698 17.3101H24.2284H31.1871L31.4027 17.2042C31.6372 17.0907 31.8036 16.9243 31.9322 16.6747C32.0494 16.4516 32.0494 15.9789 31.936 15.7557C31.8036 15.5023 31.6712 15.3738 31.4254 15.2527L31.1947 15.1355L24.2322 15.1393C17.9921 15.1393 17.2508 15.1468 17.0996 15.1998Z" />
                </svg>
              </button>
              <div>{totalAmount}</div>
            </div>
            <div
              className={classes.menuBar}
              onClick={() => setShowMenu((prevShow) => !prevShow)}
            >
              <div>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
        </div>
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
