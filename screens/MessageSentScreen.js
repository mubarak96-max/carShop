import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const MessageSent = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: 120, marginHorizontal: 20 }}>
			<LottieView
				style={{ height: 100, alignSelf: 'center' }}
				source={require('../assets/animations/done.json')}
				autoPlay
				speed={0.75}
				loop={false}
			/>
			<Text style={{ fontSize: 20 }}>
				Thanks. Your message has been recieved. You will get feedback within 48
				working hours
			</Text>
			<LottieView
				style={{
					height: 100,
					alignSelf: 'center',
					marginTop: 40,
				}}
				source={require('../assets/animations/car.json')}
				autoPlay
			/>
		</SafeAreaView>
	);
};

export default MessageSent;
