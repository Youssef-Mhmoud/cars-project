import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartActive, setCartActive] = useState(false);

  const [carList, setCarList] = useState(
    JSON.parse(localStorage.getItem("cars"))
  );

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(carList));
  }, [carList]);

  const increaseCarCart = (carDetails) => {
    const carExist = carList.find((car) => car.name === carDetails.name);

    if (carExist) {
      setCarList((prevCars) =>
        prevCars.map((car) =>
          car.name === carDetails.name
            ? { ...carExist, quantity: carExist.quantity + 1 }
            : { ...car }
        )
      );
    } else {
      setCarList((prevCars) => [...prevCars, { ...carDetails, quantity: 1 }]);
    }
  };

  const decreaseCarCart = (car) => {
    const { name } = car;

    const carExist = carList.find((car) => car.name === name);

    if (!carExist) return;

    if (carExist.quantity === 1) {
      setCarList((prevCar) => {
        return prevCar.filter((c) => c.name !== name);
      });
    } else {
      setCarList((prevCar) => {
        return prevCar.map((car) =>
          car.name === name
            ? { ...carExist, quantity: carExist.quantity-- }
            : { ...car }
        );
      });
    }
  };

  const removeCarCart = (c) => {
    const carExist = carList.find((car) => car.name === c.name);

    if (!carExist) return;

    if (carExist) {
      setCarList((prevCar) => {
        return prevCar.filter((car) => car.name !== c.name);
      });
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartActive,
        setCartActive,
        carList,
        setCarList,
        increaseCarCart,
        decreaseCarCart,
        removeCarCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
