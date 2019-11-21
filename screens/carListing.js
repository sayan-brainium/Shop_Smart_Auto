import React from 'react';
import { ScrollView, TextInput, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export default function CarListing(Props) {
  // const CarListingComponents = (props) => {
  const DATA = [
    {
      id: '1',
      Model: '2019 Honda Accord Nybrid 191626',
      value: '25,960',
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '2',
      Model: '2018 Honda Accord Nybrid 191627',
      value: '26,960',
      Image: 'https://images.pexels.com/photos/1149056/pexels-photo-1149056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '3',
      Model: '2017 Honda Accord Nybrid 191628',
      value: '27,960',
      Image: 'https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?cs=srgb&dl=automobile-automotive-car-1592261.jpg&fm=jpg'
    },
    {
      id: '4',
      Model: '2016 Honda Accord Nybrid 191629',
      value: '28,960',
      Image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?cs=srgb&dl=audi-automobile-car-909907.jpg&fm=jpg'
    },
    {
      id: '5',
      Model: '2016 Honda Accord Nybrid 191629',
      value: '29,960',
      Image: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '6',
      Model: '2016 Honda Accord Nybrid 191629',
      value: '30,960',
      Image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '7',
      Model: '2016 Honda Accord Nybrid 191629',
      value: '31,960',
      Image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?cs=srgb&dl=action-asphalt-auto-1592384.jpg&fm=jpg'
    },
  ];

  function Item({ id, number, model, value,image}) {
    return (
      <>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity onPress={()=>Props.navigation.navigate('CarDetailsScreen')} style={{ flex: 0.2, marginLeft: 20 }}>
            <Image
              style={{ width: 65, height: 65, borderRadius:10}}
              source={{uri: image}}>
            </Image>
          </TouchableOpacity>
          <View style={{ flex: 0.7,marginLeft:10 }}>
            <Text onPress={()=>Props.navigation.navigate('CarDetailsScreen')}  style={{ fontSize: 14, color: '#535353' }}>{model}</Text>
            <Text style={{ color: '#116ace', fontWeight: 'bold' }}>${value}</Text>
          </View>
          <TouchableOpacity onPress={()=>Props.navigation.navigate('CarDetailsScreen')}  style={{ flex: 0.1, marginRight: 10, marginLeft: 20 }}>
            <ImageBackground
              style={{ width: 20, height: 20 ,marginLeft:10}}
              source={require('../assets/images/edit_icon.png')}>
            </ImageBackground>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'space-evenly', marginBottom:20 }}>

          <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center',marginTop:10 }}>
            <View style={{ flex: 0.5, alignItems: 'flex-end',}}>
              <ImageBackground
                style={{ width: 20, height: 20}}
                source={require('../assets/images/Play-Video_icon.png')}>
              </ImageBackground>
            </View>
            <View style={{ flex: 0.5, justifyContent: 'flex-start' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 10, color: '#a1a69b',textAlign:'center',marginRight:20,marginTop:2}}>Play Video</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{alignSelf:'center',}}>
            <Text style={{color:'#d1d2cd'}}>I</Text>
          </View>

          <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center',marginTop:10  }}>
            <View style={{ flex: 0.4, alignItems: 'flex-end',}}>
              <TouchableOpacity
              onPress={()=>Props.navigation.navigate('ScheduleTestDriveScreen')}>
              <ImageBackground 
                style={{ width: 20, height: 20 }}
                source={require('../assets/images/Schedule-Test-Drive_icon.png')}>
              </ImageBackground>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'flex-start' }}>
              <TouchableOpacity
              onPress={()=>Props.navigation.navigate('ScheduleTestDriveScreen')}>
                <Text style={{ fontSize: 10, color: '#a1a69b',textAlign:'center',marginRight:35,paddingTop:2 }}>Schedule Test Drive</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </>
    );
  }
  



  return (

    <ScrollView style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row', marginBottom: 20 }}>

        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 0.25, alignItems: 'flex-end', marginTop: 4 }}>
            <ImageBackground
              style={{ width: 20, height: 19 }}
              source={require('../assets/images/Filter.png')}>
            </ImageBackground>
          </View>
          <View style={{ flex: 0.25, justifyContent: 'flex-start' }}>
            <TouchableOpacity>
              <Text style={{ alignSelf: 'center', fontSize: 16, color: '#45577e' }}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{alignSelf:'center',}}>
            <Text style={{color:'#d1d2cd'}}>I</Text>
          </View>

        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ flex: 0.25, justifyContent: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={{ alignSelf: 'center', fontSize: 16, color: '#45577e' }}>Sort</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.25, alignItems: 'flex-start', marginTop: 5 }}>
            <ImageBackground
              style={{ width: 20, height: 14 }}
              source={require('../assets/images/Sort_icon.png')}>
            </ImageBackground>
          </View>
        </View>

      </View>
      <FlatList
        data={DATA}
        renderItem={({ item, image_url, price }) => (
          <View>
            <Item
              number={item.NUMBER}
              model={item.Model}
              value={item.value}
              image={item.Image}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </ScrollView>

  );
}

CarListing.navigationOptions = ({navigation}) => ({
  headerTitle: (
    <Text style={{ color: '#fff', marginLeft: 35 , fontSize: 18, fontWeight: 'bold' }}>Car Listing</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    marginTop: -25
  },
  // headerLeft: (
  //   <TouchableOpacity onPress={ () => navigation.goBack(null)}>
  //     <Image
  //       style={{ width: 20, height: 20, marginTop: 3, position: 'relative', marginLeft: 20 }}
  //       source={require('../assets/images/back_icon.png')}>
  //     </Image>
  //     {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
  //   </TouchableOpacity>
  // ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20 }}
          source={require('../assets/images/bell_icon.png')}>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HeaderSearch')}>
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
