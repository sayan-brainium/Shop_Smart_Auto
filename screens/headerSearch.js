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
import { Ionicons } from '@expo/vector-icons';





export default function HeaderSearch(Props) {
  const [searchItem, changesearchItem] = useState('');
 
  return ( 
    <View style={{paddingTop:30}}>
    <View>
    <TextInput
          style={{ height: 40,fontSize:12, paddingLeft:15,borderRadius:20,borderColor:"#b1bacb",borderWidth:1,backgroundColor:'#FCF8F7',marginTop:10,marginBottom:10,marginLeft:20,marginRight:20,alignContent:'center' }}
          onChangeText={text => changesearchItem(text)}
          value={searchItem}
          placeholder="Search"
          autoFocus={true}
          keyboardType="default"
          placeholderTextColor= "#9fa2a7"
        />
    </View>
    <TouchableOpacity 
      onPress={()=>alert("hello")}
      style={{position:"absolute",left:"87%",alignItems:"center",justifyContent:"flex-end",top:45 }}
      
      >
       <Ionicons
         name="ios-close-circle-outline"
         color="#000"
         size={25}
      />
    </TouchableOpacity>
    </View>
    );
}

HeaderSearch.navigationOptions = {
  header:null
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
