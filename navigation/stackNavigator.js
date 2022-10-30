import *as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/homeScreen'
import LearnScreen from '../screens/learnScreen'
import BenefitScreen from '../screens/benefitScreen'
import ScheduleScreen from '../screens/scheduleScreen'

const Stack = createStackNavigator()

export default class StackNavigator extends React.Component{
  render(){
    return(
      <Stack.Navigator screenOptions = {{headerShown : false}}>
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "Learn" component = {LearnScreen}/>
      <Stack.Screen name = "Benefits" component = {BenefitScreen}/>
      <Stack.Screen name = "Schedule" component = {ScheduleScreen}/> 
      </Stack.Navigator>
    ) 
  }
}