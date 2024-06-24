import { Link } from 'react-router-dom'

// Images
import categories from './../../assets/img/categories.png'
import community from './../../assets/img/community-hash.png'
import donwloads from './../../assets/img/donwloads.png'
import friends from './../../assets/img/friends.png'
import help from './../../assets/img/help.png'
import home from './../../assets/img/home.png'
import library from './../../assets/img/library.png'
import settings from './../../assets/img/settings.png'
import wishlist from './../../assets/img/wishlist.png'

// import Link from '../UI/link/Link'
// компонент img create
// Styles
import classes from './SideBar.module.scss'

const SideBar = () => {
	return (
		<aside className={classes.sidebar}>
			<div className={classes.logo}>GAMINGMOON</div>
			<nav className={classes.menu}>
				<Link className={`${classes.menuItem} ${classes.menuItemHover}`}>
					<img src={home} alt='home' className={classes.category} />
					Home
				</Link>

				<Link className={classes.menuItem}>
					<img src={categories} alt='categories' className={classes.category} />
					Category
				</Link>
				<Link className={classes.menuItem}>
					<img src={library} alt='library' className={classes.category} />
					Library
				</Link>
				<Link className={classes.menuItem}>
					<img src={community} alt='community' className={classes.category} />
					Community
				</Link>
				<Link className={classes.menuItem}>
					<img src={friends} alt='friends' className={classes.category} />
					Friends <span className={classes.badge}>2</span>
				</Link>
				<Link className={classes.menuItem}>
					<img src={wishlist} alt='wishlist' className={classes.category} />
					Wishlist
				</Link>
				<Link className={classes.menuItem}>
					<img src={donwloads} alt='donwloads' className={classes.category} />
					Downloads
				</Link>

				<div className={classes.settingsHelp}>
					<Link className={classes.menuItem}>
						<img src={settings} alt='settings' className={classes.category} />
						Settings
					</Link>
					<Link className={classes.menuItem}>
						<img src={help} alt='help' className={classes.category} />
						Help
					</Link>
				</div>
			</nav>
			<div className={classes.promo}>
				<p>50% discount on the games in the selection</p>
				<button className={classes.promoButton}>Go to library</button>
			</div>
		</aside>
	)
}

export default SideBar
