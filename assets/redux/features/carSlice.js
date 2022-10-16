import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = {
	cars: data,
};

const carSlice = createSlice({
	name: 'car',
	initialState,
	reducers: {
		newCars: (state) => {
			state.cars = data;
			state.cars = state.cars.filter((car) => {
				return (state.cars = car.condition === 'new');
			});
		},
		oldCars: (state) => {
			state.cars = data;
			state.cars = state.cars.filter((car) => {
				return car.condition === 'old';
			});
		},
		resetData: (state) => {
			state.cars = data;
		},
	},
});

export const { newCars, oldCars, resetData } = carSlice.actions;
export default carSlice.reducer;
