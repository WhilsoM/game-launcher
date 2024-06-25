import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import UserInfo from '../userInfo/UserInfo'

import inbox from '../../assets/img/inbox.png'
import notification from '../../assets/img/notification.png'
import search from '../../assets/img/search.png'
import classes from './Header.module.scss'

const Header = () => {
	const location = useLocation()
	const [avatarFile, setAvatarFile] = useState(null)
	const [avatarUrl, setAvatarUrl] = useState('')
	const [isSettingsPage, setIsSettingsPage] = useState(
		location.pathname === '/settings'
	)

	useEffect(() => {
		if ((isSettingsPage !== location.pathname) === '/settings') {
			setIsSettingsPage((current) => !current)
		}
	}, [isSettingsPage, setIsSettingsPage])

	const handleImageUpload = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			setAvatarUrl(reader.result)
		}
		reader.readAsDataURL(file)
	}

	return (
		<header
			className={`${classes.Header} ${
				isSettingsPage ? classes.settingsHeader : ''
			}`}
		>
			<div className={`container ${classes.wrapper}`}>
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
					<UserInfo avatarFile={avatarUrl} />
					{location.pathname === '/settings' && (
						<div className={classes.input__wrapper}>
							<label
								htmlFor='input__file'
								className={classes.input__fileButton}
							>
								<span className={classes.input__fileButtonText}>
									Choose avatar
								</span>
							</label>

							<input
								id='input__file'
								type='file'
								accept='image/*'
								onChange={handleImageUpload}
								className={`${classes.setAvatar} ${classes.input} ${classes.input__file}`}
							/>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
