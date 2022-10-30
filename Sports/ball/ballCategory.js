import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BallHomeScreen from './ballHomeScreen';

import Basketball from './basketball';
import Dodgeball from './dodgeball'
import Football from './football';
import Handball from './handball';
import Soccer from './soccer';   
import Volleyball from './volleyball';
 
const Stack = createStackNavigator();

export default class BallCategory extends React.Component {
  render() { 
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="BallHomeScreen" component={BallHomeScreen} />
        <Stack.Screen name="Basketball" component={Basketball} />
        <Stack.Screen name="Dodgeball" component={Dodgeball} />
        <Stack.Screen name="Football" component={Football} />
        <Stack.Screen name="Handball" component={Handball} />
        <Stack.Screen name="Soccer" component={Soccer} />
        <Stack.Screen name="Volleyball" component={Volleyball} />
      </Stack.Navigator>
    );
  }
}
