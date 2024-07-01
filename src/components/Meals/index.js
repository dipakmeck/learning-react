import React from 'react';
import MealsProvider from '../Provider/MealsProvider';
import MealsList from './MealsList';
import MealsCounter from './MealsCounter';

export default function Meals() {
	return (
		<MealsProvider>
			<MealsList />
			<MealsCounter />
		</MealsProvider>
	);
}
