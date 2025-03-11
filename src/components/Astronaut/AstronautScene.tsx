import { Canvas } from '@react-three/fiber'
import { FC } from 'react'

import { Float, Sparkles } from '@react-three/drei'
import { Astronaut } from './Astronaut'
import {
	ChromaticAberration,
	DepthOfField,
	EffectComposer,
	Vignette,
} from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export const AstronautScene: FC = ({}) => {
	return (
		<Canvas camera={{ position: [1, 1, -8] }}>
			<EffectComposer>
				<Vignette eskil={true} offset={0.3} darkness={1} />
				<ChromaticAberration
					blendFunction={BlendFunction.NORMAL}
					offset={[0.0002, 0.0002]}
				/>
				<DepthOfField
					focusDistance={0.9} // where to focus
					focalLength={0.02} // focal length
					bokehScale={2} // bokeh size
				/>
			</EffectComposer>
			<spotLight position={[0, -3, -7]} angle={1.3} intensity={1} />
			<Sparkles size={0.5} count={1000} scale={20} speed={0.5} />
			<Float speed={2} floatIntensity={5}>
				<Astronaut scale={0.2} position={[0, -1, -3.5]} rotation={[0, 21, 0]} />
			</Float>
		</Canvas>
	)
}
