import community from './../../assets/img/community-hash.png'
import donwloads from './../../assets/img/donwloads.png'
import help from './../../assets/img/help.png'
import home from './../../assets/img/home.png'
import library from './../../assets/img/library.png'
import settings from './../../assets/img/settings.png'
import wishlist from './../../assets/img/wishlist.png'

import categories from './../../assets/img/categories.png'
import friends from './../../assets/img/friends.png'

import classes from './SideBar.module.scss'

const SideBar = () => {
	return (
		<aside className={classes.sidebar}>
			<div className={classes.logo}>GAMEVERSE</div>
			<nav className={classes.menu}>
				<a
					href='#home'
					className={`${classes.menuItem} ${classes.menuItemHover}`}
				>
					<img src={home} alt='home' className={classes.categorySidebar} />
					Home
				</a>
				<a href='#category' className={classes.menuItem}>
					<img
						src={categories}
						alt='categories'
						className={classes.categorySidebar}
					/>
					Category
				</a>
				<a href='#library' className={classes.menuItem}>
					<img
						src={library}
						alt='library'
						className={classes.categorySidebar}
					/>
					Library
				</a>
				<a href='#community' className={classes.menuItem}>
					<img
						src={community}
						alt='community'
						className={classes.categorySidebar}
					/>
					Community
				</a>
				<a href='#friends' className={classes.menuItem}>
					<img
						src={friends}
						alt='friends'
						className={classes.categorySidebar}
					/>
					Friends <span className={classes.badge}>2</span>
				</a>
				<a href='#wishlist' className={classes.menuItem}>
					<img
						src={wishlist}
						alt='wishlist'
						className={classes.categorySidebar}
					/>
					Wishlist
				</a>
				<a href='#downloads' className={classes.menuItem}>
					<img
						src={donwloads}
						alt='donwloads'
						className={classes.categorySidebar}
					/>
					Downloads
				</a>

				<div>
					<a href='#settings' className={classes.menuItem}>
						<img
							src={settings}
							alt='settings'
							className={classes.categorySidebar}
						/>
						Settings
					</a>
					<a href='#help' className={classes.menuItem}>
						<img src={help} alt='help' className={classes.categorySidebar} />
						Help
					</a>
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
