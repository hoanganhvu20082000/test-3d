import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas
      camera={{
      position: [3, 3, 3], // Vị trí camera
      }}
    >
    <color attach="background" args={["#333333"]}/>
      <OrbitControls /> {/* Điều khiển góc nhìn */}
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} /> {/* Hộp lập phương */}
        <meshNormalMaterial /> {/* Hiệu ứng màu cầu vồng */}
      </mesh>
    </Canvas>
  );
}

export default App;
