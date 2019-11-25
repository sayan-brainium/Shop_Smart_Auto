import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
  Platform
} from 'react-native';   
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import CarDetailsImageSlider from "../components/imageSliderCarDetails"
import { LinearGradient } from 'expo-linear-gradient';
import { Video } from 'expo-av';


export default function CarDetailsScreen(Props) {
  const DATA = [
    {
      id: '1',
      Name: 'BMW',
      BrandImage: 'https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '2',
      Name: 'Toyota',
      BrandImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '3',
      Name: 'Aston Martin',
      BrandImage: 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '4',
      Name: 'Alfa Romeo',
      BrandImage: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '5',
      Name: 'Ferari',
      BrandImage: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '6',
      Name: 'Bugati',
      BrandImage: 'https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '7',
      Name: 'Skoda',
      BrandImage: 'https://images.pexels.com/photos/131811/pexels-photo-131811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: '8',
      Name: 'Audi',
      BrandImage: 'https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
  ];

  function Item({ brandimage, name }) {
    return (
      <>
        <TouchableOpacity  onPress={()=>Props.navigation.navigate('CarListing')} style={{ marginLeft: 10, marginRight: 5 }}>
          <Image
            style={{ width: 80, height: 80 }}
            source={{ uri: brandimage }}>
          </Image>
          <Text style={{ color: '#5a5b5f', fontSize: 10, alignSelf: 'center', marginTop: 10 }}>{name}</Text>
        </TouchableOpacity>
      </>
    );
  }

  onBuffer = (buffer) => {
    console.log("Buffer", buffer);
  }

  onError = (err) => {
    console.log("ERROR", err);

  }

  _handleVideoRef = component => {
    const payObject = component
  }


  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      <View style={{ marginBottom: 20, marginTop: 10, position: 'relative' }}>
        <CarDetailsImageSlider pagination={true} autoslide={true} />
        
        <View style={{position:'relative',marginTop:-40,marginLeft:35}}>
          <View style={{height:15,width:40,backgroundColor:'#63cb42',borderRadius:20,justifyContent:'center'}}>
            <Text style={{color:'#fff',fontSize:10,textAlign:"center"}}>Petrol</Text>
          </View>
          <Text style={{color:'#fff',fontSize:12}}>Maruti Swift XL</Text>
        </View>

      </View>

      <Text style={{ color: '#383838', marginLeft: 15, fontWeight: 'bold', fontSize: 14, marginBottom: 20,marginTop:30 }}>Car Title</Text>

      <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', marginBottom: 10 }}>
        <View style={{ flex: 0.5 }}>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Engine</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Style</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Trim</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Mileage</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Exterior</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Interior</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Drivetrain</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Trans</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>City/Highway MPG</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>VIN</Text>
          <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Stock</Text>
        </View>
        <View style={{ flex: 0.5 }}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>2.0L4-Cylinder DOHC16V</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>Sedan</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>Hybrid</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>0</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>Platinum</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>Not Specified</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}></Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>eCVT</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>48/48</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>1HGCVF19KA019936</Text>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12 }}>191626</Text>
        </View>
      </View>

      <View style={{ marginBottom: 20, justifyContent: 'center', }}>
      
        <Video
          source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4' }}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          marginHorizontal={20}
          resizeMode="cover"
          shouldPlay
          isLooping
          ref={this._handleVideoRef}
          style={{ width: "100%", height: 150}}
        />
        <View style={{flexDirection:'row',position:'relative',marginTop:-30,marginLeft:30}}>
        <TouchableOpacity style={{alignSelf:'center'}}>
        <Image
          style={{ width: 20, height: 20, }}
          source={require('../assets/images/Play_icon.png')}>
        </Image>
        </TouchableOpacity>
        <TouchableOpacity style={{alignSelf:'center'}}>
        <Text style={{color:'#fff',marginLeft:5,fontSize:10,alignSelf:'center',position:'relative',}}>PLAY VIDEO</Text>
        </TouchableOpacity>
        </View>

      </View>

      <View style={{ marginBottom: 10,marginTop:10 }}>
        <TouchableOpacity onPress={()=>Props.navigation.navigate('ScheduleTestDriveScreen')}  style={{ justifyContent: 'center' }}>
          <Text onPress={()=>Props.navigation.navigate('ScheduleTestDriveScreen')} style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>Schedule Test Drive</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Props.navigation.navigate('RequestMoreInfo')}  style={{ justifyContent: 'center' }}>
          <Text onPress={()=>Props.navigation.navigate('RequestMoreInfo')}  style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>Request More info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>Ger Pre-Approved in Seconds</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center' }}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>Instant Kelly Blue Book Offer</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20, marginHorizontal: 5 }}>
        <TouchableOpacity onPress={()=>Props.navigation.navigate('MakeAnOffer')}>
          <LinearGradient
            colors={['#1e508d', '#3c7a6b', '#67b639']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.button}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../assets/images/Make_an-Offer_icon.png')}>
              </Image>
              <Text onPress={()=>Props.navigation.navigate('MakeAnOffer')} style={{ color: '#fff', fontSize: 12, textAlign: 'justify' }}>Make An Offfer</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity >
          <LinearGradient
            colors={['#1e508d', '#3c7a6b', '#67b639']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.button}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../assets/images/Specials_icon.png')}>
              </Image>
              <Text style={{ color: '#fff', fontSize: 12, textAlign: 'justify' }}>Specials</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity >
          <LinearGradient
            colors={['#1e508d', '#3c7a6b', '#67b639']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={styles.button}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require('../assets/images/Window_icon.png')}>
              </Image>
              <Text style={{ color: '#fff', fontSize: 12, textAlign: 'justify' }}>Window Sticker</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>  
      </View>

      <Text style={{ color: '#383838', marginLeft: 15, fontWeight: 'bold', fontSize: 14, marginBottom: 20 }}>Payment Calculator</Text>

      <View style={{ marginBottom: 10, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style={{}}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>VEHILE OPTION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>VEHILE DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{}}>
          <Text style={{ marginBottom: 20, color: '#55595a', fontSize: 12, textAlign: 'center', }}>DEALER INFO</Text>
        </TouchableOpacity>
      </View>

      <View style={{}}>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>4 Speakers</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>AM/FM Radip</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Radio Data Syatem</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Radio: 160-Watt AM/FM Audio System</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Air Conditioning</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Automatic Temperature Control</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Front Dual Zone A/C</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Rear Window Defroster</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Power Steering</Text>
        <Text style={{ marginLeft: 25, marginBottom: 20, color: '#979da2', fontSize: 12 }}>Power Windows</Text>
      </View>

      <Text style={{ color: '#383838', marginLeft: 15, fontWeight: 'bold', fontSize: 14, marginBottom: 20 }}>Similar Vehicles</Text>

      <View style={{ marginBottom: 20 }}>
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Item
                brandimage={item.BrandImage}
                name={item.Name}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>

    </ScrollView>

  );
}


