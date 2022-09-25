import { useState, useEffect } from "react";
import "./App.css";
const scale = (minOut, maxOut, min, max, val) => {
  return ((maxOut - minOut) * (val - min)) / (max - min) + minOut;
};
export function Test1() {
  const [rotation, setRotation] = useState(0);
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
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
  const rotate = (e) => {
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
    </>
  );
}
