import React, {useState, useEffect} from 'react';
import { ScrollView, TextInput,StyleSheet,Text,TouchableOpacity,ImageBackground,StatusBar,View,Platform } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function TestDetails(Props) {

  return (
    <>
    <View style={{flex:1,justifyContent:'center',alignSelf:'center'}}>
        <Text style={{color:"blue",textAlign:'center',alignSelf:'center',fontSize:16,fontWeight:'bold'}}> Welcome to details Page</Text>
    </View>
    </>
  );
}

TestDetails.navigationOptions = ({ navigation }) => ({
  headerTitle: (
  'Details'
),
headerTintColor: '#fff',
headerStyle: {
  backgroundColor: '#0e3ba0',
  fontSize:'18',
   fontWeight: 'bold',
  // marginTop: -10,
  // height:50
  height: Platform.OS === 'android' ? 30 : 55,
    marginTop: Platform.OS === 'ios' ? -10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 0: 25,
    ...Platform.select({
      ios: { backgroundColor: '#0e3ba0'},
      android: { backgroundColor: '#0e3ba0'}
    }),
},
// headerLeft: (
//   <TouchableOpacity>
//     <ImageBackground
//           style={{ width: 20, height: 20,marginTop:3,position:'relative',color: '#fff' }}
//           source={require('../assets/images/back_icon.png')}>
//         </ImageBackground>
//     {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
//   </TouchableOpacity>
// ),
headerRight:(
  <View style={{ flexDirection: 'row' }}>
     
     <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20,marginTop:3,position:'relative',marginRight:20, color: '#fff' }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>
     
      <TouchableOpacity>
        <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
      </TouchableOpacity>
    
    </View>
),
  
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
