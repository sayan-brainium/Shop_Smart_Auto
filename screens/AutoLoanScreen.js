import React, {useState, useEffect} from 'react';
import { ScrollView, TextInput,StyleSheet,ProgressBarAndroid,Text,ImageBackground,TouchableOpacity,StatusBar,View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function AutoLoanScreen() {
  // const [value, onChangeText] = useState('');
  // const [value1, onChangeText1] = useState('');
  // const [value2, onChangeText2] = useState('');
  // const [value3, onChangeText3] = useState('');
  // const [value4, onChangeText4] = useState('');
  return (
    <>
    
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
      
     <View style={{marginHorizontal:40,marginBottom:50,marginTop:30}}>
     <Text style={{marginBottom:8,fontSize:14,color:'#535353'}}>APR</Text>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color='#78cb28'
          progress={0.25}
        />
      </View>
      <View style={{marginHorizontal:40,marginBottom:50}}>
     <Text style={{marginBottom:8,fontSize:14,color:'#535353'}}>Term</Text>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color='#78cb28'
          progress={0.4}
        />
      </View>
      <View style={{marginHorizontal:40,marginBottom:50}}>
     <Text style={{marginBottom:8,fontSize:14,color:'#535353'}}>Down Payment</Text>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color='#78cb28'
          progress={0.75}
        />
      </View>
      <View style={{marginHorizontal:40,marginBottom:50}}>
     <Text style={{marginBottom:8,fontSize:14,color:'#535353'}}>Trade in</Text>
      <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          color='#78cb28'
          progress={0.5}
        />
      </View>
      <View style={{marginBottom:20,alignSelf:'center'}}>
        <TouchableOpacity style={{height:65,width:170,borderWidth:1,borderColor:'#e4e4e4',borderRadius:5,justifyContent:'center'}}>
          <Text style={{alignSelf:'center',fontSize:16,color:'#535353'}}>Payment : $298</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </>
  );
}

AutoLoanScreen.navigationOptions = {
  headerTitle: (
   <Text style={{color:'#fff',fontSize:18,fontWeight:'bold',}}>Payment Calculator</Text>
),
headerTintColor: '#fff',
headerStyle: {
  backgroundColor: '#0e3ba0',
  marginTop: -25
},
headerLeft: (
  <TouchableOpacity>
    {/* <Icon name="md-arrow-back" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    <ImageBackground
          style={{ width: 20, height: 20,marginTop:3,position:'relative',marginLeft:20,color: '#fff' }}
          source={require('../assets/images/back_icon.png')}>
        </ImageBackground>
  </TouchableOpacity>
),
headerRight:(
  <View style={{flexDirection:'row'}}>
    <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20,marginTop:3,position:'relative', marginRight: 20, color: '#fff' }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
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

});
