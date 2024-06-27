import { motion } from 'framer-motion'

const Button = ({ handleClick, text, children, ...props }) => {
	return (
		<motion.button
			onClick={handleClick}
			{...props}
			whileHover={{ opacity: 0.7 }}
			whileTap={{ backgroundColor: '#ddd' }}
		>
			{children} {text}
		</motion.button>
	)
}

export default Button
