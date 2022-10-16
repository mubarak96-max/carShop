import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Pressable,
	Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const InquireScreen = () => {
	const navigation = useNavigation();
	return (
		<View>
			<View style={styles.wrapper}>
				<Image
					source={require('../assets/carlogo.jpg')}
					style={{
						width: 150,
						height: 150,
						alignSelf: 'center',
						marginBottom: 30,
					}}
				/>
				<View style={styles.inputField}>
					<TextInput placeholder='Names' placeholderTextColor='#444' />
				</View>
				<View style={styles.inputField}>
					<TextInput
						placeholder='E-Mail'
						placeholderTextColor='#444'
						keyboardType='email-address'
					/>
				</View>
				<View style={styles.inputField}>
					<TextInput placeholder='Phone Number' placeholderTextColor='#444' />
				</View>
				<View style={styles.inputField}>
					<TextInput
						placeholder='Message'
						placeholderTextColor='#444'
						multiline={true}
						editable
					/>
				</View>
				<Pressable
					titleSize={20}
					style={styles.button}
					onPress={() => navigation.navigate('MessageSent')}
				>
					<Text style={{ color: 'white' }}>Send</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 50,
		marginHorizontal: 20,
	},

	inputField: {
		borderRadius: 5,
		padding: 5,
		marginBottom: 10,
		backgroundColor: '#FAFAFA',
		borderWidth: 1,
	},
	button: {
		backgroundColor: '#0096F6',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		height: 30,
	},
});

export default InquireScreen;
