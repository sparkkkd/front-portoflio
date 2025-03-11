import * as THREE from 'three'
import React, { JSX, useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF, SkeletonUtils } from 'three-stdlib'

type ActionName = 'Armature|mixamo.com|Layer0'

interface GLTFAction extends THREE.AnimationClip {
	name: ActionName
}

type GLTFResult = GLTF & {
	nodes: {
		model_3: THREE.SkinnedMesh
		mixamorigHips: THREE.Bone
	}
	materials: {
		['Material.002']: THREE.MeshStandardMaterial
	}
	animations: GLTFAction[]
}

export function Astronaut(props: JSX.IntrinsicElements['group']) {
	const group = React.useRef<THREE.Group>(null)
	// @ts-ignore
	const { scene, animations } = useGLTF(
		'front-portoflio/models/astronaut-transformed.glb'
	)
	const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
	//@ts-ignore
	const { nodes, materials } = useGraph(clone) as GLTFResult
	const { actions } = useAnimations(animations, group)

	useEffect(() => {
		//@ts-ignore
		actions['Armature|mixamo.com|Layer0'].timeScale = 0.2
		//@ts-ignore
		actions['Armature|mixamo.com|Layer0'].play()
	}, [])

	return (
		<group ref={group} {...props} dispose={null}>
			<group name='Scene'>
				<group name='Armature' rotation={[Math.PI / 2, 0, 0]} scale={0.002}>
					<primitive object={nodes.mixamorigHips} />
				</group>
				<skinnedMesh
					name='model_3'
					geometry={nodes.model_3.geometry}
					material={materials['Material.002']}
					skeleton={nodes.model_3.skeleton}
					rotation={[Math.PI / 2, 0, 0]}
					scale={0.002}
				/>
			</group>
		</group>
	)
}

useGLTF.preload('front-portoflio/models/astronaut-transformed.glb')
