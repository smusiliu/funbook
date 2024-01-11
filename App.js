import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './src/screens/Feed';
import Login from './src/screens/Login';
import AddPosts from './src/screens/Favorites';
import Profile from './src/screens/Profile';
import Favorites from './src/screens/Favorites';
import Conversations from './src/screens/Conversations';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Urbanist_400Regular, Urbanist_500Medium, Urbanist_600SemiBold } from '@expo-google-fonts/urbanist';
import SFProReg from './assets/fonts/SF-Pro-Text-Regular.otf';
import SFMedium from './assets/fonts/SF-Pro-Text-Medium.otf'

import * as SplashScreen from 'expo-splash-screen';


const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Feed') {
                        iconName = focused ? "md-home" : "md-home-outline";
                    } else if (route.name === 'Conversations') {
                        iconName = focused ? "chatbox-ellipses" : "chatbox-outline";
                    }
                    else if (route.name === 'Favorites') {
                        iconName = focused ? "heart" : "heart-outline";
                    } else if (route.name === 'Profile') {
                        iconName = focused ? "person-circle" : "person-circle-outline";
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },

                tabBarActiveTintColor: "#25A0B0",
                tabBarInactiveTintColor: "#000000",
                tabBarShowLabel: false,
                headerTransparent: true,
            })}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Conversations" component={Conversations} />
            <Tab.Screen name="Add Posts" component={AddPosts} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

export default function App() {
    const [loggedIn, setLoggedIn] = useState(true)

    const [fontLoaded, fontError] = useFonts({
        // Inter: Inter_900Black,
        UrbanistRegular: Urbanist_400Regular,
        UrbanistMedium: Urbanist_500Medium,
        UrbanistSemiBold: Urbanist_600SemiBold,
       SFProReg,
       SFMedium
    })

    useEffect(() => {
        if (fontLoaded || fontError) {
            SplashScreen.hideAsync()
        }

    }, [fontLoaded, fontError])

    if (!fontLoaded && !fontError) return null


    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {loggedIn ? (
                        <Stack.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{ headerShown: false }}
                        />
                    ) : (
                        <Stack.Screen
                            name="Login"
                            component={Login}
                        />
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

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


