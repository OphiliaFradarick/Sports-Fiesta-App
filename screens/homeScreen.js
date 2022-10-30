import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ScreensLogo from './screensLogo'; 

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        {/*ADD LOGO HERE*/}
        <View>
          <ScreensLogo />
        </View>
        <View>
          <ImageBackground
            source={require('../assets/homePageImage.png')}
            style={styles.backgroundImage}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Learn');
              }}>
              <Text style={styles.buttonText}>About Sports</Text>
            </TouchableOpacity>
 
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Schedule');
              }}>
              <Text style={styles.buttonText}>Keep Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Benefits');
              }}>
              <Text style={styles.buttonText}>Sport Benefits</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
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
  backgroundImage: { 
    
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});
