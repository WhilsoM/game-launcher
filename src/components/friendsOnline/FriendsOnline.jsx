import avatar from '../../assets/img/mw-avatar.png'
import Friend from '../friend/Friend'
import classes from './FriendsOnline.module.scss'

const FriendsOnline = () => {
	return (
		<div className={classes.friendsOnline}>
			<h2 className={classes.title}>Friends online</h2>

			<div>
				<Friend nickname='JohnyStephan' playingGame='ROBLOX' avatar={avatar} />
				<Friend
					nickname='mother_fucker!!!!'
					playingGame='Resident Evil 4'
					avatar={avatar}
				/>
				<Friend
					nickname='IceDragon'
					playingGame='Red Dead Redempion 1'
					avatar={avatar}
				/>
				<Friend nickname='moonw' playingGame='VSCODE' avatar={avatar} />
			</div>
		</div>
	)
}

export default FriendsOnline
