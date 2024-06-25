import userNoImg from './../../assets/img/no-img-user.png'
import classes from './Friend.module.scss'

const Friend = ({ avatar, playingGame, nickname }) => {
	return (
		<div className={classes.friend}>
			<div>
				<img
					className={classes.avatar}
					src={avatar || userNoImg}
					alt={nickname}
				/>
			</div>

			<div>
				<div>
					<p className={classes.nickname}>{nickname}</p>
				</div>
				<div className={classes.wrapper__playingGame}>
					<p>Playing</p>
					<p className={classes.playingGame}>{playingGame}</p>
				</div>
			</div>
		</div>
	)
}

export default Friend
