import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import ScreensLogo from '../../screens/screensLogo'

export default class AquaticHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScreensLogo/>
        <SafeAreaView style={styles.droidSafeArea} /> 
        <TouchableOpacity 
          style={styles.button}
          onPress={() => { 
            this.props.navigation.navigate('Rafting');
          }}>
          <Text style={styles.buttonText}>Rafting</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Rowing');
          }}>
          <Text style={styles.buttonText}>Rowing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {
            this.props.navigation.navigate('ScubaDiving');
          }}>
          <Text style={styles.buttonText}>Scuba Diving</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => { 
            this.props.navigation.navigate('Surfing');
          }}>
          <Text style={styles.buttonText}>Surfing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { 
            this.props.navigation.navigate('Swimming');
          }}>
          <Text style={styles.buttonText}>Swimming</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { 
            this.props.navigation.navigate('WaterPolo');
          }}>
          <Text style={styles.buttonText}>Water Polo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
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
  buttonText: {
    alignSelf: 'center',
    fontFamily: 'cochin-bold',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fffff1',
  },
});
