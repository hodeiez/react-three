import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import React, { useState } from "react";

export const TheThing = (props: any) => {
  const [dist, setDist] = useState(0.5);
  const wabble = () => {
    setDist(1);
  };

  return (
    <Icosahedron args={[1, 15]} {...props} scale={3} onClick={wabble}>
      <MeshDistortMaterial
        speed={1}
        distort={dist}
        radius={0.5}
        color="#2f2f2f"
      ></MeshDistortMaterial>
    </Icosahedron>
  );
};
