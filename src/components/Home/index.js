import React from 'react';
import Weekday from '../Weekday';
import Weekend from '../Weekend';
import dipak from '../../assets/img/dipak-makwana.png';
import ReactPlayer from 'react-player';
import { useUser } from '../../context/User';

export default function Home() {
	const day = new Date().getDay();
	const video = 'https://www.youtube.com/watch?v=tjuUidyCQ3M';
	const { user, setUser } = useUser();

	const changeUser = (e) => {
		e.preventDefault();
		console.log(user);
		setUser({
			...user,
			name: 'dipak',
		});
	};
	return (
		<>
			<h1>Home</h1>
			<h2>
				Welcome {user.name} <br />
				Email:<a href={'mailto:' + user.email}>{user.email}</a>
			</h2>
			{day >= 1 && day <= 5 ? <Weekday /> : <Weekend />}
			{/* <img src={dipak} alt='' />
			<ReactPlayer url={video} playing={false} volume={0.5} /> */}
			<button
				onClick={(e) => {
					changeUser(e);
				}}>
				change User
			</button>
		</>
	);
}
