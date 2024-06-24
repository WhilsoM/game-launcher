import { Outlet } from 'react-router'
import Header from './header/Header'
import SideBar from './sidebar/SideBar'

import '../index.scss'

const Layout = () => {
	return (
		<>
			<SideBar />
			<Header />

			<main className='container'>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
