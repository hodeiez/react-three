import React from "react";
import { useState, useEffect } from "react";
import { Text, OrbitControls, Sky, Stars } from "@react-three/drei";
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
  const myText = React.useRef() as any;
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
      <Sky
        distance={3000}
        turbidity={10}
        rayleigh={6.2}
        mieCoefficient={0.053}
        mieDirectionalG={0.45}
        inclination={0.5}
        azimuth={0.27}
      />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={10}
        fade
        speed={1}
      />
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
        key={undefined}
        attach={undefined}
        args={undefined}
        onUpdate={undefined}
        material={undefined}
        clear={undefined}
        geometry={undefined}
        raycast={undefined}
        userData={undefined}
        visible={undefined}
        type={undefined}
        id={undefined}
        uuid={undefined}
        name={undefined}
        parent={undefined}
        modelViewMatrix={undefined}
        normalMatrix={undefined}
        matrixWorld={undefined}
        matrixAutoUpdate={undefined}
        matrixWorldNeedsUpdate={undefined}
        castShadow={undefined}
        receiveShadow={undefined}
        frustumCulled={undefined}
        renderOrder={undefined}
        animations={undefined}
        customDepthMaterial={undefined}
        customDistanceMaterial={undefined}
        isObject3D={undefined}
        onBeforeRender={undefined}
        onAfterRender={undefined}
        applyMatrix4={undefined}
        applyQuaternion={undefined}
        setRotationFromAxisAngle={undefined}
        setRotationFromEuler={undefined}
        setRotationFromMatrix={undefined}
        setRotationFromQuaternion={undefined}
        rotateOnAxis={undefined}
        rotateOnWorldAxis={undefined}
        rotateX={undefined}
        rotateY={undefined}
        rotateZ={undefined}
        translateOnAxis={undefined}
        translateX={undefined}
        translateY={undefined}
        translateZ={undefined}
        localToWorld={undefined}
        worldToLocal={undefined}
        lookAt={undefined}
        add={undefined}
        remove={undefined}
        removeFromParent={undefined}
        getObjectById={undefined}
        getObjectByName={undefined}
        getObjectByProperty={undefined}
        getWorldPosition={undefined}
        getWorldQuaternion={undefined}
        getWorldScale={undefined}
        getWorldDirection={undefined}
        traverse={undefined}
        traverseVisible={undefined}
        traverseAncestors={undefined}
        updateMatrix={undefined}
        updateMatrixWorld={undefined}
        updateWorldMatrix={undefined}
        toJSON={undefined}
        clone={undefined}
        copy={undefined}
        addEventListener={undefined}
        hasEventListener={undefined}
        removeEventListener={undefined}
        dispatchEvent={undefined}
        morphTargetInfluences={undefined}
        morphTargetDictionary={undefined}
        isMesh={true}
        updateMorphTargets={undefined}
      >
        <meshBasicMaterial side={2} color={"red"} transparent opacity={0.7} />
        hodei
      </Text>
    </>
  );
}
