import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Home from '../screens/home';
import DetailCard from '../screens/detailCard';

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const Stack = createStackNavigator();

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name='Login' component={Login} />
    {/* {/* <LoginStack.Screen name='JobList' component={Order} /> */}
    <LoginStack.Screen name='Home' component={Home} />
  </LoginStack.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name='Home' component={Home} />

  </HomeStack.Navigator>
)

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginStackScreen} 
       />
      <Stack.Screen name="Home" component={HomeStackScreen} 
       />

    <Stack.Screen name='DetailCard' component={DetailCard} />
    </Stack.Navigator>
  </NavigationContainer>
);