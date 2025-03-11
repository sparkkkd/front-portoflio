import { v4 } from 'uuid'

interface INavList {
	id: string
	label: string
	link: string
}

export const NAV_LIST: INavList[] = [
	{ id: v4(), label: 'About', link: '#about' },
	{ id: v4(), label: 'Skills/Technologies', link: '#skills' },
	{ id: v4(), label: 'Works', link: '#works' },
]
