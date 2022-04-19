import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Articles from './components/Articles';

const App = () => {
	return (
		<div className='bg-dark text-white'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/users' element={<Users />} />
				<Route path='/articles' element={<Articles />} />
			</Routes>
		</div>
	);
};

export default App;
