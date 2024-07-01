import React from 'react';
import { useMealsListContext } from '../Provider/MealsProvider';

export default function MealsList() {
	const { mealsList } = useMealsListContext();
	return (
		<div>
			<h2>Meals List using Context API</h2>
			{mealsList.map((meal, key) => (
				<h2 key={key}>{meal}</h2>
			))}
		</div>
	);
}
