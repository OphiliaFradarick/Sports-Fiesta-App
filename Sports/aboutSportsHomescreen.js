import *as React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native'
import ScreensLogo from '../screens/screensLogo'
export default class AboutSportsHomescreen extends React.Component{
  render(){ 
    return(
      <View style = {styles.container}>
      <ScreensLogo/>
      <SafeAreaView style = {styles.droidSafeArea}/> 
       <TouchableOpacity style = {styles.button} onPress = {()=>{
        this.props.navigation.navigate("All") 
      }}> 
      <Text style = {styles.buttonText}>All Sports</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.aquaticButton} onPress = {()=>{ 
        this.props.navigation.navigate("Aquatic")
      }}>   
      <Text style = {styles.buttonText}>Aquatic</Text> 
      </TouchableOpacity>  
      <TouchableOpacity style = {styles.ballButton} onPress = {()=>{ 
        this.props.navigation.navigate("Ball") 
      }}> 
      <Text style = {styles.buttonText}>Ball</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.extremeButton} onPress = {()=>{
        this.props.navigation.navigate("Extreme") 
      }}> 
      <Text style = {styles.buttonText}>Extreme</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.fightingButton} onPress = {()=>{
        this.props.navigation.navigate("Fighting") 
      }}> 
      <Text style = {styles.buttonText}>Fighting</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.racquetButton} onPress = {()=>{
        this.props.navigation.navigate("RacquetBatClubEtc") 
      }}> 
      <Text style = {styles.buttonText}>Racquet, Bat, Club, etc</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.snowButton} onPress = {()=>{
        this.props.navigation.navigate("Snow") 
      }}> 
      <Text style = {styles.buttonText}>Snow</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.targetButton} onPress = {()=>{
        this.props.navigation.navigate("Target") 
      }}> 
      <Text style = {styles.buttonText}>Target</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.trackButton} onPress = {()=>{
        this.props.navigation.navigate("TrackAndField") 
      }}> 
      <Text style = {styles.buttonText}>Track and Field</Text> 
      </TouchableOpacity>
      <TouchableOpacity style = {styles.othersButton} onPress = {()=>{
        this.props.navigation.navigate("Others") 
      }}> 
      <Text style = {styles.buttonText}>Other Sports</Text> 
      </TouchableOpacity>
      </View> 
    ) 
  } 
}
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "" },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    backgroundColor: '#C5FF00',
    marginTop: 30,  
    width: '70%',          
    height: 70,          
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  aquaticButton: {
    backgroundColor: '#6EC8FF',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  ballButton: {
    backgroundColor: '#ECDA48',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  extremeButton: {
    backgroundColor: '#EA501B',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  fightingButton: {
    backgroundColor: '#830CDF',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  racquetButton: {
    backgroundColor: '#A3E05E',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  snowButton: {
    backgroundColor: '#6AEEB6',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  targetButton: {
    backgroundColor: '#D12854',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400', 
    borderWidth: 2,
    opacity: 0.93,
  },
  trackButton: {  
    backgroundColor: '#9C5A0B',  
    marginTop: 30,  
    width: '70%',  
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  othersButton: {
    backgroundColor: '#C5FF00',
    marginTop: 30,  
    width: '70%',
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    borderColor: '#4d8400',
    borderWidth: 2,
    opacity: 0.93,
  },
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'cochin-bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fffff1',
  },
});