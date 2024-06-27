import { NavLink } from 'react-router-dom'
import classes from './Game.module.scss'

const Game = ({ index, img, title, price }) => {
	return (
		<NavLink to={`/card/${index}`}>
			<img className={classes.imgGame} src={img} alt={title} />

			<div className={classes.infoOfGame}>
				<p className={classes.gameTitle}>{title}</p>
				<p className={classes.gamePrice}>{price}$</p>
			</div>
		</NavLink>
	)
}

export default Game
