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

export default class BallHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ScreensLogo/>
        <SafeAreaView style={styles.droidSafeArea} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Basketball');
          }}>
          <Text style={styles.buttonText}>Basketball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Dodgeball');
          }}>
          <Text style={styles.buttonText}>Dodgeball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Football');
          }}>
          <Text style={styles.buttonText}>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Handball');
          }}>
          <Text style={styles.buttonText}>Handball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Soccer');
          }}>
          <Text style={styles.buttonText}>Soccer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Volleyball');
          }}>
          <Text style={styles.buttonText}>Volleyball</Text>
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
