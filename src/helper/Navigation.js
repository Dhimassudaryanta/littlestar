import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

import ActivityScreen from '../screen/home/ActivityScreen';
import FavoriteScreen from '../screen/home/FavoriteScreen';
import HomeScreen from '../screen/home/HomeScreen';
import NotificationScreen from '../screen/home/NotificationScreen';
import ProfileScreen from '../screen/home/ProfileScreen';
import SignInScreen from '../screen/login/SignInScreen';
import SignUpScreen from '../screen/login/SignUpScreen';

import Colors from '../colors';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ForgotScreen from '../screen/login/ForgotScreen';


const LoginStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
            />


            <Stack.Screen
                name="Forgot"
                component={ForgotScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="PartII"
                component={TabsII}
                options={{ headerShown: false }}
            />


        </Stack.Navigator>
    )
}

const ActivityStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Home"
                component={ActivityScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

const FavoriteStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Home"
                component={FavoriteScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}


const HomeStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

const NotificationStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Home"
                component={NotificationScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

const ProfileStack = () => {
    return (
        <Stack.Navigator mode="modal" headerMode="float"
        >
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}


const Tabs = () => {
    return (
        < Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={HomeStack}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationTab"
                component={NotificationStack}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-notifications-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="FavoriteTab"
                component={FavoriteStack}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Favorite',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="star-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ActivityTab"
                component={ActivityStack}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="videogame-asset" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    tabBarColor: Colors.primaryColor,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person-outline" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const TabsII = () => {
    return (
        < Tab.Navigator>
            <Tab.Screen
                name="HomeTab"
                component={HomeScreen}
                options={{
                    tabBarColor: Colors.secondColor,
                    tabBarLabel: 'Beranda',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-home-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="NotificationTab"
                component={NotificationStack}
                options={{
                    tabBarColor: Colors.secondColor,
                    tabBarLabel: 'Notifikasi',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-notifications-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="FavoriteTab"
                component={FavoriteStack}
                options={{
                    tabBarColor: Colors.secondColor,
                    tabBarLabel: 'Favorit',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="star-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ActivityTab"
                component={ActivityStack}
                options={{
                    tabBarColor: Colors.secondColor,
                    tabBarLabel: 'Aktifitas',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="videogame-asset" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    tabBarColor: Colors.secondColor,
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-person-outline" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const Navigation = () => {
    return (
        LoginStack()
    )

}

export default Navigation;