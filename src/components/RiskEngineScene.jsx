import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import useCinematic3D from './useCinematic3D'
import MountainFallback from './MountainFallback'

const NODES = [
  { label: 'Personal', radius: 2.1, speed: 0.35 },
  { label: 'Peer', radius: 2.55, speed: 0.28 },
  { label: 'Cohort', radius: 3.0, speed: 0.22 },
  { label: 'Historical', radius: 3.4, speed: 0.16 },
]

function OrbitNode({ label, radius, speed, index }) {
  const meshRef = useRef()
  const lineRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed + index * 1.2
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    const y = Math.sin(t * 1.4) * 0.25
    if (meshRef.current) meshRef.current.position.set(x, y, z)
    const geo = lineRef.current?.geometry
    const attr = geo?.attributes?.position
    if (attr) {
      attr.setXYZ(1, x, y, z)
      attr.needsUpdate = true
    }
  })

  return (
    <group>
      <line ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array([0, 0, 0, radius, 0, 0]), 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#E8A33D" transparent opacity={0.45} />
      </line>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.16, 24, 24]} />
        <meshStandardMaterial color="#7BA8C7" emissive="#7BA8C7" emissiveIntensity={0.4} />
        <Html distanceFactor={10} className="pointer-events-none">
          <span className="whitespace-nowrap rounded-full bg-warm-white/90 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-charcoal shadow-sm">
            {label}
          </span>
        </Html>
      </mesh>
    </group>
  )
}

function Engine({ hover }) {
  const core = useRef()
  const group = useRef()

  useFrame((_, delta) => {
    if (core.current) core.current.rotation.y += delta * 0.4
    if (group.current) {
      group.current.rotation.y += hover ? delta * 0.35 : delta * 0.08
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, hover ? 0.25 : 0.08, 0.05)
    }
  })

  return (
    <group ref={group}>
      <mesh ref={core}>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshStandardMaterial color="#E8A33D" emissive="#E8A33D" emissiveIntensity={0.9} />
      </mesh>
      {NODES.map((node, i) => (
        <OrbitNode key={node.label} {...node} index={i} />
      ))}
    </group>
  )
}

export default function RiskEngineScene() {
  const enable3D = useCinematic3D()
  const [hover, setHover] = useState(false)

  if (!enable3D) {
    return <MountainFallback label="Multi-Baseline Risk Engine" />
  }

  return (
    <div
      className="h-[460px] w-full"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <Suspense fallback={<MountainFallback label="Risk engine" />}>
        <Canvas camera={{ position: [0, 1.6, 7.2], fov: 42 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.8} color="#FFF6E8" />
          <pointLight position={[2, 3, 4]} intensity={1.4} color="#E8A33D" />
          <Engine hover={hover} />
        </Canvas>
      </Suspense>
    </div>
  )
}
