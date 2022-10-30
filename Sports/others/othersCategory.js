import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OthersHomeScreen from './othersHomeScreen';

import Gymnastics from './gymnastics';
import Skateboarding from './skateboarding';
import WeightLifting from './weightLifting';

const Stack = createStackNavigator();

export default class OthersCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="OthersHomeScreen" component={OthersHomeScreen} />
        <Stack.Screen name="Gymnastics" component={Gymnastics} />
        <Stack.Screen name="Skateboarding" component={Skateboarding} />
        <Stack.Screen name="WeightLifting" component={WeightLifting} />
      </Stack.Navigator>
    );
  }
}
