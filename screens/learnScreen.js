import * as React from 'react';
import BallCategory from '../Sports/ball/ballCategory';
import SnowCategory from '../Sports/snow/snowCategory';
import AboutSportsHomescreen from '../Sports/aboutSportsHomescreen';
import AqauticCategory from '../Sports/aquatic/aquaticCategory';
import ExtremeCategory from '../Sports/extreme/extremeCategory';
import FightingCategory from '../Sports/fighting/fightingCategory';
import RacquetBatClubEtcCategory from '../Sports/racquetBatClubEtc/racquetBatClubEtcCategory';
import TargetCategory from '../Sports/target/targetCategory';
import TrackAndFieldCategory from '../Sports/trackAndField/trackAndFieldCategory';
import OthersCategory from '../Sports/others/othersCategory'; 
import AllCategory from '../Sports/all.js/allCategory'

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator(); 
 
export default class LearnScreen extends React.Component { 
  render() {  
    return ( 
      // <View> 
      //  <ScreensLogo/>
      //  <AppContainer/>  
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen  
          name="AboutSportsHomescreen"
          component={AboutSportsHomescreen} 
        /> 
        <Stack.Screen name="All" component={AllCategory} />
        <Stack.Screen name="Aquatic" component={AqauticCategory} />
        <Stack.Screen name="Ball" component={BallCategory} />
        <Stack.Screen name="Extreme" component={ExtremeCategory} />
        <Stack.Screen name="Fighting" component={FightingCategory} /> 
        <Stack.Screen name="RacquetBatClubEtc" component={RacquetBatClubEtcCategory}/>
        <Stack.Screen name="Snow" component={SnowCategory} />
        <Stack.Screen name="Target" component={TargetCategory} />
        <Stack.Screen name="TrackAndField" component={TrackAndFieldCategory} />
        <Stack.Screen name="Others" component={OthersCategory} />
      </Stack.Navigator>
      // </View>
    );
  }
}