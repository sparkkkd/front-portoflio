import { FC } from 'react'
import clsx from 'clsx'

import { NAV_LIST } from './constant'

import styles from './NavList.module.sass'

interface NavListProps {
	className?: string
}

export const NavList: FC<NavListProps> = ({ className }) => {
	return (
		<ul className={clsx(styles.list, className)}>
			{NAV_LIST.map(({ id, label, link }) => (
				<li className={styles.item} key={id}>
					<a href={link}>{label}</a>
				</li>
			))}
		</ul>
	)
}
