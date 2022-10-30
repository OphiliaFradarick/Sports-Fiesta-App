import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FightingHomeScreen from './fightingHomeScreen';

import Boxing from './boxing';
import Fencing from './fencing';
import Judo from './judo';
import Karate from './karate';
import SumoWrestling from './sumoWrestling';
import Taekwondo from './taekwondo';

const Stack = createStackNavigator();

export default class FightingCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="FightingHomeScreen" component={FightingHomeScreen} />
        <Stack.Screen name="Boxing" component={Boxing} />
        <Stack.Screen name="Fencing" component={Fencing} />
        <Stack.Screen name="Judo" component={Judo} />
        <Stack.Screen name="Karate" component={Karate} />
        <Stack.Screen name="SumoWrestling" component={SumoWrestling} />
        <Stack.Screen name="Taekwondo" component={Taekwondo} />
      </Stack.Navigator>
    );
  }
}
