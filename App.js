// @reat-navigation/native && react-native-screens react-native-safe-area-context
// @react-navigation/native-stack

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen }  = createNativeStackNavigator();

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';


export default function App() {
    return (

        <NavigationContainer>

            <Navigator initialRouteName="Home">

                <Screen name="Home" component={HomeScreen} />
                <Screen name="Details" component={DetailsScreen} />

            </Navigator>

        </NavigationContainer>

    );
}
