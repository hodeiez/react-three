import React from "react";
import { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { useFrame } from "react-three-fiber";
const scale = (
  minOut: number,
  maxOut: number,
  min: number,
  max: number,
  val: number
) => {
  return ((maxOut - minOut) * (val - min)) / (max - min) + minOut;
};
export function Test1() {
  const myMesh = React.useRef() as any;

  useFrame(({ clock }) => {
    const a = Math.cos(clock.getElapsedTime());
    myMesh.current.rotation.x = a;
  });
  const [rotation, setRotation] = useState(0);
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setGlobalCoords({
        x: event.screenX,
        y: event.screenY,
      });
    };

    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);
  const rotate = (e: any) => {
    setRotation(0.4);
  };
  return (
    <>
      <ambientLight intensity={0.1} />
      <spotLight
        position={
          (scale(-5, 400, 0, window.innerWidth, globalCoords.x),
          scale(-1, 1, 0, window.innerHeight, globalCoords.y),
          -47)
        }
      />
      <mesh
        visible
        userData={{ hello: "world" }}
        position={[
          scale(5, -5, 0, window.innerWidth, globalCoords.x),
          scale(-1, 1, 0, window.innerHeight, globalCoords.y),
          -50,
        ]}
        rotation={[Math.PI / 2, 0, rotation]}
        onClick={rotate}
      >
        <sphereGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="red" transparent />
      </mesh>
      <mesh
        visible
        userData={{ hello: "world" }}
        position={[
          scale(-5, 5, 0, window.innerWidth, globalCoords.x),
          scale(-1, 1, 0, window.innerHeight, globalCoords.y),
          -50,
        ]}
        rotation={[Math.PI / 2, 0, 0.2]}
      >
        <boxGeometry args={[1, 32, 16]} />
        <meshStandardMaterial color="blue" transparent />
      </mesh>
      <mesh ref={myMesh}>
        <torusGeometry args={[26, 10, 200, 200]} />
        <meshStandardMaterial color="yellow" transparent />
      </mesh>
      <OrbitControls />
    </>
  );
}
