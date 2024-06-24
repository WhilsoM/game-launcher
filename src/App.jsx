import { Route, Routes } from 'react-router'

// Pages
import Layout from './components/Layout'
import Category from './pages/Category'
import Community from './pages/Community'
import Downloads from './pages/Downloads'
import Friends from './pages/Friends'
import Help from './pages/Help'
import Home from './pages/Home'
import Library from './pages/Library'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'
import Wishlist from './pages/Wishlist'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='categories' element={<Category />} />
					<Route path='library' element={<Library />} />
					<Route path='community' element={<Community />} />
					<Route path='friends' element={<Friends />} />
					<Route path='wishlist' element={<Wishlist />} />
					<Route path='downloads' element={<Downloads />} />
					<Route path='settings' element={<Settings />} />
					<Route path='help' element={<Help />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
