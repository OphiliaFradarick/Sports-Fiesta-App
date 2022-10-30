import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SnowHomeScreen from './snowHomeScreen';

import Curling from './curling';
import FigureSkating from './figureSkating';
import IceHockey from './iceHockey';
import Skiing from './skiing';
import Snowboarding from './snowboarding';
import SpeedSkating from './speedSkating';

const Stack = createStackNavigator();

export default class SnowCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="SnowHomeScreen" component={SnowHomeScreen} />
        <Stack.Screen name="Curling" component={Curling} />
        <Stack.Screen name="FigureSkating" component={FigureSkating} />
        <Stack.Screen name="IceHockey" component={IceHockey} />
        <Stack.Screen name="Skiing" component={Skiing} />
        <Stack.Screen name="Snowboarding" component={Snowboarding} />
        <Stack.Screen name="SpeedSkating" component={SpeedSkating} />
      </Stack.Navigator>
    );
  }
}
