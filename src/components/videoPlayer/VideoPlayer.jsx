import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { videos } from '../../services/server'
import classes from './VideoPlayer.module.scss'

const VideoPlayer = () => {
	const [currentUrlIndex, setCurrentUrlIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentUrlIndex((prevIndex) => (prevIndex + 1) % videos.length)
		}, 30000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className={classes.wrapper}>
			<ReactPlayer
				light
				url={videos[currentUrlIndex].url}
				config={{
					youtube: {
						playerVars: { cc_load_policy: 0 },
					},
				}}
				width='100%'
				height='640px'
				playing
				pip
			/>

			<div
				style={{
					position: 'absolute',
					bottom: '20px',
					left: '25px',
					maxWidth: '500px',
				}}
			>
				<h2 style={{ marginBottom: 10 }}>{videos[currentUrlIndex].title}</h2>
				<p>{videos[currentUrlIndex].description}</p>
			</div>
		</div>
	)
}

export default VideoPlayer
