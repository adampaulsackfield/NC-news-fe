import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Articles from './components/Articles';

const App = () => {
	return (
		<div className=' bg-dark text-white'>
			<div className='container mx-auto'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/users' element={<Users />} />
					<Route path='/articles' element={<Articles />} />
				</Routes>
				<ToastContainer closeOnClick pauseOnHover />
			</div>
		</div>
	);
};

export default App;
