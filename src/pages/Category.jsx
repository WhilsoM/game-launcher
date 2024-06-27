import Filter from '../components/filter/Filter'
import { games } from '../services/server'

const Category = () => {
	return (
		<div>
			<h2 className='title'>Categories</h2>

			<Filter data={games} />
		</div>
	)
}

export default Category
