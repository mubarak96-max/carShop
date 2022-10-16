import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newCars, oldCars, resetData } from '../assets/redux/features/carSlice';

const HeaderTabs = () => {
	const [activeButton, setActiveButton] = useState('All');

	return (
		<View
			style={{
				flexDirection: 'row',
				alignSelf: 'center',
			}}
		>
			<Button
				text='All'
				btnColor='white'
				textColor='black'
				activeButton={activeButton}
				setActiveButton={setActiveButton}
				handleDispatch={resetData()}
			/>
			<Button
				text='New'
				btnColor='white'
				textColor='black'
				activeButton={activeButton}
				setActiveButton={setActiveButton}
				handleDispatch={newCars()}
			/>
			<Button
				text='Used'
				btnColor='black'
				textColor='white'
				activeButton={activeButton}
				setActiveButton={setActiveButton}
				handleDispatch={oldCars()}
			/>
		</View>
	);
};

const Button = ({ text, textColor, btnColor, handleDispatch, ...props }) => {
	const dispatch = useDispatch();
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: props.activeButton === text ? 'white' : 'black',
					paddingVertical: 6,
					paddingHorizontal: 16,
					borderRadius: 20,
					margin: 10,
				}}
				onPress={() => {
					dispatch(handleDispatch);
					props.setActiveButton(text);
				}}
			>
				<Text
					style={{
						color: props.activeButton === text ? 'black' : 'white',
						fontSize: 15,
						fontWeight: '800',
					}}
				>
					{text}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default HeaderTabs;
