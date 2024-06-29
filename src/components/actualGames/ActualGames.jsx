import { AnimatePresence, motion } from 'framer-motion'
import { games } from '../../services/server.js'
import Game from '../game/Game.jsx'
import classes from './ActualGames.module.scss'

const ActualGames = () => {
	return (
		<div className={classes.actualGames}>
			<motion.div className={classes.info}>
				<h2 className={`${classes.actualGamesTitle} title`}>Actual Games </h2>
			</motion.div>

			<AnimatePresence>
				{
					<motion.div
						className={classes.games}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 1 }}
					>
						{games.map((game, index) => (
							<motion.div className={classes.wrapper__img} key={game.id}>
								<Game
									index={index}
									title={game.title}
									price={game.price}
									img={game.img}
								/>
							</motion.div>
						))}
					</motion.div>
				}
			</AnimatePresence>
		</div>
	)
}

export default ActualGames
