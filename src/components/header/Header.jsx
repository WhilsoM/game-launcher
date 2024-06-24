import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import UserInfo from '../userInfo/UserInfo'

import inbox from '../../assets/img/inbox.png'
import notification from '../../assets/img/notification.png'
import search from '../../assets/img/search.png'
import classes from './Header.module.scss'

const Header = () => {
	return (
		<header className={classes.Header}>
			<div className='container wrapper'>
				<div className={classes.wrapper__input}>
					<Input className={classes.input} placeholder='Search' />
					<img src={search} alt='search' className={classes.search} />
				</div>

				<div className={classes.wrapper__userActions}>
					<div className={classes.wrapper__inboxNotific}>
						<Button className={classes.inboxNotific}>
							<img src={inbox} alt='inbox' />
						</Button>

						<Button className={classes.inboxNotific}>
							<img src={notification} alt='notification' />
						</Button>
					</div>

					<UserInfo />
				</div>
			</div>
		</header>
	)
}

export default Header
