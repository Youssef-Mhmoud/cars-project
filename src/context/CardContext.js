import { createContext, useState } from "react";

export const CardContext = createContext();

const CardProvider = (props) => {
  const [cardActive, setCardActive] = useState(false);
  const [carList, setCarList] = useState([]);

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
    <CardContext.Provider
      value={{
        cardActive,
        setCardActive,
        carList,
        setCarList,
        increaseCarCart,
        decreaseCarCart,
        removeCarCart,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
