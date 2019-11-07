import React from 'react';
import { ScrollView, TextInput,StyleSheet,Text,TouchableOpacity,StatusBar,View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Icon from 'react-native-vector-icons/Ionicons';
// import { TextInput } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';


export default function UsedCarScreen() {
  const [value, onChangeText] = React.useState('');
  const [value1, onChangeText1] = React.useState('');
  const [value2, onChangeText2] = React.useState('');
  const [value3, onChangeText3] = React.useState('');
  const [value4, onChangeText4] = React.useState('');
  return (
    <>
    
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      {/* <ExpoLinksView /> */}
     
      <View>
        <TextInput
          style={{ height: 40,fontSize:12, borderColor: '#b1bacb',borderBottomWidth: 1,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center' }}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Name"
          placeholderTextColor= "#9fa2a7"
        />
        <TextInput
          style={{ height: 40,fontSize:12, borderColor: '#b1bacb',borderBottomWidth: 1,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center'  }}
          onChangeText1={text => onChangeText1(text)}
          value={value1}
          placeholder="Email"
          placeholderTextColor= "#9fa2a7"
        />
        <TextInput
          style={{ height: 40,fontSize:12, borderColor: '#b1bacb',borderBottomWidth: 1,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center' }}
          onChangeText2={text => onChangeText2(text)}
          value={value2}
          placeholder="Phone"
          placeholderTextColor= "#9fa2a7"
        />
        <TextInput
          style={{ height: 40, fontSize:12,borderColor: '#b1bacb',borderBottomWidth: 1,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center' }}
          onChangeText3={text => onChangeText3(text)}
          value={value3}
          placeholder="Your Offer"
          placeholderTextColor= "#9fa2a7"
         
        />
        <TextInput
          style={{ height: 40, fontSize:12,borderColor: '#b1bacb',borderBottomWidth: 1,marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center', }}
          onChangeText4={text => onChangeText4(text)}
          value={value4}
          placeholder="Message"
          placeholderTextColor="#9fa2a7"
        />
      </View>
      <View>
        <TouchableOpacity >
          <LinearGradient
            colors={['#1e508d', '#3c7a6b', '#67b639']}
            start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
            style={styles.button}>

            <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </ScrollView>
    </>
  );
}

UsedCarScreen.navigationOptions = {
  headerTitle: (
   <Text style={{color:'#fff',fontSize:16,fontWeight:'bold'}}>Used_Car</Text>
),
headerTintColor: '#fff',
headerStyle: {
  backgroundColor: '#0e3ba0',
},
headerLeft: (
  <TouchableOpacity>
    <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" />
  </TouchableOpacity>
),
headerRight:(
  <View style={{flexDirection:'row'}}>
    <Icon name="ios-notifications-outline" style={{ paddingRight: 20 }} size={25} color="#fff" />
    <Icon name="ios-search" style={{ paddingRight: 20 }} size={25} color="#fff" />
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
    width: 170,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5, 
    

  }, 
});
