import { View, ScrollView } from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import Car from '../components/Car';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
	const { cars } = useSelector((store) => store.car);

	return (
		<View style={{ flex: 1 }}>
			<HeaderTabs />
			<ScrollView showsHorizontalScrollIndicator={false}>
				<Car navigation={navigation} data={cars} />
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
