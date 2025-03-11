import { FC, useRef } from 'react'
import clsx from 'clsx'
import { Variants, motion, useInView } from 'framer-motion'

import { AstronautScene } from '../../components/Astronaut/AstronautScene'

import { Title } from '../../components/Title/Title'

import styles from './About.module.sass'

interface AboutProps {
	className?: string
}

const titleVariants: Variants = {
	initial: {
		y: 100,
		opacity: 0,
		filter: 'blur(3px)',
	},
	animate: {
		y: 0,
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			ease: [0.45, 0.05, 0.55, 0.95],
			duration: 1,
		},
	},
}

const textVariants: Variants = {
	initial: {
		y: 100,
		opacity: 0,
		filter: 'blur(3px)',
	},
	animate: {
		y: 0,
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			ease: [0.45, 0.05, 0.55, 0.95],
			duration: 1,
			delay: 0.5,
		},
	},
}

export const About: FC<AboutProps> = ({ className }) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return (
		<section className={clsx(styles.about, className)}>
			<div className={styles.canvas}>
				<AstronautScene />
			</div>

			<div className={styles.wrapper}>
				<Title variants={titleVariants}>About me</Title>
				<motion.p
					variants={textVariants}
					initial='initial'
					animate={isInView ? 'animate' : 'initial'}
					className={styles.text}
					ref={ref}
				>
					And so, my name is Dzhalal, I am 23 years old and I am a{' '}
					<span>FrontEnd Developer</span>. In <span>three years</span> of
					working in commerce, I have mastered many new technologies and
					consolidated my knowledge. Now I'm creating creative, beautiful and
					animated websites to make your eyes happy (=
				</motion.p>
			</div>
		</section>
	)
}
