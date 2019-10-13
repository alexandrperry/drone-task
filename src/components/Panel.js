import React, { useContext } from "react";
import fuelContext from "../context/fuel";
import dronPositionContext from "../context/dronePosition";
import { IoIosFlame } from "react-icons/io";

export default function Panel() {
  const { fuel } = useContext(fuelContext);
  const { dimensions } = useContext(dronPositionContext);
  const { height, width } = dimensions;
  return (
    <div className="panel">
      <IoIosFlame className="fireIcon" />
      <span>{fuel}%</span>
      <br />
      {height !== null && (
        <React.Fragment>
          <span>H: {height}</span>
          <span>W: {width}</span>
        </React.Fragment>
      )}
    </div>
  );
}
