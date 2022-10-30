import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AquaticHomeScreen from './aquaticHomeScreen';

import Rafting from './rafting';
import Rowing from './rowing';
import ScubaDiving from './scubaDiving';
import Surfing from './surfing';
import Swimming from './swimming';
import WaterPolo from './waterPolo';

const Stack = createStackNavigator();

export default class AqauticCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="AquaticHomeScreen" component={AquaticHomeScreen} />
        <Stack.Screen name="Rafting" component={Rafting} />
        <Stack.Screen name="Rowing" component={Rowing} />
        <Stack.Screen name="ScubaDiving" component={ScubaDiving} />
        <Stack.Screen name="Surfing" component={Surfing} />
        <Stack.Screen name="Swimming" component={Swimming} />
        <Stack.Screen name="WaterPolo" component={WaterPolo} />
      </Stack.Navigator>
    );
  }
}