//For Header Section Only
CarDetailsScreen.navigationOptions = ({navigation}) =>({
  headerTitle: (
'Car Details'
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    fontSize:'18',
   fontWeight: 'bold',
    // marginTop: -10,
    // height:56
    height: Platform.OS === 'android' ? 30 : 55,
    marginTop: Platform.OS === 'ios' ? -10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 0: 25,
    ...Platform.select({
      ios: { backgroundColor: '#0e3ba0'},
      android: { backgroundColor: '#0e3ba0'}
    }),
  },
  headerLeft: (
    <TouchableOpacity  onPress={ () => navigation.goBack(null)}>
      <Image
        style={{ width: 20, height: 20, marginTop: 3, position: 'relative', marginLeft: 20 }}
        source={require('../assets/images/back_icon.png')}>
      </Image>
      {/* <Icon name="ios-menu" style={{ paddingLeft: 20 }} size={25} color="#fff" /> */}
    </TouchableOpacity>
  ),
  headerRight: (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity>
        <Image
          style={{ width: 25, height: 20, marginTop: 3, position: 'relative', marginRight: 20 }}
          source={require('../assets/images/bell_icon.png')}>
        </Image>
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
    backgroundColor: '#fff',
    marginTop:10
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#3a786e",
    width: 115,
    height: 40,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
