import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllHomeScreen from './allHomeScreen';

import Rafting from '../aquatic/rafting';
import Rowing from '../aquatic/rowing';
import ScubaDiving from '../aquatic/scubaDiving';
import Surfing from '../aquatic/surfing';
import Swimming from '../aquatic/swimming';
import WaterPolo from '../aquatic/waterPolo';
import Basketball from '../ball/basketball';
import Dodgeball from '../ball/dodgeball'
import Football from '../ball/football';
import Handball from '../ball/handball';
import Soccer from '../ball/soccer';   
import Volleyball from '../ball/volleyball';
import BungeeJumping from '../extreme/bungeeJumping';
import HangGliding from '../extreme/hangGliding';
import RockClimbing from '../extreme/rockClimbing';
import SkyDivingBaseJumping from '../extreme/skyDivingBaseJumping';
import Boxing from '../fighting/boxing';
import Fencing from '../fighting/fencing';
import Judo from '../fighting/judo';
import Karate from '../fighting/karate';
import SumoWrestling from '../fighting/sumoWrestling';
import Taekwondo from '../fighting/taekwondo';
import Gymnastics from '../others/gymnastics';
import Skateboarding from '../others/skateboarding';
import WeightLifting from '../others/weightLifting';
import Badminton from '../racquetBatClubEtc/badminton';
import Golf from '../racquetBatClubEtc/golf';
import Lacrosse from '../racquetBatClubEtc/lacrosse'
import TableTennis from '../racquetBatClubEtc/tableTennis';
import Tennis from '../racquetBatClubEtc/tennis';
import Curling from '../snow/curling';
import FigureSkating from '../snow/figureSkating';
import IceHockey from '../snow/iceHockey';
import Skiing from '../snow/skiing';
import Snowboarding from '../snow/snowboarding';
import SpeedSkating from '../snow/speedSkating';
import Archery from '../target/archery';
import Bowling from '../target/bowling';
import Darts from '../target/darts';
import Pool from '../target/pool';
import Cycling from '../trackAndField/cycling';
import Jumping from '../trackAndField/jumping';
import Running from '../trackAndField/running';
import Throwing from '../trackAndField/throwing';

const Stack = createStackNavigator();

export default class AllCategory extends React.Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="AllHomeScreen" component={AllHomeScreen} />
        <Stack.Screen name="Rafting" component={Rafting} />
        <Stack.Screen name="Rowing" component={Rowing} />
        <Stack.Screen name="ScubaDiving" component={ScubaDiving} />
        <Stack.Screen name="Surfing" component={Surfing} />
        <Stack.Screen name="Swimming" component={Swimming} />
        <Stack.Screen name="WaterPolo" component={WaterPolo} />
        <Stack.Screen name="Basketball" component={Basketball} />
        <Stack.Screen name="Dodgeball" component={Dodgeball} />
        <Stack.Screen name="Football" component={Football} />
        <Stack.Screen name="Handball" component={Handball} />
        <Stack.Screen name="Soccer" component={Soccer} />
        <Stack.Screen name="Volleyball" component={Volleyball} />
        <Stack.Screen name="BungeeJumping" component={BungeeJumping} />
        <Stack.Screen name="HangGliding" component={HangGliding} />
        <Stack.Screen name="RockClimbing" component={RockClimbing} />
        <Stack.Screen name="SkyDivingBaseJumping" component={SkyDivingBaseJumping} />
        <Stack.Screen name="Boxing" component={Boxing} />
        <Stack.Screen name="Fencing" component={Fencing} />
        <Stack.Screen name="Judo" component={Judo} />
        <Stack.Screen name="Karate" component={Karate} />
        <Stack.Screen name="SumoWrestling" component={SumoWrestling} />
        <Stack.Screen name="Taekwondo" component={Taekwondo} />
        <Stack.Screen name="Gymnastics" component={Gymnastics} />
        <Stack.Screen name="Skateboarding" component={Skateboarding} />
        <Stack.Screen name="WeightLifting" component={WeightLifting} />
        <Stack.Screen name="Badminton" component={Badminton} />
        <Stack.Screen name="Golf" component={Golf} />
        <Stack.Screen name="Lacrosse" component={Lacrosse} />
        <Stack.Screen name="TableTennis" component={TableTennis} />
        <Stack.Screen name="Tennis" component={Tennis} />
        <Stack.Screen name="Curling" component={Curling} />
        <Stack.Screen name="FigureSkating" component={FigureSkating} />
        <Stack.Screen name="IceHockey" component={IceHockey} />
        <Stack.Screen name="Skiing" component={Skiing} />
        <Stack.Screen name="Snowboarding" component={Snowboarding} />
        <Stack.Screen name="SpeedSkating" component={SpeedSkating} />
        <Stack.Screen name="Archery" component={Archery} />
        <Stack.Screen name="Bowling" component={Bowling} />
        <Stack.Screen name="Darts" component={Darts} />
        <Stack.Screen name="Pool" component={Pool} />
         <Stack.Screen name="Cycling" component={Cycling} />
        <Stack.Screen name="Jumping" component={Jumping} />
        <Stack.Screen name="Running" component={Running} />
        <Stack.Screen name="Throwing" component={Throwing} />
      </Stack.Navigator>
    );
  }
}