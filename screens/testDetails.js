import React, {useState, useEffect} from 'react';
import { ScrollView, TextInput,StyleSheet,Text,TouchableOpacity,ImageBackground,StatusBar,View } from 'react-native';
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
   <Text style={{color:'#fff',fontSize:18,marginLeft:35,fontWeight:'bold'}}>Details</Text>
),
headerTintColor: '#fff',
headerStyle: {
  backgroundColor: '#0e3ba0',
  marginTop: -25
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
