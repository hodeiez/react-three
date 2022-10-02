import { Text } from "@react-three/drei";
import React from "react";

export const MyText = (props: any) => {
  return (
    <Text
      ref={undefined}
      fontSize={12}
      maxWidth={200}
      lineHeight={40}
      letterSpacing={0.02}
      textAlign={"left"}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      characters="hodo"
      {...props}
    >
      {props.text}
      <meshBasicMaterial side={2} color={"red"} transparent opacity={0.7} />
    </Text>
  );
};
