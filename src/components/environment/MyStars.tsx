import { Stars } from "@react-three/drei";
import React from "react";

export const MyStars = () => {
  return (
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={10}
      fade
      speed={1}
    />
  );
};
