import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Grid from "./components/Grid";
import Panel from "./components/Panel";
import { FuelProvider } from "./context/fuel";
import { DronePositionProvider } from "./context/dronePosition";

function App() {
  return (
    <FuelProvider>
      <DronePositionProvider>
        <div className="App">
          <Grid />
          <Panel />
        </div>
      </DronePositionProvider>
    </FuelProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
