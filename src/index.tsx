import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Test1 } from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Canvas } from "react-three-fiber";
import { Environment } from "@react-three/drei";
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <>
    <Canvas>
      <Test1 />
      <Environment preset="night" background />
    </Canvas>
    <h3>
      scroll to zoom, click and move for orbit, or move mouse to move objects
    </h3>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
