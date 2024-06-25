import FriendsOnline from '../friendsOnline/FriendsOnline'
import RecentlyPlayed from '../recentlyPlayed/RecentlyPlayed'
import classes from './SideBarRight.module.scss'

const SideBarRight = () => {
	return (
		<aside className={classes.sidebar}>
			<FriendsOnline />

			<RecentlyPlayed />
		</aside>
	)
}

export default SideBarRight
