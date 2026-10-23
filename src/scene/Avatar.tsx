import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Group } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export type AvatarProps = {
  modelPath?: string;
  tint?: string;
  scale?: number;
  position?: [number, number, number];
  animate?: boolean;
  spinToken?: number;
};

type PlaceholderProps = {
  tint: string;
  scale: number;
  position: [number, number, number];
  animate: boolean;
  spinToken: number;
};

function PlaceholderAvatar({ tint, scale, position, animate, spinToken }: PlaceholderProps) {
  const character = useRef<Group>(null);
  const leftArm = useRef<Group>(null);
  const rightArm = useRef<Group>(null);
  const spin = useRef({ active: false, elapsed: 0, start: 0 });
  const restingRotation = useRef(0);

  useEffect(() => {
    if (spinToken === 0) return;
    spin.current = {
      active: true,
      elapsed: 0,
      start: character.current?.rotation.y ?? restingRotation.current,
    };
  }, [spinToken]);

  useFrame((state, delta) => {
    if (character.current && animate) {
      character.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.025;
      if (spin.current.active) {
        spin.current.elapsed += delta;
        const progress = Math.min(spin.current.elapsed / 2.4, 1);
        character.current.rotation.y = spin.current.start + Math.PI * 2 * progress;
        if (progress === 1) {
          restingRotation.current = spin.current.start % (Math.PI * 2);
          spin.current.active = false;
        }
      } else {
        character.current.rotation.y = restingRotation.current + Math.sin(state.clock.elapsedTime * 0.32) * 0.035 + state.pointer.x * 0.055;
      }
    }
    if (animate && leftArm.current && rightArm.current) {
      const swing = Math.sin(state.clock.elapsedTime * 0.85) * 0.025;
      leftArm.current.rotation.z = -0.035 + swing;
      rightArm.current.rotation.z = 0.035 - swing;
    }
  });

  return (
    <group ref={character} position={position} scale={scale}>
      {/* Legs and shoes */}
      <mesh position={[-0.18, -0.91, 0]} castShadow>
        <capsuleGeometry args={[0.16, 0.64, 8, 14]} />
        <meshStandardMaterial color="#1b3551" roughness={0.53} metalness={0.2} />
      </mesh>
      <mesh position={[0.18, -0.91, 0]} castShadow>
        <capsuleGeometry args={[0.16, 0.64, 8, 14]} />
        <meshStandardMaterial color="#213d5b" roughness={0.53} metalness={0.2} />
      </mesh>
      <mesh position={[-0.2, -1.33, 0.08]} castShadow>
        <sphereGeometry args={[0.2, 20, 16]} />
        <meshStandardMaterial color="#15283d" roughness={0.45} metalness={0.25} />
      </mesh>
      <mesh position={[0.2, -1.33, 0.08]} castShadow>
        <sphereGeometry args={[0.2, 20, 16]} />
        <meshStandardMaterial color="#15283d" roughness={0.45} metalness={0.25} />
      </mesh>
      <mesh position={[-0.2, -1.24, 0.23]}>
        <boxGeometry args={[0.2, 0.025, 0.02]} />
        <meshBasicMaterial color={tint} transparent opacity={0.9} />
      </mesh>
      <mesh position={[0.2, -1.24, 0.23]}>
        <boxGeometry args={[0.2, 0.025, 0.02]} />
        <meshBasicMaterial color={tint} transparent opacity={0.9} />
      </mesh>

      {/* Jacket */}
      <mesh position={[0, -0.05, 0]} castShadow>
        <capsuleGeometry args={[0.38, 0.53, 8, 20]} />
        <meshStandardMaterial color="#1d344c" roughness={0.58} metalness={0.15} />
      </mesh>
      <mesh position={[0, -0.07, 0.335]}>
        <boxGeometry args={[0.035, 0.55, 0.018]} />
        <meshBasicMaterial color={tint} transparent opacity={0.72} />
      </mesh>
      <mesh position={[0, -0.48, 0.02]}>
        <torusGeometry args={[0.35, 0.018, 8, 32]} />
        <meshBasicMaterial color={tint} transparent opacity={0.78} />
      </mesh>
      <mesh position={[-0.2, -0.16, 0.32]}>
        <sphereGeometry args={[0.04, 10, 10]} />
        <meshBasicMaterial color="#a9e8ff" />
      </mesh>

      {/* Arms pivot gently at the shoulders */}
      <group ref={leftArm} position={[-0.43, 0.24, 0]}>
        <mesh position={[-0.09, -0.34, 0]} castShadow>
          <capsuleGeometry args={[0.13, 0.49, 8, 16]} />
          <meshStandardMaterial color="#274765" roughness={0.55} metalness={0.16} />
        </mesh>
        <mesh position={[-0.1, -0.69, 0.015]} castShadow>
          <sphereGeometry args={[0.125, 18, 14]} />
          <meshStandardMaterial color="#d8a17d" roughness={0.72} />
        </mesh>
        <mesh position={[-0.09, -0.34, 0.128]}>
          <boxGeometry args={[0.19, 0.035, 0.018]} />
          <meshBasicMaterial color={tint} transparent opacity={0.75} />
        </mesh>
      </group>
      <group ref={rightArm} position={[0.43, 0.24, 0]}>
        <mesh position={[0.09, -0.34, 0]} castShadow>
          <capsuleGeometry args={[0.13, 0.49, 8, 16]} />
          <meshStandardMaterial color="#274765" roughness={0.55} metalness={0.16} />
        </mesh>
        <mesh position={[0.1, -0.69, 0.015]} castShadow>
          <sphereGeometry args={[0.125, 18, 14]} />
          <meshStandardMaterial color="#d8a17d" roughness={0.72} />
        </mesh>
        <mesh position={[0.09, -0.34, 0.128]}>
          <boxGeometry args={[0.19, 0.035, 0.018]} />
          <meshBasicMaterial color={tint} transparent opacity={0.75} />
        </mesh>
      </group>

      {/* Neck, face and swept hair */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.15, 0.26, 20]} />
        <meshStandardMaterial color="#d5a07e" roughness={0.72} />
      </mesh>
      <mesh position={[0, 0.83, 0.02]} castShadow>
        <sphereGeometry args={[0.39, 32, 28]} />
        <meshStandardMaterial color="#e5b18d" roughness={0.74} />
      </mesh>
      <mesh position={[-0.35, 0.79, 0.035]}>
        <sphereGeometry args={[0.085, 14, 12]} />
        <meshStandardMaterial color="#dca986" roughness={0.74} />
      </mesh>
      <mesh position={[0.35, 0.79, 0.035]}>
        <sphereGeometry args={[0.085, 14, 12]} />
        <meshStandardMaterial color="#dca986" roughness={0.74} />
      </mesh>
      <mesh position={[0, 1.09, 0.055]} castShadow>
        <sphereGeometry args={[0.405, 28, 20]} />
        <meshStandardMaterial color="#302b32" roughness={0.82} />
      </mesh>
      <mesh position={[-0.12, 1.2, 0.13]} rotation={[0.1, 0, 0.17]} castShadow>
        <sphereGeometry args={[0.285, 22, 16]} />
        <meshStandardMaterial color="#3a3034" roughness={0.82} />
      </mesh>
      <mesh position={[0, 1.13, 0.24]} rotation={[0.08, 0, -0.07]}>
        <sphereGeometry args={[0.21, 20, 12]} />
        <meshStandardMaterial color="#403439" roughness={0.85} />
      </mesh>
      <mesh position={[-0.14, 0.84, 0.37]}>
        <sphereGeometry args={[0.075, 16, 14]} />
        <meshStandardMaterial color="#f6f3ed" roughness={0.38} />
      </mesh>
      <mesh position={[0.14, 0.84, 0.37]}>
        <sphereGeometry args={[0.075, 16, 14]} />
        <meshStandardMaterial color="#f6f3ed" roughness={0.38} />
      </mesh>
      <mesh position={[-0.14, 0.84, 0.432]}>
        <sphereGeometry args={[0.041, 16, 14]} />
        <meshStandardMaterial color="#382b30" roughness={0.4} />
      </mesh>
      <mesh position={[0.14, 0.84, 0.432]}>
        <sphereGeometry args={[0.041, 16, 14]} />
        <meshStandardMaterial color="#382b30" roughness={0.4} />
      </mesh>
      <mesh position={[-0.14, 0.96, 0.395]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.13, 0.025, 0.025]} />
        <meshStandardMaterial color="#4a3438" roughness={0.7} />
      </mesh>
      <mesh position={[0.14, 0.96, 0.395]} rotation={[0, 0, -0.1]}>
        <boxGeometry args={[0.13, 0.025, 0.025]} />
        <meshStandardMaterial color="#4a3438" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.68, 0.386]}>
        <sphereGeometry args={[0.035, 12, 10]} />
        <meshStandardMaterial color="#cb9075" roughness={0.74} />
      </mesh>

      {/* Holographic scan rings */}
      {[-0.85, -1.12].map((height, index) => (
        <mesh key={height} position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[index === 0 ? 0.34 : 0.28, 0.008, 6, 42]} />
          <meshBasicMaterial color={tint} transparent opacity={0.54} />
        </mesh>
      ))}
    </group>
  );
}

type LoadedModelProps = Omit<PlaceholderProps, "tint" | "spinToken"> & {
  modelPath: string;
};

function LoadedModel({ modelPath, scale, position, animate }: LoadedModelProps) {
  const gltf = useLoader(GLTFLoader, modelPath);
  const model = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const root = useRef<Group>(null);
  useFrame((state) => {
    if (!root.current || !animate) return;
    root.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.75) * 0.025;
    root.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.035 + state.pointer.x * 0.05;
  });
  return <primitive ref={root} object={model} position={position} scale={scale} />;
}

export function Avatar({
  modelPath,
  tint = "#54dfff",
  scale = 1,
  position = [0, -0.2, 0],
  animate = true,
  spinToken = 0,
}: AvatarProps) {
  if (modelPath) {
    return <LoadedModel modelPath={modelPath} scale={scale} position={position} animate={animate} />;
  }
  return <PlaceholderAvatar tint={tint} scale={scale} position={position} animate={animate} spinToken={spinToken} />;
}
