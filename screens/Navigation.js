import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import CarDetailsScreen from './CarDetailsScreen';
import BrowseScreen from './BrowseScreen';
import FavoritesScreen from './FavoritesScreen';
import InquireScreen from './InquireScreen';
import BottomTabs from '../components/BottomTabs';
import MessageSent from './MessageSentScreen';

const Navigation = ({ navigation }) => {
	const Stack = createStackNavigator();

	const screenOptions = {
		headerShown: false,
	};

	return (
		<>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home' screenOptions={screenOptions}>
					<Stack.Screen name='Home' component={HomeScreen} />
					<Stack.Screen name='CarDetails' component={CarDetailsScreen} />
					<Stack.Screen name='Browse' component={BrowseScreen} />
					<Stack.Screen name='Favorites' component={FavoritesScreen} />
					<Stack.Screen name='Inquire' component={InquireScreen} />
					<Stack.Screen name='MessageSent' component={MessageSent} />
				</Stack.Navigator>
				<BottomTabs />
			</NavigationContainer>
		</>
	);
};

export default Navigation;
