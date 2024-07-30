import React from 'react';
import Weekday from '../Weekday';
import Weekend from '../Weekend';
import dipak from '../../assets/img/dipak-makwana.png';
import ReactPlayer from 'react-player';

export default function Home() {
	const day = new Date().getDay();
	const video = 'https://www.youtube.com/watch?v=tjuUidyCQ3M';
	return (
		<>
			<h1>Home</h1>
			{day >= 1 && day <= 5 ? <Weekday /> : <Weekend />}
			<img src={dipak} alt='' />
			<ReactPlayer url={video} playing={false} volume={0.5} />
		</>
	);
}
