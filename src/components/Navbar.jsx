import React from 'react';

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<Link to='/'>Navbar</Link>

			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/users'>Users</NavLink>
				</li>
				<li>
					<NavLink to='/articles'>Articles</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
