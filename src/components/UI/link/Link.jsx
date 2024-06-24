import { useState } from 'react'

const Link = ({ children, ...props }) => {
	const [isActive, setIsActive] = useState(false)
	return <a {...props}>{children}</a>
}

export default Link
