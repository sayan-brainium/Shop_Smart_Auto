import React, {useState, useEffect}  from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  FlatList,
  ImageBackground,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/imageSlider'

export default function HomeScreen(props) {
  
  // console.log("PROPS", props);
  

  const [Model, changeModel] = useState('');
  const DATA = [
    {
      id: '1',    
      BrandImage: 'https://www.logodesignlove.com/images/car/bmw-logo.gif'
    },
    {
      id: '2',
      BrandImage: 'https://www.logodesignlove.com/images/car/fiat-logo.gif'
    },
    {
      id: '3',
      BrandImage: 'https://www.logodesignlove.com/images/car/alfa-romeo-logo.gif'
    },
    {
      id: '4',
      BrandImage: 'https://www.logodesignlove.com/images/car/honda-logo.gif'
    },
    {
      id: '5',
      BrandImage: 'https://www.logodesignlove.com/images/simple-logos/mitsubishi-logo.gif'
    },
    {
      id: '6',
      BrandImage: 'https://www.logodesignlove.com/images/car/nissan-logo.gif'
    },
    {
      id: '7',
      BrandImage: 'https://www.logodesignlove.com/images/car/volkswagon-logo.gif'
    },
    {
      id: '8',
      BrandImage: 'https://www.logodesignlove.com/images/car/renault-logo.gif'
    },
  ];



  const DATA1=[
      {
        id: '1',
        BodyImage: 'https://images.pexels.com/photos/1592261/pexels-photo-1592261.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '2',
        BodyImage: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '3',
        BodyImage: 'https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '4',
        BodyImage: 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '5',
        BodyImage: 'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '6',
        BodyImage: 'https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '7',
        BodyImage: 'https://images.pexels.com/photos/131811/pexels-photo-131811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        id: '8',
        BodyImage: 'https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      
  ];
  
  function Item({brandimage}) {
    return (
      <>
        <TouchableOpacity style={{marginLeft:10,marginRight:5}} onPress={this.navigateTo}>
        <Image
              style={{ width: 80, height: 80}}
              source={{uri: brandimage}}>
            </Image>
        </TouchableOpacity>
      </>
    );
  }

  function Item1({bodyimage}) {
    return (
      <>
        <TouchableOpacity style={{marginLeft:10,marginRight:5}}onPress={this.navigateTo}>
        <Image
              style={{ width: 80, height: 80}}
              source={{uri: bodyimage}}>
            </Image>
        </TouchableOpacity>
      </>
    );
  }

  navigateTo = () => {
    props.navigation.navigate('CarDetailsScreen') 
  }
  navigateTo1 = () => {
    props.navigation.navigate('TradeReportScreen') 
  }

  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
     <View style={{marginTop:10}}>
      <View>
        <ImageSlider pagination={true} autoslide={true} />
        </View>
       
       
        <View style={{flexDirection:'row' ,position:'relative',top:-145,marginLeft:35}}>
        <View>
          <View style={{marginBottom:30}}>
            <Text style={{color:"#fff",fontSize:18,fontWeight:'bold',textAlign:'justify'}}>You Need A Car?</Text>
            <Text style={{color:'#fff',fontSize:12,textAlign:'justify'}}>It is a long established fact </Text>
            <Text style={{color:'#fff',fontSize:12,textAlign:'justify'}}>that a reader will be..</Text>
          </View>
          <View style={{flexDirection:'row',position:'relative',marginLeft:-15}}>
            <View>
            <Image
        style={{ width: 40, height: 25, marginTop: 3, position: 'relative',marginRight:10}}
        source={require('../assets/images/call_icon.png')}>
      </Image>
            </View>
            <View>
              <Text style={{marginTop:5,color:'#fff',fontSize:14}}>000-000-000</Text>
            </View>
          </View>
          </View>
          <View style={{justifyContent:'flex-start',alignSelf:'center'}}>
          <ImageBackground
        style={{ width: 60, height: 60, position: 'relative',marginLeft:10}}
        source={require('../assets/images/book_icon.png')}>
     <View style={{marginTop:15}}>
     <Text style={{color:"#fff",fontSize:12,fontWeight:'bold',textAlign:'justify',alignSelf:'center'}}>Book</Text>
     <Text style={{color:"#fff",fontSize:12,fontWeight:'bold',textAlign:'justify',alignSelf:'center'}}>Early</Text>
     </View>
      </ImageBackground>
          </View>
        </View>


      </View>
  


      <View style={{justifyContent:'center',marginHorizontal:20,alignSelf:'center',position:'relative',marginTop:-90,marginBottom:10,}}>
        <ImageBackground
          style={{ width: 360, height: 120, position: 'relative',alignSelf:'center'}}
          source={require('../assets/images/bg.png')}>
              <Text style={{color:'#fff',fontSize:14,textAlign:'center',marginTop:20}}>Value Your Trade in 10 Seconds or less </Text>
              <TextInput
            style={{ height: 40, fontSize: 12,borderRadius:20,backgroundColor:'#fff', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20,paddingLeft:15 }}
            onFocus={navigateTo1}
            onChangeText={text => changeModel(text)}
            value={Model}
            placeholder="Year Make Model Trim or VIN"
            placeholderTextColor="#c2c9cf"
          />
        </ImageBackground>
      </View>
        <Text style={{color:'#383838',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>Browse By Brands</Text>
      

      <View style={{marginBottom:10}}>
      <FlatList
        data={DATA}
        // numColumns={4}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Item
              brandimage={item.BrandImage}
            />
          </View>
        )}
        keyExtractor={item => item.id}
      />
      {/* <Text>Imlementing Flatlist</Text> */}
      </View>



      <Text style={{color:'#383838',fontWeight:'bold',marginLeft:15,marginTop:20,marginBottom:10}}>Browse By Body Style</Text>

      <View style={{marginBottom:10}}>
      <FlatList
        data={DATA1}
        horizontal={true}
        marginBottom={20}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <Item1
              bodyimage={item.BodyImage}
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
HomeScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    'Home'
  ),
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#0e3ba0',
    fontSize:'18',
   fontWeight: 'bold',
    // marginTop:-10,
    // height:55
    height: Platform.OS === 'android' ? 30 : 55,
    marginTop: Platform.OS === 'ios' ? -10 : 0,
    paddingBottom: Platform.OS === 'ios' ? 0: 25,
    ...Platform.select({
      ios: { backgroundColor: '#0e3ba0'},
      android: { backgroundColor: '#0e3ba0'}
    }),
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
