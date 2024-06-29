import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

// Images
import categories from './../../assets/img/categories.png'
import community from './../../assets/img/community-hash.png'
import downloads from './../../assets/img/downloads.png'
import friends from './../../assets/img/friends.png'
import help from './../../assets/img/help.png'
import home from './../../assets/img/home.png'
import library from './../../assets/img/library.png'
import settings from './../../assets/img/settings.png'
import wishlist from './../../assets/img/wishlist.png'

// Styles
import classes from './SideBar.module.scss'

const setActive = ({ isActive }) =>
	isActive ? `${classes.menuItem} ${classes.active}` : `${classes.menuItem}`

const SideBar = () => {
	return (
		<aside className={classes.sidebar}>
			<motion.div className={classes.logo} whileHover={{ scale: 1.1 }}>
				GAMINGMOON
			</motion.div>
			<nav className={classes.menu}>
				<NavLink to='/' className={setActive}>
					<img src={home} alt='home' className={classes.category} />
					Home
				</NavLink>

				<NavLink to='/categories' className={setActive}>
					<img src={categories} alt='categories' className={classes.category} />
					Category
				</NavLink>
				<NavLink to='/library' className={setActive}>
					<img src={library} alt='library' className={classes.category} />
					Library
				</NavLink>
				<NavLink to='/community' className={setActive}>
					<img src={community} alt='community' className={classes.category} />
					Community
				</NavLink>
				<NavLink to='/friends' className={setActive}>
					<img src={friends} alt='friends' className={classes.category} />
					Friends
				</NavLink>
				<NavLink to='/wishlist' className={setActive}>
					<img src={wishlist} alt='wishlist' className={classes.category} />
					Wishlist
				</NavLink>
				<NavLink to='/downloads' className={setActive}>
					<img src={downloads} alt='downloads' className={classes.category} />
					Downloads
				</NavLink>

				<div className={classes.settingsHelp}>
					<NavLink to='/settings' className={setActive}>
						<img src={settings} alt='settings' className={classes.category} />
						Settings
					</NavLink>
					<NavLink to='/help' className={setActive}>
						<img src={help} alt='help' className={classes.category} />
						Help
					</NavLink>
				</div>
			</nav>
			<div className={classes.promo}>
				<p style={{ marginBottom: 25 }}>
					50% discount on the games in the selection
				</p>
				<NavLink to='/library' className={classes.promoButton}>
					Go to library
				</NavLink>
			</div>
		</aside>
	)
}

export default SideBar
