import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/' className='nav-link'>
						Home
					</Link>
				</li>
				<li>
					<Link to='/about-me' className='nav-link'>
						About Me
					</Link>
				</li>
				<li>
					<Link to='/contact-me' className='nav-link'>
						Contact Me
					</Link>
				</li>
			</ul>
		</nav>
	);
}
