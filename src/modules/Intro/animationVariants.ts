import { Variants } from 'framer-motion'

export const titleVariants: Variants = {
	initial: {
		opacity: 0,
		y: -30,
		filter: 'blur(5px)',
	},
	animate: {
		opacity: 1,
		y: 0,
		filter: 'blur(0px)',
		transition: {
			ease: [0.45, 0.05, 0.55, 0.95],
			duration: 0.5,
		},
	},
}

export const subtitleVariants: Variants = {
	initial: {
		y: 30,
		opacity: 0,
		filter: 'blur(3px)',
	},
	animate: {
		y: 0,
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			duration: 0.6,
			delay: 0.7,
			ease: [0.45, 0.05, 0.55, 0.95],
		},
	},
}

export const textVariants: Variants = {
	initial: {
		y: 30,
		opacity: 0,
		filter: 'blur(3px)',
	},
	animate: {
		y: 0,
		opacity: 1,
		filter: 'blur(0px)',
		transition: {
			ease: [0.45, 0.05, 0.55, 0.95],
			duration: 0.6,
			delay: 1.1,
		},
	},
}
