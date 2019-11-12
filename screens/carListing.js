import React from 'react';
import { ScrollView, TextInput, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, StatusBar, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';



export default function CarListing(props) {
  // const CarListingComponents = (props) => {
  const DATA = [
    {
      id: '1',
      Model: '2019 Honda Accord Nybrid 191626',
      value: '25,960',
      Image: 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg'
    },
    {
      id: '2',
      Model: '2018 Honda Accord Nybrid 191627',
      value: '26,960',
      Image: 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg'
    },
    {
      id: '3',
      Model: '2017 Honda Accord Nybrid 191628',
      value: '27,960',
      Image: 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg'
    },
    {
      id: '4',
      Model: '2016 Honda Accord Nybrid 191629',
      value: '28,960',
      Image: 'https://cdn.jamieoliver.com/home/wp-content/uploads/2016/06/2.jpg'
    },
  ];

  function Item({ id, number, model, value,image}) {
    return (
      <>
        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 0.2, marginLeft: 20 }}>
            <ImageBackground
              style={{ width: 65, height: 65,borderRadius:5}}
              source={{uri: image}}>
            </ImageBackground>
          </View>
          <View style={{ flex: 0.7,marginLeft:10 }}>
            <Text style={{ fontSize: 14, color: '#535353' }}>{model}</Text>
            <Text style={{ color: '#116ace', fontWeight: 'bold' }}>${value}</Text>
          </View>
          <View style={{ flex: 0.1, marginRight: 10, marginLeft: 20 }}>
            <ImageBackground
              style={{ width: 20, height: 20 ,marginLeft:10}}
              source={require('../assets/images/edit_icon.png')}>
            </ImageBackground>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginTop: 10,marginBottom:20 }}>

          <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'center',marginTop:10 }}>
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

          <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'center',marginTop:10  }}>
            <View style={{ flex: 0.4, alignItems: 'flex-end',}}>
              <ImageBackground
                style={{ width: 20, height: 20 }}
                source={require('../assets/images/Schedule-Test-Drive_icon.png')}>
              </ImageBackground>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'flex-start' }}>
              <TouchableOpacity>
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

CarListing.navigationOptions = {
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Car Listing</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
  },
  headerLeft: (
    <TouchableOpacity>
      <ImageBackground
        style={{ width: 20, height: 20, marginTop: 3, position: 'relative', marginLeft: 20, color: '#fff' }}
        source={require('../assets/images/back_icon.png')}>
      </ImageBackground>
      {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity>
        <ImageBackground
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20, color: '#fff' }}
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
