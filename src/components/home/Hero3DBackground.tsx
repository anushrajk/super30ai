import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const orange = new THREE.Color().setHSL(0.05, 1, 0.48);
const graphite = new THREE.Color().setHSL(0, 0, 0.1);
const pearl = new THREE.Color().setHSL(0, 0, 0.92);

function OrbitalScene({ reduceMotion }: { reduceMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (reduceMotion) return;
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, [reduceMotion]);

  useFrame(({ clock }, rawDelta) => {
    const current = group.current;
    if (!current || reduceMotion) return;
    const delta = Math.min(rawDelta, 0.05);
    const easing = 1 - Math.exp(-2.4 * delta);
    current.rotation.y += (pointer.current.x * 0.12 - current.rotation.y) * easing;
    current.rotation.x += (-pointer.current.y * 0.07 - current.rotation.x) * easing;
    current.rotation.z = Math.sin(clock.elapsedTime * 0.16) * 0.035;
  });

  return (
    <group ref={group} rotation={[0.04, -0.08, 0]}>
      <Float speed={reduceMotion ? 0 : 0.35} rotationIntensity={0.08} floatIntensity={0.2}>
        <mesh position={[3.65, 0.65, -1.4]} rotation={[0.5, 0.2, 0.25]}>
          <torusGeometry args={[2.25, 0.075, 16, 120]} />
          <meshStandardMaterial color={orange} roughness={0.34} metalness={0.5} />
        </mesh>
        <mesh position={[3.65, 0.65, -1.4]} rotation={[1.1, -0.6, -0.2]}>
          <torusGeometry args={[1.55, 0.025, 12, 100]} />
          <meshStandardMaterial color={graphite} roughness={0.3} metalness={0.7} />
        </mesh>
      </Float>

      <Float speed={reduceMotion ? 0 : 0.28} rotationIntensity={0.12} floatIntensity={0.16}>
        <mesh position={[-4.05, -0.35, -1.7]} rotation={[0.25, 0.35, 0.15]}>
          <icosahedronGeometry args={[1.35, 1]} />
          <meshPhysicalMaterial
            color={pearl}
            roughness={0.16}
            metalness={0.05}
            transmission={0.22}
            transparent
            opacity={0.78}
          />
        </mesh>
        <mesh position={[-3.55, -0.08, -0.6]} rotation={[0.6, 0.15, 0.4]}>
          <torusGeometry args={[1.9, 0.035, 12, 100]} />
          <meshStandardMaterial color={graphite} roughness={0.4} metalness={0.55} />
        </mesh>
      </Float>

      <mesh position={[0, -2.55, -3.2]} rotation={[-Math.PI / 2.15, 0, 0]}>
        <torusGeometry args={[4.7, 0.018, 8, 140]} />
        <meshBasicMaterial color={orange} transparent opacity={0.38} />
      </mesh>
      <mesh position={[0, 2.8, -4]} rotation={[Math.PI / 2.4, 0.2, 0]}>
        <torusGeometry args={[5.5, 0.012, 8, 160]} />
        <meshBasicMaterial color={graphite} transparent opacity={0.22} />
      </mesh>
    </group>
  );
}

export function Hero3DBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(media.matches);
    updateMotion();
    media.addEventListener("change", updateMotion);

    try {
      const canvas = document.createElement("canvas");
      setSupportsWebGL(Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl")));
    } catch {
      setSupportsWebGL(false);
    }

    return () => media.removeEventListener("change", updateMotion);
  }, []);

  if (!supportsWebGL) return <div className="home-hero-v2__3d-fallback" />;

  return (
    <div className="home-hero-v2__3d" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 48 }}
        dpr={[1, 1.35]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1.45} />
        <directionalLight position={[3, 5, 7]} intensity={2.4} color={pearl} />
        <pointLight position={[-5, -2, 4]} intensity={9} distance={13} color={orange} />
        <OrbitalScene reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}