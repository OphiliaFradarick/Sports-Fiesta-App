import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TargetHomeScreen from './targetHomeScreen';

import Archery from './archery';
import Bowling from './bowling';
import Darts from './darts';
import Pool from './pool';

const Stack = createStackNavigator();

export default class TargetCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="TargetHomeScreen" component={TargetHomeScreen} />
        <Stack.Screen name="Archery" component={Archery} />
        <Stack.Screen name="Bowling" component={Bowling} />
        <Stack.Screen name="Darts" component={Darts} />
        <Stack.Screen name="Pool" component={Pool} />
      </Stack.Navigator>
    );
  }
}
