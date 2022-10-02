import { Sky } from "@react-three/drei";
import React from "react";
type MySkyProps = {
  distance?: number;
  turbidity?: number;
  rayleigh?: number;
  mieCoefficient?: number;
  mieDirectionalG?: number;
  inclination?: number;
  azimuth?: number;
};
const defaultProps = {
  distance: 3000,
  turbidity: 10,
  rayleigh: 6.2,
  mieCoefficient: 0.053,
  mieDirectionalG: 0.45,
  inclination: 0.5,
  azimuth: 0.27,
};
export const MySky = (props: MySkyProps) => {
  return <Sky {...props} />;
};
MySky.defaultProps = { ...defaultProps };
