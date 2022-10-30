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
import ScreensLogo from '../../screens/screensLogo';

export default class AllHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScreensLogo />
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
            this.props.navigation.navigate('Badminton');
          }}>
          <Text style={styles.buttonText}>Badminton</Text>
        </TouchableOpacity>
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
            this.props.navigation.navigate('Bowling'); 
          }}>
          <Text style={styles.buttonText}>Bowling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Boxing');
          }}>
          <Text style={styles.buttonText}>Boxing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('BungeeJumping');
          }}>
          <Text style={styles.buttonText}>Bungee Jumping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Curling');
          }}>
          <Text style={styles.buttonText}>Curling</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Cycling');
          }}>
          <Text style={styles.buttonText}>Cycling</Text>
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
            this.props.navigation.navigate('Dodgeball');
          }}>
          <Text style={styles.buttonText}>Dodgeball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Fencing');
          }}>
          <Text style={styles.buttonText}>Fencing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('FigureSkating');
          }}>
          <Text style={styles.buttonText}>Figure Skating</Text>
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
            this.props.navigation.navigate('Golf');
          }}>
          <Text style={styles.buttonText}>Golf</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Gymnastics');
          }}>
          <Text style={styles.buttonText}>Gymnastics</Text>
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
            this.props.navigation.navigate('HangGliding');
          }}>
          <Text style={styles.buttonText}>Hang Gliding</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('IceHockey');
          }}>
          <Text style={styles.buttonText}>Ice Hockey</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Judo');
          }}>
          <Text style={styles.buttonText}>Judo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Jumping');
          }}>
          <Text style={styles.buttonText}>Jumping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Karate');
          }}>
          <Text style={styles.buttonText}>Karate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Lacrosse');
          }}>
          <Text style={styles.buttonText}>Lacrosse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Pool');
          }}>
          <Text style={styles.buttonText}>Pool</Text>
        </TouchableOpacity>
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
            this.props.navigation.navigate('RockClimbing');
          }}>
          <Text style={styles.buttonText}>Rock Climbing</Text>
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
            this.props.navigation.navigate('Running');
          }}>
          <Text style={styles.buttonText}>Running</Text>
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
            this.props.navigation.navigate('Skateboarding');
          }}>
          <Text style={styles.buttonText}>Skateboarding</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Skiing');
          }}>
          <Text style={styles.buttonText}>Skiing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('SkyDivingBaseJumping'); 
          }}>
          <Text style={styles.buttonText}>Sky Diving/Base Jumping</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Snowboarding');
          }}>
          <Text style={styles.buttonText}>Snowboarding</Text>
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
            this.props.navigation.navigate('SpeedSkating');
          }}>
          <Text style={styles.buttonText}>Speed Skating</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('SumoWrestling');
          }}>
          <Text style={styles.buttonText}>Sumo Wrestling</Text>
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
            this.props.navigation.navigate('TableTennis');
          }}>
          <Text style={styles.buttonText}>Table Tennis</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Taekwondo');
          }}>
          <Text style={styles.buttonText}>Taekwondo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Tennis');
          }}>
          <Text style={styles.buttonText}>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Throwing');
          }}>
          <Text style={styles.buttonText}>Throwing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('WaterPolo');
          }}>
          <Text style={styles.buttonText}>Water Polo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('WeightLifting');
          }}>
          <Text style={styles.buttonText}>Weight Lifting</Text>
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
    width: '71%',
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
