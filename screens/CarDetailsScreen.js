import {
	View,
	Text,
	Image,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');
const height = width * 0.6;

const CarDetailsScreen = ({ route, navigation }) => {
	const {
		refNo,
		transmission,
		doors,
		country,
		color,
		category,
		name,
		images,
		engineSize,
		price,
	} = route.params;

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{ padding: 5 }}>
				<View style={{ marginBottom: 1 }}>
					<Swiper
						style={{ height: height }}
						loop
						autoplay
						autoplayTimeout={3.3}
					>
						{images.map((image, index) => {
							return <ImageSlider key={index} image={image} />;
						})}
					</Swiper>
				</View>

				<Details
					name={name}
					refNo={refNo}
					transmission={transmission}
					doors={doors}
					country={country}
					color={color}
					category={category}
					engineSize={engineSize}
					price={price}
				/>
				<InquireTab navigation={navigation} />
			</View>
		</ScrollView>
	);
};

const ImageSlider = ({ image }) => {
	return <Image source={image} style={{ width: '100%', height: 245 }} />;
};

const Details = ({
	refNo,
	transmission,
	isNew,
	engineSize,
	doors,
	country,
	color,
	category,
	name,
	price,
}) => {
	return (
		<View>
			<Text
				style={{
					alignSelf: 'center',
					color: 'orangered',
					fontSize: 20,
					fontWeight: '800',
				}}
			>
				{name}
			</Text>
			<Text
				style={{
					alignSelf: 'center',
					color: 'white',
					fontSize: 18,
					fontWeight: '800',
					backgroundColor: 'brown',
					padding: 2,
					paddingHorizontal: 8,
					borderRadius: 10,
					marginVertical: 8,
				}}
			>
				Price: UgShs {price}
			</Text>
			<View style={styles.detail}>
				<Text style={styles.item}>Ref No:</Text>
				<Text style={styles.value}>{refNo}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Transmission</Text>
				<Text style={styles.value}>{transmission}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Condition</Text>
				<Text style={styles.value}>{isNew ? 'New' : 'Used'}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Engine Size</Text>
				<Text style={styles.value}>{engineSize}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Doors</Text>
				<Text style={styles.value}>{doors}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Country</Text>
				<Text style={styles.value}>{country}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Color</Text>
				<Text style={styles.value}>{color}</Text>
			</View>
			<View style={styles.detail}>
				<Text style={styles.item}>Category</Text>
				<Text style={styles.value}>{category}</Text>
			</View>
		</View>
	);
};

const InquireTab = ({ navigation }) => {
	return (
		<TouchableOpacity
			style={{
				backgroundColor: 'blue',
				alignItems: 'center',
				marginTop: 10,
				marginBottom: 20,
				borderRadius: 10,
			}}
			onPress={() => navigation.navigate('Inquire')}
		>
			<Text
				style={{
					color: 'white',
					fontSize: 15,
					fontWeight: '500',
					padding: 10,
				}}
			>
				Inquire
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	detail: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: 10,
		backgroundColor: 'lightblue',
		padding: 8,
		borderRadius: 10,
	},
	item: { color: 'white', fontSize: 16 },
	value: { color: 'white' },
});

export default CarDetailsScreen;
