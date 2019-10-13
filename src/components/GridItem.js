import React, { useContext, useRef, useEffect, useCallback } from "react";
import { GiRocket } from "react-icons/gi";
import fuelContext from "../context/fuel";
import dronPositionContext from "../context/dronePosition";

export default function GridItem({ drone }) {
  const { fuel } = useContext(fuelContext);
  const { setDimensions } = useContext(dronPositionContext);
  const dronEl = useRef(null);
  const color = fuel ? "orange" : "grey";
  const set = useCallback(
    () => setDimensions(dronEl.current.offsetTop, dronEl.current.offsetLeft),
    [setDimensions]
  );
  useEffect(() => {
    dronEl.current && set();
  }, [set]);
  if (drone) {
    return (
      <div className="gridItem drone" ref={dronEl}>
        <GiRocket className="droneIcon" style={{ color }} />
      </div>
    );
  }
  return <div className="gridItem" />;
}
