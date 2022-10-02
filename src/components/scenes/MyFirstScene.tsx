import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./../../App.css";

import { MyText } from "components/models/MyText";
import { MyStars } from "components/environment/MyStars";
import { MySky } from "components/environment/MySky";

export function MyFirstScene() {
  const time = new Date().getHours();
  const val = {
    rayleigh: time > 20 || time < 7 ? 6.2 : 0.6,
    mieCoefficient: 0.009,
    mieDirectionalG: 0.01,
  };
  return (
    <>
      <OrbitControls />
      <MySky
        rayleigh={val.rayleigh}
        mieCoefficient={val.mieCoefficient}
        mieDirectionalG={val.mieDirectionalG}
      />
      <MyStars />
      <MyText text="hodei" />
    </>
  );
}
