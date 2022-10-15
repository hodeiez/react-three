import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./../../App.css";
import { MyStars } from "components/environment/MyStars";
import { MySky } from "components/environment/MySky";
import { TheThing } from "components/models/TheThing";
import { My3DText } from "components/models/My3DText";

export function MyFirstScene() {
  const time = new Date().getHours();
  const val = {
    rayleigh: time > 20 || time < 7 ? 6.2 : 0.6,
    mieCoefficient: 0.009,
    mieDirectionalG: 0.01,
  };
  return (
    <ambientLight intensity={0.1}>
      {/* <OrbitControls makeDefault position0={[0, 0, 1000]} /> */}
      <directionalLight position={[0, 0, 30]} intensity={0.5} />
      {/* <camera position={[0, 0, 0]}> */}
      <OrbitControls />
      <MySky
        rayleigh={val.rayleigh}
        mieCoefficient={val.mieCoefficient}
        mieDirectionalG={val.mieDirectionalG}
      />
      <MyStars />
      <TheThing position={[20, 0, 10]} />
      <TheThing position={[-20, 0, 10]} />
      {/* <MyText text="hodei" /> */}
      <My3DText text="hodei" position={[-5, 0, 0]} />
      {/* </camera> */}
    </ambientLight>
  );
}
