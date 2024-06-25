import { games } from '../../services/server.js'
import classes from './ActualGames.module.scss'

const ActualGames = () => {
	return (
		<div className={classes.actualGames}>
			<div className={classes.info}>
				<h2 className={classes.title}>Actual Games</h2>
			</div>

			<div className={classes.games}>
				{games.map((game) => (
					<div className={classes.wrapper__img} key={game.id}>
						<img className={classes.imgGame} src={game.img} alt={game.title} />

						<div className={classes.infoOfGame}>
							<p className={classes.gameTitle}>{game.title}</p>{' '}
							<p className={classes.gamePrice}>{game.price}$</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ActualGames
