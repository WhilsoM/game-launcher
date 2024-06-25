import classes from './RecentlyGame.module.scss'

const RecentlyGame = ({ gameName, procent, img }) => {
	return (
		<div className={classes.wrapperAboutGame}>
			<div>
				<img className={classes.imageGame} src={img} alt={gameName} />
			</div>

			<div>
				<p className={classes.gameName}>{gameName}</p>

				<p className={classes.procent}>{procent}%</p>
			</div>
		</div>
	)
}

export default RecentlyGame
