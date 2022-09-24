import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import "./App.css";
const scale = (minOut, maxOut, min, max, val) => {
  return ((maxOut - minOut) * (val - min)) / (max - min) + minOut;
};
function App() {
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

  return (
    <div id="canvas-container">
      <h2 style={{ textAlign: "center" }}>
        move the mouse then move and check the changes 👇🏼
      </h2>
      <div>
        <h4 style={{ textAlign: "center", color: "gray" }}>
          coords x: {globalCoords.x}
        </h4>
        <h4 style={{ textAlign: "center", color: "gray" }}>
          coords y: {globalCoords.y}
        </h4>
      </div>

      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.05} />
        <directionalLight
          color="white"
          position={[
            globalCoords.x / 100,
            globalCoords.x / 100,
            globalCoords.y / 100,
          ]}
        />
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[2, -1, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry args={[1, 32, 16]} />
          <meshStandardMaterial color="yellow" transparent />
          {/* <circleGeometry args={[2, 10]} />
          <meshStandardMaterial /> */}
        </mesh>
      </Canvas>
      <Canvas style={{ background: "black" }}>
        <ambientLight intensity={0.05} />
        <directionalLight
          color="white"
          position={[
            globalCoords.x * 100,
            globalCoords.x * 100,
            globalCoords.y * 100,
          ]}
        />
        <mesh
          visible
          userData={{ hello: "world" }}
          position={[2, -1, 2]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <sphereGeometry
            args={[1, globalCoords.y / 100, globalCoords.x / 100]}
          />
          <meshStandardMaterial color="yellow" transparent />
          {/* <circleGeometry args={[2, 10]} />
          <meshStandardMaterial /> */}
        </mesh>
      </Canvas>
    </div>
  );
}
export default App;
