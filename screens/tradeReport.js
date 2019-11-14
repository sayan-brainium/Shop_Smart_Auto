import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, StyleSheet, Image, Text, TouchableOpacity, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

export default function TradeReportScreen() {

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ alignContent: 'center', marginBottom: 20, marginHorizontal: 20, marginTop: 25 }}>
          <Image
            style={{ width: "100%", height: 168, borderRadius: 5, alignSelf: 'center' }}
            source={require('../assets/images/car3.png')}>
          </Image>
        </View>

        <View style={{ flexDirection: 'row', paddingRight: 102, paddingLeft: 30, marginTop: 10, marginBottom: 10, justifyContent: 'space-between' }}>
          <Text style={{ color: '#56595b' }}>Condition</Text>
          <Text style={{ color: '#56595b' }}>Good</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingRight: 94, paddingLeft: 30, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#56595b' }}>Mileage</Text>
          <Text style={{ color: '#56595b' }}>12,000</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#56595b' }}>Base Range</Text>
          <Text style={{ color: '#56595b' }}>$16,569-$18,370</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingRight: 104, paddingLeft: 30, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#56595b' }}>Mileage Adjustment</Text>
          <Text style={{ color: '#56595b' }}>$132</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingRight: 30, paddingLeft: 30, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#0043bd', fontWeight: 'bold' }}>Total</Text>
          <Text style={{ color: '#0042be' }}>$16,701-$18,502</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 30, justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#393939', }}>Values Provided By:</Text>
          <Image
            style={{ width: 40, height: 24, alignSelf: 'center', marginRight: 100 }}
            source={require('../assets/images/KBB.png')}>
          </Image>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 10, marginBottom: 10, paddingRight: 30 }}>
          <Image
            style={{ width: 20, height: 20, alignSelf: 'center', marginRight: 10 }}
            source={require('../assets/images/location.png')}>
          </Image>
          <Text style={{ color: '#393939', }}>Shop Smart Autos 4250 Veterans, Memorial Holbrook,New York,11741</Text>
        </View>
        <View style={{ flexDirection: 'row', paddingLeft: 30, marginTop: 10, marginBottom: 20, paddingRight: 30 }}>
          <Image
            style={{ width: 20, height: 20, alignSelf: 'center', marginRight: 10 }}
            source={require('../assets/images/call.png')}>
          </Image>
          <Text style={{ color: '#393939', }}>(862)294-0772</Text>
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#1e508d', '#3c7a6b', '#67b639']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>Schedule Appointment</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <LinearGradient
              colors={['#1e508d', '#3c7a6b', '#67b639']}
              start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
              style={styles.button1}
            >
              <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>Get Direction</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={{alignSelf:'center',marginHorizontal:5}}>
        <Image
            style={{ width: 400, height:220 , alignSelf: 'center', marginHorizontal: 10 }}
            source={require('../assets/images/map.png')}>
          </Image>
        </View>

      </View>
    </ScrollView>
  );
}

TradeReportScreen.navigationOptions = {
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Trade Report</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    marginTop: -25
  },
  headerLeft: (
    <TouchableOpacity>
      <Image
        style={{ width: 20, height: 15, marginTop: 3, position: 'relative', marginLeft: 20 }}
        source={require('../assets/images/menu_icon.png')}>
      </Image>
      {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>
      {/* <Icon name="ios-notifications-outline" style={{ paddingRight: 20 }} size={25} color="#fff" /> */}
      <TouchableOpacity>
        <Image
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20 }}
          source={require('../assets/images/bell_icon.png')}>
        </Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  ),

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 50,
    backgroundColor: "#3a786e",
    width: 220,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  button1: {
    borderRadius: 50,
    backgroundColor: "#3a786e",
    width: 220,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 30,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
});
