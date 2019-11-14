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
    width: '25%',
    backgroundColor: '#64ca42',
    height: 6,
    borderRadius: 10
  }
})