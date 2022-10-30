import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TrackAndFieldHomeScreen from './trackAndFieldHomeScreen';

import Cycling from './cycling';
import Jumping from './jumping';
import Running from './running';
import Throwing from './throwing';

const Stack = createStackNavigator();

export default class TargetCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="TrackAndFieldHomeScreen" component={TrackAndFieldHomeScreen} />
        <Stack.Screen name="Cycling" component={Cycling} />
        <Stack.Screen name="Jumping" component={Jumping} />
        <Stack.Screen name="Running" component={Running} />
        <Stack.Screen name="Throwing" component={Throwing} />
      </Stack.Navigator>
    );
  }
}
