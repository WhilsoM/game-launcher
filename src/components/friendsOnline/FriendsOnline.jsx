import { friends } from '../../services/server.js'
import Friend from '../friend/Friend'

const FriendsOnline = ({ title = 'Friends online' }) => {
	return (
		<div style={{ marginBottom: '30px' }}>
			<h2 className='title'>{title}</h2>

			<div>
				{friends.map((friend) => (
					<Friend
						key={friend.id}
						nickname={friend.nickname}
						playingGame={friend.playingGame}
						avatar={friend.avatar}
					/>
				))}
			</div>
		</div>
	)
}

export default FriendsOnline
