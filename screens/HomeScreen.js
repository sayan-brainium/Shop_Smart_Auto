import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  View
}from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';

export default function HomeScreen() {
//   _renderItem ({item, index}) {
//     return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{ item.title }</Text>
//         </View>
//     );
// }
  return (

    <ScrollView style={styles.container}>

    </ScrollView>

  );
}


//For Header Section Only
HomeScreen.navigationOptions = {
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Home</Text>
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
  },
  headerLeft: (
    <TouchableOpacity>
      <ImageBackground
        style={{ width: 20, height: 15, marginTop: 3, position: 'relative', marginLeft: 20, color: '#fff' }}
        source={require('../assets/images/menu_icon.png')}>
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
