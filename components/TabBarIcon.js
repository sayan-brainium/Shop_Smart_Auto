import React from 'react';
import{ Image} from 'react-native'
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

export class TabBarIcon extends React.Component {
  render() {
  return (

    <Ionicons
      name={this.props.name}
      size={20}
      style={{ marginBottom: -3 }}
      color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
}

export class ImageIcon extends React.Component {
  render() {
    const { height,width} = this.props;
    return (
      <Image
         source={this.props.image}
         style={[{marginBottom: -3,width:width,height:height},{tintColor:this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}]}
        
      />
    );
  }
}