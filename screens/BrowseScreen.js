import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';

const browse = {
	types: [
		'hatchback',
		'suv',
		'van',
		'truck',
		'sedan',
		'bus',
		'coupe',
		'wagon',
		'pick up',
		'mini van',
		'convertible',
	],
	makes: [
		'toyota',
		'nissan',
		'honda',
		'mitsubishi',
		'mazda',
		'mercedez-benz',
		'bmw',
		'suzuki',
		'subaru',
		'audi',
		'jeep',
		'isuzu',
		'ford',
		'hino',
		'hyundai',
		'lexus',
		'jaguar',
		'jeep',
		'peugeot',
		'chevrolet',
	],
	prices: [
		'Under 10m',
		'10m - 19m',
		'20m - 29m',
		'30m - 39m',
		'40m - 49m',
		'50m - 59m',
		'60m - 69m',
		'70m - 79m',
		'80m - 89m',
		'90m - 99m',
		'above 100m',
	],
	countries: ['USA', 'UK', 'japan', 'china', 'India', 'German', 'Others'],
};

const BrowseScreen = () => {
	return (
		<ScrollView
			style={{ flex: 1, marginHorizontal: 8 }}
			showsVerticalScrollIndicator={false}
		>
			<Text
				style={{
					alignSelf: 'center',
					fontSize: 35,
					fontWeight: '800',
					color: 'orangered',
				}}
			>
				Browse
			</Text>
			<View style={{ marginTop: 13 }}>
				<Text style={styles.category_name}>By Types</Text>
				<View style={styles.categories}>
					{browse.types.map((type, index) => {
						return (
							<Text key={index} style={[styles.category, styles.types]}>
								{type}
							</Text>
						);
					})}
					<Divider width={1} />
				</View>
			</View>

			<View>
				<Text style={styles.category_name}>By Makes</Text>
				<View style={styles.categories}>
					{browse.makes.map((type, index) => {
						return (
							<Text key={index} style={[styles.category, styles.makes]}>
								{type}
							</Text>
						);
					})}
					<Divider width={1} />
				</View>
			</View>
			<View>
				<Text style={styles.category_name}>By Prices</Text>
				<View style={styles.categories}>
					{browse.prices.map((type, index) => {
						return (
							<Text key={index} style={[styles.category, styles.prices]}>
								{type}
							</Text>
						);
					})}
					<Divider width={1} />
				</View>
			</View>
			<View>
				<Text style={styles.category_name}>By Countries</Text>
				<View style={styles.categories}>
					{browse.countries.map((type, index) => {
						return (
							<Text key={index} style={[styles.category, styles.countries]}>
								{type.toUpperCase()}
							</Text>
						);
					})}
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	categories: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		marginBottom: 18,
	},
	category: {
		fontSize: 18,
		textTransform: 'capitalize',
		padding: 3,
		borderRadius: 4,
		margin: 5,
	},
	types: {
		backgroundColor: 'red',
		color: 'white',
	},
	makes: {
		backgroundColor: 'blue',
		color: 'white',
	},
	prices: {
		backgroundColor: 'green',
		color: 'white',
	},
	countries: {
		backgroundColor: 'black',
		color: 'white',
	},
	category_name: {
		fontSize: 20,
		marginLeft: 7,
		fontWeight: '600',
	},
});

export default BrowseScreen;
