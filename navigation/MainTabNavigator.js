import React from 'react';
import { Platform, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import UsedCarScreen from '../screens/UsedCarScreen';
import NewCarScreen from '../screens/NewCarScreen';
import AutoLoanScreen from '../screens/AutoLoanScreen';
import DetailsScreen from '../screens/DetailsScreen';
import OfferScreen from '../screens/OfferScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

//For Home 
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //       ? `ios-information-circle${focused ? '' : '-outline'}`
    //       : 'md-information-circle'
    //   }
    // />
    <TouchableOpacity>
        <ImageBackground
          style={{ width: 20, height: 20,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
          source={require('../assets/images/unselected_home_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>

  ),
};

HomeStack.path = '';

//For Used_Car
const UsedCarStack = createStackNavigator(
  {
    Settings: UsedCarScreen,
  },
  config
);

UsedCarStack.navigationOptions = {
  tabBarLabel: 'Used Car',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />

    <TouchableOpacity>
        <ImageBackground
          style={{ width: 35, height: 15,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
          source={require('../assets/images/unselected_Used-Car_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
  ),
};

UsedCarStack.path = '';

const NewCarStack = createStackNavigator(
  {
    Settings: NewCarScreen,
  },
  config
);

NewCarStack.navigationOptions = {
  tabBarLabel: 'New Car',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />

    <TouchableOpacity>
        <ImageBackground
          style={{ width: 26, height:20,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
          source={require('../assets/images/unselected_New-Carr_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
  ),
};

NewCarStack.path = '';

const AutoLoanStack = createStackNavigator(
  {
    Settings: AutoLoanScreen,
  },
  config
);

AutoLoanStack.navigationOptions = {
  tabBarLabel: 'Auto Loan',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />

    <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 25,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
          source={require('../assets/images/unselected_Auto-Loan_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
  ),
};

AutoLoanStack.path = '';

const DetailsStack = createStackNavigator(
  {
    Settings: DetailsScreen,
  },
  config
);

DetailsStack.navigationOptions = {
  tabBarLabel: 'Details',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />

      <TouchableOpacity>
      <ImageBackground
        style={{ width: 20, height: 20,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
        source={require('../assets/images/unselected_Dealers_icon.png')}>
      </ImageBackground>
    </TouchableOpacity>
  ),
};

DetailsStack.path = '';


const OfferStack = createStackNavigator(
  {
    Offer: OfferScreen,

  },


  config
);

OfferStack.navigationOptions = {
  tabBarLabel: 'Offer',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />

      <TouchableOpacity>
      <ImageBackground
        style={{ width:20, height: 20,marginTop:3,position:'relative',alignSelf:'center', color: '#fff' }}
        source={require('../assets/images/unselected_Offer_icon.png')}>
      </ImageBackground>
    </TouchableOpacity>
  ),
};

OfferStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  UsedCarStack,
  NewCarStack,
  AutoLoanStack,
  DetailsStack,
  // SettingsStack,
  OfferStack,
});

tabNavigator.path = '';

export default tabNavigator;
