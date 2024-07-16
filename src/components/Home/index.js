import React from 'react';
import Weekday from '../Weekday';
import Weekend from '../Weekend';

export default function Home() {
	const day = new Date().getDay();
	return (
		<>
			<h1>Home</h1>
			{day >= 1 && day <= 5 ? <Weekday /> : <Weekend />}
		</>
	);
}
