import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BottomTabs = ({ navigation }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				margin: 10,
				marginHorizontal: 30,
				justifyContent: 'space-between',
			}}
		>
			<Icon icon='home' text='Home' navigation={navigation} />
			<Icon icon='search' text='Browse' navigation={navigation} />
			<Icon icon='heart' text='Favorites' navigation={navigation} />
		</View>
	);
};

const Icon = ({ icon, text }) => {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate(text)}>
			<View>
				<FontAwesome5
					name={icon}
					style={{ marginBottom: 3, alignSelf: 'center', fontSize: 20 }}
				/>
				<Text>{text}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default BottomTabs;
