import React, { useContext } from "react";
import { GiRocket } from "react-icons/gi";
import fuelContext from "../context/fuel";
import dronPositionContext from "../context/dronePosition";

export default function GridItem({ drone }) {
  const { fuel } = useContext(fuelContext);
  const { measuredRef } = useContext(dronPositionContext);
  const color = fuel ? "orange" : "grey";
  if (drone) {
    return (
      <div className="gridItem drone" ref={measuredRef}>
        <GiRocket className="droneIcon" style={{ color }} />
      </div>
    );
  }
  return <div className="gridItem" />;
}
