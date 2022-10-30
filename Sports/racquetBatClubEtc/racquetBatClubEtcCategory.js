import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RacquetBatClubEtcHomeScreen from './racquetBatClubEtcHomeScreen';

import Badminton from './badminton';
import Golf from './golf';
import Lacrosse from './lacrosse'
import TableTennis from './tableTennis';
import Tennis from './tennis';

const Stack = createStackNavigator();

export default class RacquetBatClubEtcCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="RacquetBatClubEtcHomeScreen"
          component={RacquetBatClubEtcHomeScreen}
        />
        <Stack.Screen name="Badminton" component={Badminton} />
        <Stack.Screen name="Golf" component={Golf} />
        <Stack.Screen name="Lacrosse" component={Lacrosse} />
        <Stack.Screen name="TableTennis" component={TableTennis} />
        <Stack.Screen name="Tennis" component={Tennis} />
      </Stack.Navigator>
    );
  }
}
