import userNoImg from '../../assets/img/no-img-user.png'

import classes from './UserInfo.module.scss'

const UserInfo = () => {
	return (
		<div className={classes.gameUser}>
			<div className={classes.avatar}>
				<img src={userNoImg} alt='avatar' />
			</div>
			<div className={classes.infoUser}>
				<h4 className={classes.userNickname}>gamerver</h4>
				<p className={classes.userEmail}>quantum@gmail.com</p>
			</div>
		</div>
	)
}

export default UserInfo
