import { availableGames } from '../services/server'

const Library = () => {
	return (
		<main>
			<h2 className='title'>Library</h2>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					justifyItems: 'center',
					gap: 25,
				}}
			>
				{availableGames.map((game) => (
					<div key={game.id}>
						<img
							style={{ borderRadius: 15 }}
							width={350}
							height={480}
							src={game.img}
							alt={game.title}
						/>
						<p>{game.title}</p>
					</div>
				))}
			</div>
		</main>
	)
}

export default Library
