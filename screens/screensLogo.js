import * as React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class ScreensLogo extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Image
          source={require('../assets/logo.jpg')}
          style={styles.container}
        />
        <Text style={styles.logoName}>SPORTS FIESTA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height:80, 
    opacity : 1
  },
  view: {
    backgroundColor: '#091301',
    flex: 2,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    
  },
  logoName: {
    color: '#D6CE15',
     marginRight : 55,
     marginTop : 27,
     fontSize : 21, 
     fontWeight : "bold",
     fontFamily : "Zapfino"
  },
});
