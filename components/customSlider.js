import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default () => {

  return (
      <View>
        <View style={style.layer}>
         <View style={style.rod}>
           <View style={style.progressBar}></View>
         </View>
        </View>
        <View style={{position:'absolute',top:-3,left:'30%'}}>
        <View style={style.outercircle}>
        <View style={style.innercircle}></View>
        </View>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
  rod: {
    width: '100%',
    borderRadius: 10,
    height: 7,
    backgroundColor: '#dcdcdc'
  },
  layer: {
    borderRadius: 10,
    width: '100%',
    padding: 5,
    backgroundColor: '#f9f8f6'
  },
  progressBar: {
    width: '30%',
    backgroundColor: '#64ca42',
    height: 6,
    borderRadius: 10
  },
  outercircle:{
    justifyContent:'center',
    backgroundColor:'#ffffff',
    width:22,
    height:22,
    borderRadius:11
  },
  innercircle:{
    alignSelf:'center',
    backgroundColor:'#64ca42',
    width:14,
    height:14,
    borderRadius:7
  }
})