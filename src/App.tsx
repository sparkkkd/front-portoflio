import Noise from './modules/Noise/Noise'
import { ParticlesScene } from './components/Particles/Particles'

import { Header } from './modules/Header/Header'
import { Intro } from './modules/Intro/Intro'
import { About } from './modules/About/About'

import styles from './App.module.sass'

function App() {
	return (
		<main className={styles.main} id='main'>
			<div className={styles.noise}>
				<Noise
					patternSize={110}
					patternAlpha={5}
					patternScaleX={1}
					patternScaleY={1}
					patternRefreshInterval={10}
				/>
			</div>

			<div className={styles.canvas}>
				<ParticlesScene />
			</div>

			<div className={styles.content}>
				<Header />
				<Intro />
				<About />
			</div>
		</main>
	)
}

export default App
