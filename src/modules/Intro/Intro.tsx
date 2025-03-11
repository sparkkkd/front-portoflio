import { FC, useRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import {
	subtitleVariants,
	textVariants,
	titleVariants,
} from './animationVariants'

import { SplitText } from '../../components/SplitText/SplitText'

import styles from './Intro.module.sass'

interface IntroProps {
	className?: string
}

export const Intro: FC<IntroProps> = ({ className }) => {
	const parentElement = useRef<HTMLElement>(null)

	return (
		<>
			<section
				ref={parentElement}
				className={clsx(styles.intro, className)}
				id='intro_section'
			>
				<SplitText
					stagger={0.08}
					variants={titleVariants}
					text='Hello'
					className={styles.title}
				/>
				<motion.p
					variants={subtitleVariants}
					initial='initial'
					animate='animate'
					className={styles.subtitle}
				>
					My name is Dzhalal
				</motion.p>
				<motion.p
					className={styles.text}
					variants={textVariants}
					initial='initial'
					animate='animate'
				>
					I make beautiful and high-quality websites
				</motion.p>
			</section>
		</>
	)
}
