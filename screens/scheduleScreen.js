import * as React from 'react';
import { View, Text } from 'react-native';
import ToDoList from './toDoList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default class ScheduleScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="ToDoList">
        <Stack.Screen name="ToDoList" component={ToDoList} />
      </Stack.Navigator>
    );
  }
}
