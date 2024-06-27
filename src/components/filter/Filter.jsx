import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../UI/button/Button.jsx'

const Filter = ({ data }) => {
	const [cards, setCards] = useState(
		data.filter((el) => el.category === 'future')
	)

	const buttons = data.reduce((acc, el) => {
		if (acc.includes(el.category)) return acc

		return [...acc, el.category]
	}, [])

	const handleFilter = (selector) => {
		setCards(data.filter((el) => el.category === selector))
	}

	return (
		<div>
			<div style={{ marginBottom: 30 }}>
				{buttons.map((btn) => (
					<Button
						style={{
							padding: '.7rem 1.2rem',
							marginRight: 15,
							backgroundColor: 'transparent',
							border: '1px solid #000',
						}}
						key={btn}
						text={btn}
						handleClick={() => handleFilter(btn)}
					/>
				))}
			</div>
			<div
				style={{
					overflow: 'hidden',
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)',
				}}
			>
				<AnimatePresence
					initial={false}
					exit={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exitBeforeEnter={false}
				>
					{cards.map((el) => (
						<motion.div
							key={el.title}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							<img src={el.img} alt={el.title} width={330} height={430} />
							<p>{el.title}</p>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Filter
