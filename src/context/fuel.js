import React, { useState, useEffect } from "react";

const fuelContext = React.createContext({
  fuel: null,
  move: () => {},
  resetFuel: () => {}
});

export const FuelProvider = ({ children }) => {
  const [fuel, setFuel] = useState(100);
  let move = () => setFuel(prevFuel => prevFuel - 1);
  let resetFuel = () => setFuel(100);
  return (
    <fuelContext.Provider value={{ fuel, move, resetFuel }}>
      {children}
    </fuelContext.Provider>
  );
};

export default fuelContext;
