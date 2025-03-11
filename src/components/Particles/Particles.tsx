import { FC, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
	ChromaticAberration,
	EffectComposer,
	Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

interface ParticlesProps {
	className?: string
	count: number
	shape?: 'sphere' | 'box'
	scale?: number
}

export const Particles: FC<ParticlesProps> = ({ count, shape = 'box' }) => {
	const pointsRef = useRef<THREE.Points>(null)
	const groupRef = useRef<THREE.Group>(null)

	const particlesPosition = useMemo(() => {
		const positions = new Float32Array(count * 3)

		if (shape === 'sphere') {
			const distance = 1

			for (let i = 0; i < count; i++) {
				const theta = THREE.MathUtils.randFloatSpread(360)
				const phi = THREE.MathUtils.randFloatSpread(360)

				let x = distance * Math.sin(theta) * Math.cos(phi)
				let y = distance * Math.sin(theta) * Math.sin(phi)
				let z = distance * Math.cos(theta)

				positions.set([x, y, z], i * 3)
			}
		}

		if (shape === 'box') {
			for (let i = 0; i < count; i++) {
				let x = (Math.random() - 0.5) * 2
				let y = (Math.random() - 0.5) * 2
				let z = (Math.random() - 0.5) * 2

				positions.set([x, y, z], i * 3)
			}
		}

		return positions
	}, [count])

	useFrame((state) => {
		const { clock } = state

		for (let i = 0; i < count; i++) {
			const i3 = i * 2

			pointsRef.current!.geometry.attributes.position.array[i3] +=
				Math.sin(clock.elapsedTime + Math.random()) * 0.00009
			pointsRef.current!.geometry.attributes.position.array[i3 + 1] +=
				Math.cos(clock.elapsedTime + Math.random()) * 0.00009
			pointsRef.current!.geometry.attributes.position.array[i3 + 2] +=
				Math.sin(clock.elapsedTime + Math.random()) * 0.00009
		}

		pointsRef.current!.geometry.attributes.position.needsUpdate = true
	})

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#intro_section',
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
				},
			})
			// @ts-ignore
			.to(groupRef.current?.rotation, {
				x: 0.3,
				y: 0.3,
				z: 0.3,
			})
			// @ts-ignore
			.to(groupRef.current?.position, {
				x: 0,
				y: 0,
				z: -4,
			})
	}, [])

	return (
		<group ref={groupRef}>
			<points ref={pointsRef}>
				<bufferGeometry attach='geometry'>
					<bufferAttribute
						attach='attributes-position'
						args={[particlesPosition, 3]}
					/>
				</bufferGeometry>
				<PointMaterial
					color={'#3d3d3d'}
					size={2}
					sizeAttenuation={false}
					depthWrite={false}
				/>
			</points>
		</group>
	)
}

export const ParticlesScene = () => {
	return (
		<Canvas camera={{ position: [0, 0, -5] }}>
			<ambientLight />
			<spotLight position={[0, 0, -5]} angle={1.3} intensity={20} />
			<EffectComposer>
				<Vignette eskil={false} offset={0.1} darkness={1} />
				<ChromaticAberration
					blendFunction={BlendFunction.NORMAL}
					offset={[0.0002, 0.0002]}
				/>
			</EffectComposer>
			<Particles count={2000} shape='sphere' />
		</Canvas>
	)
}
