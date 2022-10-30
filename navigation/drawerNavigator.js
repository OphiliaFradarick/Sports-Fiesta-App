import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NewsScreen from '../screens/newsScreen';
import StackNavigator from './stackNavigator';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="News" component={NewsScreen} />
      </Drawer.Navigator>
    );
  }
}
