import React from 'react';
import { useMealsListContext } from '../Provider/MealsProvider';

export default function MealsCounter() {
	const { mealsList } = useMealsListContext();
	return (
		<div>
			<p>
				Meals List Count = <strong>{mealsList.length}</strong>
			</p>
		</div>
	);
}
