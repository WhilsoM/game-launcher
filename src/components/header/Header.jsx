import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import Modal from '../modal/Modal'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import UserInfo from '../userInfo/UserInfo'

import emojiCry from '../../assets/img/emoji-crying.png'
import inbox from '../../assets/img/inbox.png'
import notification from '../../assets/img/notification.png'
import search from '../../assets/img/search.png'
import classes from './Header.module.scss'

const Header = () => {
	const [modalInboxActive, setModalInboxActive] = useState(false)
	const [modalNotificActive, setModalNotificActive] = useState(false)
	const location = useLocation()
	const [showUploadButton, setShowUploadButton] = useState(
		localStorage.getItem('showUploadButton') === 'true' ||
			location.pathname === '/settings'
	)
	const [avatarUrl, setAvatarUrl] = useState(localStorage.getItem('avatarUrl'))

	useEffect(() => {
		localStorage.setItem('showUploadButton', showUploadButton)
	}, [showUploadButton])

	const handleImageUpload = (e) => {
		const file = e.target.files[0]
		const reader = new FileReader()
		reader.onload = () => {
			localStorage.setItem('avatarUrl', reader.result)
			setAvatarUrl(reader.result)
		}
		reader.readAsDataURL(file)
	}

	return (
		<header
			className={`${classes.Header} ${
				showUploadButton ? classes.settingsHeader : ''
			}`}
		>
			<div className={`container ${classes.wrapper}`}>
				<div className={classes.wrapper__input}>
					<Input className={classes.input} placeholder='Search' />
					<img src={search} alt='search' className={classes.search} />
				</div>

				<div className={classes.wrapper__userActions}>
					<div className={classes.wrapper__inboxNotific}>
						<Button
							className={classes.inboxNotific}
							onClick={() => setModalInboxActive(true)}
						>
							<img src={inbox} alt='inbox' />
						</Button>

						<Button
							className={classes.inboxNotific}
							onClick={() => setModalNotificActive(true)}
						>
							<img src={notification} alt='notification' />
						</Button>
					</div>

					<UserInfo avatarFile={avatarUrl} />
					{showUploadButton && location.pathname === '/settings' && (
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

			<Modal active={modalInboxActive} setActive={setModalInboxActive}>
				<h2>Inbox is empty!</h2>
				<img src={emojiCry} alt='emojiCry' />
			</Modal>

			<Modal active={modalNotificActive} setActive={setModalNotificActive}>
				<h2>Notification is empty!</h2>
				<img src={emojiCry} alt='emojiCry' />
			</Modal>
		</header>
	)
}

export default Header
