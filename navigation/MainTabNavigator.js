import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import { TabBarIcon, MaterialCommunityIcon,ImageIcon } from '../components/TabBarIcon';
import DrawerScreen from '../screens/drawerScreen'
import HomeScreen from '../screens/HomeScreen';
import offer from '../screens/offer';
import ScheduleTestDriveScreen from '../screens/ScheduleTestDrive';
import PaymentCalculator from '../screens/PaymentCalculator';
import RequestMoreInfo from '../screens/RequestMoreInfo';
import MakeAnOffer from '../screens/MakeAnOffer';
import CarListing from '../screens/carListing';
import TradeReportScreen from '../screens/tradeReport'
import CarDetailsScreen from '../screens/carDetails'
import TestDetails from '../screens/testDetails'
import HeaderSearch from '../screens/headerSearch'

const Devicewidth = Dimensions.get('window').width;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    ScheduleTestDriveScreen,
    CarDetailsScreen,
    RequestMoreInfo,
    MakeAnOffer,
    TradeReportScreen,
    HeaderSearch
  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //   focused={focused}
  //   name={Platform.OS === 'ios' ? `ios-home${focused ? '' : ''}` : 'md-home'}
  // />
  <ImageIcon focused={focused} image= {require('../assets/images/unselected_home_icon.png')} height={18} width={20}/>
  ),
  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#ffffff',
      height: Devicewidth < '360' ? 50 : 60,
    },
    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const UsedCarStack = createStackNavigator(
  {
    Settings:CarListing,
    ScheduleTestDriveScreen ,
    CarDetailsScreen,
    RequestMoreInfo,
    MakeAnOffer,
    TradeReportScreen,
    HeaderSearch
    
  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

UsedCarStack.navigationOptions = {
  tabBarLabel: 'Used Car',
  tabBarIcon: ({ focused }) => (
    <ImageIcon focused={focused} image= {require('../assets/images/unselected_Used-Car_icon.png')} height={15} width={32}/>
  ),
  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff',
      height: Devicewidth < '360' ? 50 : 60,
    },
    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const NewCarStack = createStackNavigator(
  {
    Settings: CarListing,
    ScheduleTestDriveScreen,
    CarDetailsScreen,
    RequestMoreInfo,
    MakeAnOffer,
    TradeReportScreen,
    HeaderSearch
    
  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

NewCarStack.navigationOptions = {
  tabBarLabel: 'New Car',
  tabBarIcon: ({ focused }) => (
    <ImageIcon focused={focused} image= {require('../assets/images/unselected_New-Carr_icon.png')} width={23} height={18} />
  ),
  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff',
      height: Devicewidth < '360' ? 50 : 60,
    },
    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const AutoLoanStack = createStackNavigator(
  {
    Settings: PaymentCalculator,
    HeaderSearch
  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

AutoLoanStack.navigationOptions = {
  tabBarLabel: 'Auto Loan',
  tabBarIcon: ({ focused }) => (
    <ImageIcon focused={focused} image= {require('../assets/images/unselected_Auto-Loan_icon.png')} height={23} width={23}/>
  ),

  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    indicatorStyle: { backgroundColor: 'transparent' },
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff',
      height: Devicewidth < '360' ? 50 : 60,
    },

    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const DetailsStack = createStackNavigator(
  {
    Settings: TestDetails,

    
  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

DetailsStack.navigationOptions = {
  tabBarLabel: 'Details',
  tabBarIcon: ({ focused }) => (
    <ImageIcon focused={focused} image= {require('../assets/images/unselected_Dealers_icon.png')} height={20} width={20}/>
  ),
  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff',
      height: Devicewidth < '360' ? 50 : 60,
    },
    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const OfferStack = createStackNavigator(
  {
    Offer:offer,
    HeaderSearch

  },
  // {
  //   headerLayoutPreset: 'center',
  // }
);

OfferStack.navigationOptions = {
  tabBarLabel: 'Offer',
  tabBarIcon: ({ focused }) => (
    <ImageIcon focused={focused} image= {require('../assets/images/unselected_Offer_icon.png')} height={18} width={18}/>
  ),
  tabBarOptions: {
    activeTintColor: '#47a370',
    inactiveTintColor: '#626670',
    labelStyle: {
      fontSize: 11,
    },
    style: {
      backgroundColor: '#fff',
      height: Devicewidth < '360' ? 50 : 60,
    },
    tabStyle: {
      paddingVertical: 3,
    },
  },
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  UsedCarStack,
  NewCarStack,
  AutoLoanStack,
  DetailsStack,
  OfferStack,
});

export default createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: Devicewidth - Devicewidth / 4,
  }
);
