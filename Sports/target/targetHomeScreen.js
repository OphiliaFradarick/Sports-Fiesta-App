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


export default class TargetHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScreensLogo/>
        <SafeAreaView style={styles.droidSafeArea} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Archery');
          }}>
          <Text style={styles.buttonText}>Archery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Bowling');
          }}>
          <Text style={styles.buttonText}>Bowling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {
            this.props.navigation.navigate('Darts');
          }}>
          <Text style={styles.buttonText}>Darts</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => { 
            this.props.navigation.navigate('Pool');
          }}>
          <Text style={styles.buttonText}>Pool</Text>
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
