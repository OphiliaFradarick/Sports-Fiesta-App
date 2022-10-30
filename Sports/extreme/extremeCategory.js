import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ExtremeHomeScreen from './extremeHomeScreen';

import BungeeJumping from './bungeeJumping';
import HangGliding from './hangGliding';
import RockClimbing from './rockClimbing';
import SkyDivingBaseJumping from './skyDivingBaseJumping';

const Stack = createStackNavigator();

export default class ExtremeCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="ExtremeHomeScreen" component={ExtremeHomeScreen} />
        <Stack.Screen name="BungeeJumping" component={BungeeJumping} />
        <Stack.Screen name="HangGliding" component={HangGliding} />
        <Stack.Screen name="RockClimbing" component={RockClimbing} />
        <Stack.Screen name="SkyDivingBaseJumping" component={SkyDivingBaseJumping} />
      </Stack.Navigator>
    );
  }
}
