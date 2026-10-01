import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'
import { prefersReducedMotion } from '../lib/gsapSetup'
import useCinematic3D from './useCinematic3D'
import MountainFallback from './MountainFallback'

function WearableBand({ spin }) {
  const group = useRef()
  useFrame((_, delta) => {
    if (spin && group.current) group.current.rotation.y += 0.15 * delta
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={group}>
        <mesh rotation={[Math.PI / 2.1, 0.1, 0]}>
          <torusGeometry args={[1.15, 0.13, 24, 72]} />
          <meshStandardMaterial color="#2c2824" metalness={0.55} roughness={0.32} />
        </mesh>
        <mesh position={[0, 0.18, 1.12]}>
          <boxGeometry args={[0.46, 0.2, 0.3]} />
          <meshStandardMaterial color="#1E1B18" emissive="#E8A33D" emissiveIntensity={0.55} />
        </mesh>
      </group>
    </Float>
  )
}

function MountainSilhouette() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(-7, -2)
    for (let i = 0; i <= 56; i += 1) {
      const x = -7 + (14 * i) / 56
      const y = Math.sin(i * 0.42) * 1.05 + Math.abs(Math.sin(i * 0.18)) * 1.35 - 0.1
      shape.lineTo(x, y)
    }
    shape.lineTo(7, -2)
    shape.closePath()
    return new THREE.ShapeGeometry(shape)
  }, [])

  return (
    <mesh geometry={geometry} position={[0, -0.55, -2.6]}>
      <meshStandardMaterial color="#3D5A4E" transparent opacity={0.38} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Scene({ reduced }) {
  return (
    <>
      <ambientLight intensity={0.85} color="#FFF1D6" />
      <directionalLight position={[4, 5, 3]} intensity={1.35} color="#E8A33D" />
      <directionalLight position={[-3, 1, 2]} intensity={0.35} color="#7BA8C7" />
      <MountainSilhouette />
      <WearableBand spin={!reduced} />
    </>
  )
}

export default function HeroScene() {
  const enable3D = useCinematic3D()
  const reduced = prefersReducedMotion()

  if (!enable3D) {
    return <MountainFallback label="Wearable on the ridge" />
  }

  return (
    <motion.div
      className="h-[420px] w-full md:h-[560px]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <Suspense fallback={<MountainFallback label="Loading the band" />}>
        <Canvas camera={{ position: [0, 0.4, 5.2], fov: 42 }} gl={{ alpha: true, antialias: true }}>
          <Scene reduced={reduced} />
        </Canvas>
      </Suspense>
    </motion.div>
  )
}
