import { motion } from 'framer-motion'

const Button = ({ onClick, text, children, ...props }) => {
	return (
		<motion.button
			onClick={onClick}
			{...props}
			whileHover={{ opacity: 0.7 }}
			whileTap={{ backgroundColor: '#ddd' }}
		>
			{children} {text}
		</motion.button>
	)
}

export default Button
