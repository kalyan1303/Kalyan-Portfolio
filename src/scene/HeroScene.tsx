import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BufferAttribute, BufferGeometry, Group } from "three";
import { Avatar } from "./Avatar";

function HolographicField() {
  const field = useRef<Group>(null);

  useFrame((state, delta) => {
    if (field.current) {
      field.current.rotation.y += delta * 0.035;
      field.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.018;
    }
  });

  return (
    <group ref={field} position={[0, 0.04, -0.5]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.22, 0.012, 8, 100]} />
        <meshBasicMaterial color="#48cfff" transparent opacity={0.38} />
      </mesh>
      <mesh position={[0, 0.1, -0.25]}>
        <sphereGeometry args={[0.84, 32, 26]} />
        <meshBasicMaterial color="#187cc2" transparent opacity={0.07} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Pedestal() {
  const ring = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.y -= delta * 0.12;
  });

  return (
    <group position={[0, -1.5, 0]}>
      <mesh position={[0, -0.08, 0]} receiveShadow>
        <cylinderGeometry args={[0.91, 1.02, 0.15, 64]} />
        <meshStandardMaterial color="#0b2945" roughness={0.35} metalness={0.7} />
      </mesh>
      <mesh position={[0, 0.004, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.87, 0.016, 8, 80]} />
        <meshBasicMaterial color="#4bd7ff" transparent opacity={0.88} />
      </mesh>
      <mesh position={[0, -0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.95, 0.008, 6, 80]} />
        <meshBasicMaterial color="#169fe1" transparent opacity={0.6} />
      </mesh>
      <group ref={ring} position={[0, 0.02, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.69, 0.005, 5, 60]} />
          <meshBasicMaterial color="#b2efff" transparent opacity={0.58} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.76, 0.005, 5, 60]} />
          <meshBasicMaterial color="#55e6dc" transparent opacity={0.44} />
        </mesh>
      </group>
    </group>
  );
}

function ParticleField() {
  const geometry = useMemo(() => {
    const positions = new Float32Array(154 * 3);
    for (let index = 0; index < 154; index += 1) {
      const radius = 2.0 + Math.random() * 3.1;
      const angle = Math.random() * Math.PI * 2;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 4.4;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 2.8;
    }
    const points = new BufferGeometry();
    points.setAttribute("position", new BufferAttribute(positions, 3));
    return points;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <points geometry={geometry}>
      <pointsMaterial color="#8adfff" size={0.015} transparent opacity={0.57} depthWrite={false} />
    </points>
  );
}

export default function HeroScene({ spinToken = 0 }: { spinToken?: number }) {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = host.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(Boolean(entry?.isIntersecting)),
      { threshold: 0.04 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-scene" ref={host}>
      <Canvas
        aria-label="Animated holographic scene with an original stylized placeholder character"
        dpr={[1, 1.25]}
        camera={{ position: [0, 0.02, 6.35], fov: 36 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        frameloop={visible ? "always" : "never"}
      >
        <ambientLight intensity={1.1} />
        <directionalLight color="#fff0e6" intensity={2.6} position={[3.2, 4.2, 4.5]} />
        <directionalLight color="#58cfff" intensity={1.65} position={[-3, 1.2, 1]} />
        <pointLight color="#16aaff" intensity={15} distance={8} position={[-1.4, -1.1, 1.1]} />
        <pointLight color="#29e4e1" intensity={5} distance={7} position={[2.4, -0.7, -1]} />
        <fog attach="fog" args={["#07192e", 7, 14]} />
        <gridHelper
          args={[14, 34, "#2187b4", "#123a5a"]}
          position={[0, -1.53, 0]}
          material-transparent
          material-opacity={0.37}
        />
        <ParticleField />
        <HolographicField />
        <Pedestal />
        <Avatar position={[0, -0.06, 0.16]} scale={0.96} spinToken={spinToken} />
      </Canvas>
    </div>
  );
}
