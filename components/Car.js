import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';

const Car = ({ navigation, data }) => {
	const [isFav, setIsFav] = useState(false);

	return (
		<>
			{data.map((car, index) => {
				return (
					<TouchableOpacity
						key={index}
						activeOpacity={0.8}
						onPress={() =>
							navigation.navigate('CarDetails', {
								name: car.name,
								refNo: car.refNo,
								transmission: car.transmission,
								doors: car.doors,
								condition: car.IsNew,
								country: car.country,
								color: car.color,
								engineSize: car.engineSize,
								images: car.images,
								price: car.price,
							})
						}
					>
						<View
							style={{
								marginTop: 10,
								marginBottom: 30,
								padding: 10,
								backgroundColor: 'white',
							}}
						>
							<CarImage image={car.images[0]} />
							<View style={{ position: 'absolute', right: 20, top: 20 }}>
								<TouchableOpacity onPress={() => setIsFav(!isFav)}>
									<MaterialIcons name='favorite' size={20} color='red' />
								</TouchableOpacity>
							</View>
							<CarInfo
								fuel={car.fuel}
								name={car.name}
								transmission={car.transmission}
								mileage={car.mileage}
							/>
						</View>
					</TouchableOpacity>
				);
			})}
		</>
	);
};

const CarImage = ({ image }) => {
	return (
		<View>
			<Image source={image} style={{ width: '100%', height: 245 }} />
		</View>
	);
};

const CarInfo = ({ name, image, transmission, fuel, mileage }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
				marginTop: 10,
			}}
		>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'orangered',
					paddingHorizontal: 8,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 10,
				}}
			>
				<MaterialCommunityIcons
					name='signal-distance-variant'
					size={18}
					color='white'
				/>
				<Text
					style={{
						backgroundColor: 'orangered',
						color: 'white',
						fontSize: 18,
						marginHorizontal: 4,
					}}
				>
					{mileage} KM
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'green',
					paddingHorizontal: 8,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 10,
				}}
			>
				<MaterialCommunityIcons name='engine' size={18} color='white' />
				<Text style={{ color: 'white', fontSize: 18, marginHorizontal: 4 }}>
					{transmission}
				</Text>
			</View>
			<View
				style={{
					flexDirection: 'row',
					backgroundColor: 'blue',
					paddingHorizontal: 8,
					justifyContent: 'center',
					alignItems: 'center',
					borderRadius: 10,
				}}
			>
				<MaterialCommunityIcons name='fuel-cell' size={18} color='white' />
				<Text style={{ color: 'white', fontSize: 18, marginHorizontal: 4 }}>
					{fuel}
				</Text>
			</View>
		</View>
	);
};

export default Car;
