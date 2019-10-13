import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import fuelContext from "../context/fuel";
import GridItem from "./GridItem";

export default function Grid() {
  const { innerWidth, innerHeight } = useWindowSize();
  const [array, setArray] = useState([]);
  const [dronPos, setDronPos] = useState({ row: 0, column: 0 });
  const { row, column } = dronPos;
  const { fuel, move, resetFuel } = useContext(fuelContext);
  const upHandler = ({ key }) => {
    if (fuel) {
      if (key === "ArrowUp") {
        if (row) {
          move();
          const copyArr = [...array];
          copyArr[row - 1][column] = { value: 1 };
          copyArr[row][column] = { value: 0 };
          setArray(copyArr);
          setDronPos({ row: row - 1, column });
        }
      }
      if (key === "ArrowDown") {
        if (array.length - 1 !== row) {
          move();
          const copyArr = [...array];
          copyArr[row + 1][column] = { value: 1 };
          copyArr[row][column] = { value: 0 };
          setArray(copyArr);
          setDronPos({ row: row + 1, column });
        }
      }
      if (key === "ArrowLeft") {
        if (column) {
          move();
          const copyArr = [...array];
          copyArr[row][column - 1] = { value: 1 };
          copyArr[row][column] = { value: 0 };
          setArray(copyArr);
          setDronPos({ row, column: column - 1 });
        }
      }
      if (key === "ArrowRight") {
        if (array[row].length - 1 !== column) {
          move();
          const copyArr = [...array];
          copyArr[row][column + 1] = { value: 1 };
          copyArr[row][column] = { value: 0 };
          setArray(copyArr);
          setDronPos({ row, column: column + 1 });
        }
      }
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  }, [row, column]);
  useEffect(() => {
    let calc = () => {
      const maxRow = Math.floor(innerHeight / 50);
      const maxCol = Math.floor(innerWidth / 50);
      if (maxRow && maxCol) {
        const row = Math.floor(maxRow / 2);
        const column = Math.floor(maxCol / 2);
        const res = new Array(maxRow).fill([]).map(_ => {
          return new Array(maxCol).fill({
            value: 0
          });
        });
        res[row][column] = {
          value: 1
        };
        setDronPos({ row, column });
        setArray(res);
      }
    };
    resetFuel();
    calc();
  }, [innerWidth, innerHeight]);

  return (
    <div className="grid">
      {array.map(item => {
        return (
          <div
            className="gridRow"
            key={`${(~~(Math.random() * 1e8)).toString(16)}`}
          >
            {item.map(subItem => {
              return (
                <GridItem
                  drone={!!subItem.value}
                  key={`${(~~(Math.random() * 1e8)).toString(16)}`}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
