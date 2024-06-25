import FriendsOnline from '../friendsOnline/FriendsOnline'
import classes from './SideBarRight.module.scss'

const SideBarRight = () => {
	return (
		<aside className={classes.sidebar}>
			<FriendsOnline />
		</aside>
	)
}

export default SideBarRight
