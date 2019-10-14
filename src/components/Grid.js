import React, {
  useEffect,
  useState,
  useContext,
  useLayoutEffect,
  useCallback
} from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import fuelContext from "../context/fuel";
import GridItem from "./GridItem";

export default function Grid() {
  const { innerWidth, innerHeight } = useWindowSize();
  const [array, setArray] = useState([]);
  const [dronPos, setDronPos] = useState({ row: 0, column: 0 });
  const { row, column } = dronPos;
  const { fuel, move, resetFuel } = useContext(fuelContext);
  const upHandler = useCallback(
    ({ key }, row, column) => {
      console.log("uphandler");
      if (fuel) {
        switch (key) {
          case "ArrowUp": {
            if (row) {
              move(fuel - 1);
              array[row - 1][column] = { value: 1 };
              array[row][column] = { value: 0 };
              setDronPos({ row: row - 1, column });
            }
            break;
          }
          case "ArrowDown": {
            if (array.length - 1 !== row) {
              move(fuel - 1);
              array[row + 1][column] = { value: 1 };
              array[row][column] = { value: 0 };
              setDronPos({ row: row + 1, column });
            }
            break;
          }
          case "ArrowLeft": {
            if (column) {
              move(fuel - 1);
              //const copyArr = [...array];
              array[row][column - 1] = { value: 1 };
              array[row][column] = { value: 0 };
              setDronPos({ row, column: column - 1 });
            }
            break;
          }
          case "ArrowRight": {
            if (array[row].length - 1 !== column) {
              move(fuel - 1);
              array[row][column + 1] = { value: 1 };
              array[row][column] = { value: 0 };
              setDronPos({ row, column: column + 1 });
            }
            break;
          }
          default: {
            break;
          }
        }
      }
    },
    [array, move, fuel]
  );

  const handle = useCallback(e => upHandler(e, row, column), [
    upHandler,
    row,
    column
  ]);
  useLayoutEffect(() => {
    window.addEventListener("keyup", handle);
    return () => {
      window.removeEventListener("keyup", handle);
    };
  }, [handle]);

  let calc = (height, width) => {
    if (height && width) {
      const maxRow = Math.floor(height / 50);
      const maxCol = Math.floor(width / 50);
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
    }
  };

  const calcArray = useCallback(() => {
    calc(innerHeight, innerWidth);
  }, [innerHeight, innerWidth]);
  useEffect(() => {
    calcArray();
    resetFuel();
  }, [calcArray]);

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
