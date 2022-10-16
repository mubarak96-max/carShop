import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const FavoritesScreen = () => {
	return (
		<View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
			<Text style={styles.text}>You haven't had any favorite yet</Text>
			<Text style={styles.text}>Please add one and come back</Text>
		</View>
	);
};

const styles = StyleSheet.create({ text: { fontSize: 22 } });

export default FavoritesScreen;
