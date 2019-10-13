import React, { useState } from "react";

export const dronePosition = React.createContext({
  dimensions: {},
  setDimensions: () => {}
});

export const DronePositionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null
  });
  let set = (height, width) => {
    setDimensions({ height, width });
  };
  return (
    <dronePosition.Provider value={{ dimensions, setDimensions: set }}>
      {children}
    </dronePosition.Provider>
  );
};

export default dronePosition;
