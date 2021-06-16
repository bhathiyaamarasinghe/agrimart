import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, TouchableOpacity,ScrollView,StyleSheet  } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
var bg = require('../../assets/background.png');
var logo = require('../../assets/child.png');

export default class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
   
          <View style={styles.container}>
          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 10, top: 50, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'table'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Vegitables</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 10, top: 190, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'table'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Fruits</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 220, top: 50, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'book'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Flowers</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 220, top: 190, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'book'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Grains</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 10, top: 330, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'graduation-cap'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Milk</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 220, top: 330, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'address-card'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Plants</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 220, top: 470, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'address-card'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Sweets</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ backgroundColor: '#46cc17', height: 120, width: 180, borderRadius: 25, left: 10, top: 470, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => this.props.navigation.navigate("Products")}
          >
            {/* <FontAwesome5 name={'graduation-cap'} size={50} color='black' /> */}
            <Text
              style={{ color: 'white', fontSize: 26, fontWeight: 'bold' }}
            >Flour</Text>
          </TouchableOpacity>

      
       

          {/* <Text
            style={{ color: 'black', fontSize: 18,left: 100, top: 550, fontWeight: 'normal',position: 'absolute',fontStyle:'italic' }}
          >Powered by LogisticBlocks</Text> */}
      
       
      </View>
  

    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1,padding: 10,backgroundColor:'white' },
 
});