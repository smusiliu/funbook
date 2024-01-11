import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './src/screens/Feed';
import Login from './src/screens/Login';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {loggedIn ? (
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                ) : (
                    <Stack.Screen
                        name="Login"
                        component={Login}

                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


