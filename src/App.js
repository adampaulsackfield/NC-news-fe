import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Users from './components/Users';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import NotFound from './components/NotFound';

import { getUsers } from './actions/api';

import { UserContext } from './context/UserContext';

const App = () => {
	const [user, setUser] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);

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
		<UserContext.Provider value={{ user, setUser }}>
			<div className=' bg-dark text-white'>
				<div className='container mx-auto'>
					<Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/users' element={<Users />} />
						<Route
							path='/articles'
							element={<Articles loggedIn={loggedIn} />}
						/>
						<Route
							path='/article/:article_id'
							element={<SingleArticle loggedIn={loggedIn} />}
						/>
						<Route
							path='/articles/topics/:topic'
							element={<Articles loggedIn={loggedIn} />}
						/>

						<Route path='*' element={<NotFound />} />
					</Routes>
					<ToastContainer closeOnClick pauseOnHover />
				</div>
			</div>
		</UserContext.Provider>
	);
};

export default App;
