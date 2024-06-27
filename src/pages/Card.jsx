import { useParams } from 'react-router'

import Button from '../components/UI/button/Button'
import { games } from '../services/server'
import classes from './../styles/Card.module.scss'

const Card = () => {
	const { id } = useParams()
	const game = games[id]

	return (
		<main className={classes.mainCard}>
			<div>
				<img className={classes.img} src={game.img} alt={game.title} />
			</div>

			<div className={classes.infoCard}>
				<h2 className='title'>{game.title} </h2>

				<p className={classes.description}>{game.description}</p>
				<Button className={classes.btnBuyNow}>Buy now</Button>
			</div>
		</main>
	)
}

export default Card
