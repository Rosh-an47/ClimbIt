import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import useCinematic3D from './useCinematic3D'
import MountainFallback from './MountainFallback'

function Range() {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(-8, -2.2)
    for (let i = 0; i <= 64; i += 1) {
      const x = -8 + (16 * i) / 64
      const y = Math.sin(i * 0.33) * 1.2 + Math.abs(Math.sin(i * 0.11)) * 1.6
      shape.lineTo(x, y)
    }
    shape.lineTo(8, -2.2)
    shape.closePath()
    return new THREE.ShapeGeometry(shape)
  }, [])

  return (
    <mesh geometry={geometry} position={[0, -0.4, -1]}>
      <meshStandardMaterial color="#3D5A4E" transparent opacity={0.45} side={THREE.DoubleSide} />
    </mesh>
  )
}

function TrekkerPath() {
  const dot = useRef()
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 40; i += 1) {
      const t = i / 40
      pts.push(new THREE.Vector3(-3 + t * 5.2, -1.4 + t * 2.1, 0.4))
    }
    return pts
  }, [])

  useFrame(({ clock }) => {
    const t = (Math.sin(clock.elapsedTime * 0.35) + 1) / 2
    const i = t * (points.length - 1)
    const a = points[Math.floor(i)]
    const b = points[Math.min(Math.floor(i) + 1, points.length - 1)]
    const f = i - Math.floor(i)
    if (dot.current) {
      dot.current.position.lerpVectors(a, b, f)
    }
  })

  return (
    <>
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
          />
        </bufferGeometry>
        <lineDashedMaterial color="#E8A33D" dashSize={0.18} gapSize={0.12} />
      </line>
      <mesh ref={dot}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#E8A33D" emissive="#E8A33D" emissiveIntensity={0.8} />
      </mesh>
    </>
  )
}

export default function AltitudeMap() {
  const enable3D = useCinematic3D()
  if (!enable3D) return <MountainFallback label="Ascent path" />

  return (
    <div className="h-[360px] w-full overflow-hidden rounded-2xl border border-stone bg-warm-white">
      <Suspense fallback={<MountainFallback label="Altitude map" />}>
        <Canvas camera={{ position: [0, 0.8, 8], fov: 40 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.9} color="#FFF6E8" />
          <directionalLight position={[3, 4, 2]} intensity={1.1} color="#E8A33D" />
          <Range />
          <TrekkerPath />
        </Canvas>
      </Suspense>
    </div>
  )
}
