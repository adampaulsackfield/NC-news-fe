import { Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import { useEffect, useState } from 'react';
import { getUsers } from './actions/user';

const App = () => {
	const [user, setUser] = useState('');

	useEffect(() => {
		getUsers()
			.then((data) => {
				const usersCount = data.users.length;

				setUser(data.users[Math.floor(Math.random() * usersCount)]);
			})
			.catch((err) => {
				toast.error('Unable to load users. Please refresh.');
				console.log(err);
			});
	}, []);

	return (
		<div className=' bg-dark text-white'>
			<div className='container mx-auto'>
				<Navbar user={user} />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/users' element={<Users />} />
					<Route path='/articles' element={<Articles />} />
					<Route path='/article/:article_id' element={<SingleArticle />} />
				</Routes>
				<ToastContainer closeOnClick pauseOnHover />
			</div>
		</div>
	);
};

export default App;
