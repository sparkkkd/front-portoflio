import React, { FC, useRef } from 'react'
import { HTMLMotionProps, motion, useInView, Variants } from 'framer-motion'

import styles from './Title.module.sass'
import clsx from 'clsx'

interface TitleProps extends HTMLMotionProps<'h1'> {
	className?: string
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	children: React.ReactNode
	variants?: Variants
}

export const Title: FC<TitleProps> = ({
	className,
	type = 'h3',
	children,
	variants,
	...rest
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

	return React.createElement(
		motion[type],
		{
			className: clsx(styles.title, className),
			variants,
			ref,
			initial: 'initial',
			animate: isInView ? 'animate' : 'initial',
			...rest,
		},
		children
	)
}
