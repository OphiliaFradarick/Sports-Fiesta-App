import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Linking,
  Platform,
  StatusBar,
} from 'react-native';
import ScreensLogo from './screensLogo';
//Linking.openURL("")

const Info = require('./benefits.json');

export default class BenefitScreen extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View style={styles.flatList}>
        <Text style={styles.text}>
          {/*The content from the json file goes here*/}
          {item.Benefits}
        </Text>
        <Text style={styles.textInfo}>{item.Information}</Text>
      </View>
    );
  }; 

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ScreensLogo />
        <FlatList
          data={Info}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => {
            index.toString();
          }}
        />
        <Text style={styles.linkText}>More Info!</Text>
        <Text
          style={styles.linkTextInfo}
          onPress={() => {
            Linking.openURL(
              'https://www.healthdirect.gov.au/developing-life-skills-through-sports#:~:text=Physical%20activity%20has%20been%20shown,and%20self%2Desteem%20in%20children'
            );
          }}>
          Health Direct
        </Text>
        <Text
          style={styles.linkTextInfo}
          onPress={() => {
            Linking.openURL(
              'https://www.crimsoneducation.org/ca/blog/admissions-news/sports-scholarships-explained/'
            );
          }}>
          Crimson Education
        </Text>
        <Text
          style={styles.linkTextInfo}
          onPress={() => {
            Linking.openURL(
              'https://www.activenorfolk.org/2021/05/mental-benefits-of-sport/'
            );
          }}>
          Active Norfolk
        </Text>
        <Text
          style={styles.linkTextInfo}
          onPress={() => {
            Linking.openURL(
              'https://www.electricireland.com/news/article/10-great-benefits-of-playing-sport'
            );
          }}>
          Electricire Land
        </Text>
        <Text
          style={styles.linkTextInfo}
          onPress={() => { 
            Linking.openURL(
              'https://www.stoodnt.com/blog/how-is-sports-scholarship-a-beneficial-career-move/'
            );
          }}>
          Stoodnt 
        </Text>
      </View>
    );
  } 
} 
 
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#021301' },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  flatList: {
    width: '90%',  
    backgroundColor: '#C8F417', 
    height: 360,
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 25,
    borderColor: '#1F6521',
    borderWidth: 4,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 38,
    marginRight: 38,
    textAlign: 'center',
  },
  textInfo: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 10,
    alignContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  linkTextInfo: {
    color: '#D6CE15',
    alignSelf: 'center',
  },
  linkText: {
    color: '#D6CE15',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 38,
    marginRight: 38,
    textAlign: 'center',
  },
});
