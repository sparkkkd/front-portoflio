import { FC } from 'react'

import styles from './Header.module.sass'
import clsx from 'clsx'
import { NavList } from '../../components/NavList/NavList'

interface HeaderProps {
	className?: string
}

export const Header: FC<HeaderProps> = ({ className }) => {
	return (
		<header className={clsx(styles.header, className)}>
			<NavList />
		</header>
	)
}
