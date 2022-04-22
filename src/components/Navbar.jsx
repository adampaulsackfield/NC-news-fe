import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';
import { toast } from 'react-toastify';

import { UserContext } from '../context/UserContext';

const Navbar = ({ loggedIn, setLoggedIn }) => {
	const userValues = useContext(UserContext);

	const [menu, setMenu] = useState(false);

	const handleMockLogin = () => {
		loggedIn
			? toast.success(
					`Logout successful. ${userValues.user.username} logged out.`,
					{ theme: 'dark' }
			  )
			: toast.success(
					`Login successul. Logged in as ${userValues.user.username}`,
					{ theme: 'dark' }
			  );
		setMenu(false);
		setLoggedIn(!loggedIn);
	};

	const toggleMenu = () => {
		setMenu(!menu);
	};

	return (
		<header className='p-4 flex flex-wrap items-center justify-between'>
			<Link to='/' className='text-light' onClick={() => setMenu(false)}>
				NC News
			</Link>

			<div className='md:hidden'>
				<Hamburger rounded toggled={menu} color='#01b0d3' toggle={toggleMenu} />
			</div>

			<nav
				className={`w-full md:flex md:items-center md:w-auto ${
					!menu ? ' hidden' : undefined
				}`}
				id='menu'
			>
				<ul className='md:flex md:justify-between'>
					<li>
						<NavLink
							to='/'
							className='p-4 text-center block transition ease-in duration-500 hover:text-light'
							onClick={toggleMenu}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/users'
							className='p-4 text-center block transition ease-in duration-500 hover:text-light'
							onClick={toggleMenu}
						>
							Users
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/articles'
							className='p-4 text-center block transition ease-in duration-500 hover:text-light'
							onClick={toggleMenu}
						>
							Articles
						</NavLink>
					</li>
					<li>
						<button
							onClick={handleMockLogin}
							className={`w-full p-4 text-center block transition ease-in duration-500 hover:text-light ${
								loggedIn ? ' hidden' : ''
							}`}
						>
							Login
						</button>
					</li>
					<li>
						<button
							onClick={handleMockLogin}
							className={`w-full p-4 text-center block transition ease-in duration-500 hover:text-light ${
								loggedIn ? '' : 'hidden'
							}`}
						>
							Logout
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
