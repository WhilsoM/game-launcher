import RecentlyGame from '../recentlyGame/RecentlyGame'

const RecentlyPlayed = () => {
	return (
		<div>
			<h2 className='title'>Recently played</h2>

			<RecentlyGame
				gameName='Minecraft'
				procent='50'
				img='https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png'
			/>
			<RecentlyGame
				gameName='The Witcher 3: Wild Hunt'
				procent='33'
				img='https://korobok.store/upload/iblock/121/j53hl7ztrytgrvkp6wwq4cvf8m5jkiat.jpg'
			/>
			<RecentlyGame
				gameName='The Legend of Zelda: Breath of the Wild'
				procent='99'
				img='https://upload.wikimedia.org/wikipedia/ru/3/34/TLoZ_BotW_boxart.png'
			/>
			<RecentlyGame
				gameName='Cyberpunk 2077'
				procent='25'
				img='https://upload.wikimedia.org/wikipedia/ru/b/bb/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%BE%D0%B9_%D0%B8%D0%B3%D1%80%D1%8B_Cyberpunk_2077.jpg'
			/>
		</div>
	)
}

export default RecentlyPlayed
