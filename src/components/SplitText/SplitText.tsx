import React, { FC, JSX, useRef } from 'react'
import { v4 } from 'uuid'
import { motion, useInView, Variants } from 'framer-motion'

interface SplitTextProps {
	text: string
	el?: keyof JSX.IntrinsicElements
	className?: string
	fontSize?: number
	variants: Variants
	stagger: number
	once?: boolean
}

export const SplitText: FC<SplitTextProps> = ({
	text,
	el: Wrapper = 'p',
	className,
	variants,
	stagger,
	once = true,
}) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: once })

	return (
		//@ts-ignore
		<Wrapper className={className}>
			<span style={{ display: 'none' }}>{text}</span>
			<motion.span
				aria-hidden
				initial='initial'
				animate={isInView ? 'animate' : 'initial'}
				transition={{ staggerChildren: stagger }}
				ref={ref}
			>
				{text.split(' ').map((word, i) => (
					<React.Fragment key={v4()}>
						<span key={v4()} style={{ display: 'inline-block' }}>
							{word.split('').map((char) => (
								<motion.span
									style={{ display: 'inline-block' }}
									key={v4()}
									variants={variants}
								>
									{char}
								</motion.span>
							))}
						</span>
						{i !== text.split(' ').length - 1 ? (
							<span style={{ display: 'inline-block' }}>&nbsp;</span>
						) : null}
					</React.Fragment>
				))}
			</motion.span>
		</Wrapper>
	)
}
