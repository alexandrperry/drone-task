<<<<<<< HEAD
import React, { useState, useCallback } from "react";
=======
import React, { useState ,useCallback} from "react";
>>>>>>> origin/master

export const dronePosition = React.createContext({
  dimensions: {},
  measuredRef: () => {}
});

export const DronePositionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    height: null,
    width: null
  });
  const measuredRef = useCallback(node => {
    if (node !== null) {
      const height = node.getBoundingClientRect().top;
      const width = node.getBoundingClientRect().left;
      setDimensions({ height, width });
    }
  }, []);

  return (
    <dronePosition.Provider value={{ dimensions, measuredRef }}>
      {children}
    </dronePosition.Provider>
  );
};

export default dronePosition;
