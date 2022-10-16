import { SafeAreaView } from 'react-native';
import { Divider } from 'react-native-elements';
import Navigation from './screens/Navigation';
import { store } from './assets/redux/store';
import { Provider } from 'react-redux';

export default function App({ navigation }) {
	return (
		<SafeAreaView style={{ flex: 1, marginTop: 40 }}>
			<Provider store={store}>
				<Navigation />
				<Divider width={1.5} />
			</Provider>
		</SafeAreaView>
	);
}
