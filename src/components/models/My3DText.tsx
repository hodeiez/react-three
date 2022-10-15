import { Float, MeshDistortMaterial, Text3D } from "@react-three/drei";
import React from "react";
let font = require("../../fonts/Wizard_Regular.json");
export const My3DText = (props: any) => {
  return (
    <Float floatIntensity={5} speed={4} {...props}>
      <Text3D
        //   ref={undefined}
        scale={10}
        maxWidth={200}
        lineHeight={40}
        letterSpacing={0.2}
        textAlign={"left"}
        anchorX="center"
        anchorY="middle"
        font={font}
        bevelEnabled
        bevelSize={0.05}
        {...props}
      >
        {props.text}

        <MeshDistortMaterial
          color="#6b2b6b"
          speed={1}
          distort={0.2}
          radius={0.5}
        />
        {/* <meshStandardMaterial color={"red"} transparent opacity={0.7} /> */}
      </Text3D>
    </Float>
  );
};
