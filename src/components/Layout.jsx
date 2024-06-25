import { Outlet } from 'react-router'
import Header from './header/Header'
import SideBar from './sidebar/SideBar'

import '../index.scss'
import SideBarRight from './sidebar-right/SideBarRight'

const Layout = () => {
	return (
		<>
			<SideBar />
			<Header />
			<SideBarRight />
			<main className='container'>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
