import userNoImg from '../../assets/img/no-img-user.png'
import classes from './UserInfo.module.scss'

const UserInfo = ({ avatarFile }) => {
	return (
		<div className={classes.gameUser}>
			<div>
				<img
					className={classes.avatar}
					src={avatarFile || userNoImg}
					alt='avatar'
				/>
			</div>
			<div className={classes.infoUser}>
				<h4 className={classes.userNickname}>gamerver</h4>
				<p className={classes.userEmail}>quantum@gmail.com</p>
			</div>
		</div>
	)
}

export default UserInfo
