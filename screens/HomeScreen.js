import React, {useState, useEffect}  from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/imageSlider'

export default function HomeScreen(props) {
  
  console.log("PROPS", props);
  

  const [Model, changeModel] = useState('');
  const DATA = [
    {
      id: '1',
      BrandImage: 'https://www.logodesignlove.com/images/car/bmw-logo.gif'
    },
    {
      id: '2',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Renault-Car-Logo.webp'
    },
    {
      id: '3',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Vauxhall-Logo-Design.webp'
    },
    {
      id: '4',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Ferrari-Logo-Design.webp'
    },
    {
      id: '5',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Volkswagen-Logo-Design.webp'
    },
    {
      id: '6',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Bentley-Logo-Design.webp'
    },
    {
      id: '7',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Lamborghini-Logo-Design.webp'
    },
    {
      id: '8',
      BrandImage: 'https://inkbotdesign.com/wp-content/uploads/2014/11/Ford-Logo-Design.webp'
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

  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
     <View style={{marginBottom:20,marginTop:10}}>
        <ImageSlider pagination={true} autoslide={true} />
      </View>
  


      <View style={{justifyContent:'center',marginHorizontal:20,alignSelf:'center',marginTop:10,marginBottom:10,}}>
        <ImageBackground
          style={{ width: 360, height: 120, position: 'relative',alignSelf:'center'}}
          source={require('../assets/images/bg.png')}>
              <Text style={{color:'#fff',fontSize:14,textAlign:'center',marginTop:20}}>Value Your Trade in 10 Seconds or less </Text>
              <TextInput
            style={{ height: 40, fontSize: 12,borderRadius:20,backgroundColor:'#fff', borderBottomWidth: 1, marginTop: 10, marginBottom: 10, marginLeft: 20, marginRight: 20,paddingLeft:15 }}
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
HomeScreen.navigationOptions = {
  headerTitle: (
    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Home</Text>
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
});
