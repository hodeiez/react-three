import React from "react";
import { OrbitControls } from "@react-three/drei";
import "./../../App.css";

import { MyText } from "components/models/MyText";
import { MyStars } from "components/environment/MyStars";
import { MySky } from "components/environment/MySky";

export function MyFirstScene() {
  return (
    <>
      <OrbitControls />
      <MySky />
      <MyStars />
      <MyText text="hodei" />
    </>
  );
}
