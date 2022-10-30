import *as React from 'react'
import {View, Text} from 'react-native'
import DrawerNavigator from './navigation/drawerNavigator'
import {NavigationContainer} from '@react-navigation/native'
import BenefitScreen from './screens/benefitScreen'


export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
       <DrawerNavigator/> 
      
      </NavigationContainer>
      
    )
  } 
}

