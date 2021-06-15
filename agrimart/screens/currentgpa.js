import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
var bg = require('../../assets/background.png');
var logo = require('../../assets/child.png');

export default class CGPA extends Component {


 
  render() {
    return (

      <View
        style={{ flex: 1, padding: 10 }}
      >
        <TouchableOpacity
          style={{ backgroundColor: '#6200EE', height: 180, width: 180, borderRadius: 25, left: 10, top: 150, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesome5 name={'table'} size={50} color='black'/>
          <Text
            style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}
          >CGPA</Text>
        </TouchableOpacity>

       


      </View>



    );
  }
}