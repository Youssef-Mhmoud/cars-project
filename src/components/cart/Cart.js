import React, { useContext } from "react";
import classes from "./Cart.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const {
    cartActive,
    carList,
    setCarList,
    increaseCarCart,
    decreaseCarCart,
    removeCarCart,
    setCartActive,
  } = useContext(CartContext);

  const removeAllCars = () => {
    setCarList([]);
  };

  const closeCart = () => {
    setCartActive(false);
  };

  return (
    <div
      className={
        cartActive ? `${classes.cart} ${classes.active}` : classes.cart
      }
    >
      <div className={classes.closeCart} onClick={closeCart}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      {carList &&
        carList.map((car) => (
          <div className={classes.cartCar} key={car.name}>
            <div>
              <h3>{car.name}</h3>
              <p>{car.class}</p>
              <div className={classes.flexCart}>
                <button
                  className={classes.decrease}
                  onClick={() => decreaseCarCart({ name: car.name })}
                >
                  -
                </button>
                <span>{car.quantity}</span>
                <button
                  className={classes.increase}
                  onClick={() =>
                    increaseCarCart({
                      name: car.name,
                      class: car.class,
                      img: car.img,
                    })
                  }
                >
                  +
                </button>
                <button
                  className={classes.trash}
                  onClick={() => removeCarCart({ name: car.name })}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
            <img src={car.img} alt="" />
          </div>
        ))}
      {carList.length !== 0 ? (
        <button className={classes.clearAll} onClick={removeAllCars}>
          <span>Delete All</span>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      ) : (
        <p className={classes.empty}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
