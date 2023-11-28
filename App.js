import * as React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';

import Home from './components/Home';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Main from './components/main';
import LoginAndReg from './components/LoginAndReg';
import Login from './components/login';
import Reg from './components/Reg';
import Courses from './components/Courses';
import Web from './components/Web';
import Mobile from './components/Mobile';
import Stand from './components/Stand';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="home"
    activeColor="#FBBC04"
    inactiveColor="#FFFFFF"
    barStyle={{ backgroundColor: '#043F8D',}}
    >

      <Tab.Screen name="home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={24} />),}} />

      <Tab.Screen name="Courses" component={Courses} options={{
          tabBarLabel: 'Courses',
          tabBarIcon: ({ color }) => (<AntDesign name="profile" size={24} color={color} />),}} />    

      <Tab.Screen name="Notifications" component={Notifications} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (<Ionicons name="notifications" size={24} color={color} />),}} />

      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (<Ionicons name="person" size={24} color={color} />),}} />

    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main' 
        screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="LoginAndReg" component={LoginAndReg} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reg" component={Reg} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Web" component={Web} />
        <Stack.Screen name="Mobile" component={Mobile} />
        <Stack.Screen name="Stand" component={Stand} />
	    </Stack.Navigator>
    </NavigationContainer>
  );
}