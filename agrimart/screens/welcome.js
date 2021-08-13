import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

var bg = require('../../assets/background.png');
var logo = require('../../assets/farmer.png');
var welcome = require('../../assets/welcome.png');
var client = require('../../assets/client.png');
var female = require('../../assets/female.png')


export default class Welcome extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Signin");
        }, 5000);
    }

    render() {
        return (
            <ImageBackground
                source={bg}
                style={{ height: '100%', width: '100%' }}

            >
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >
                    
                    <Image
                        source={welcome}
                        style={{ height: 100, width: 350 , top:50, position:'absolute'}}
                    >

                    </Image>

                    <Image
                        source={logo}
                        style={{ height: 400, width: 150 , position:'absolute', left:10,top:130}}
                    >

                    </Image>

                    <Image
                        source={client}
                        style={{ height: 400, width: 150,position:'absolute', left:140,top:180 }}
                    >

                    </Image>

                    <Image
                        source={female}
                        style={{ height: 400, width: 150,position:'absolute', left:280,top:150}}
                    >

                    </Image>
                    {/* <Text
                        style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
                    >GPA Tracker</Text> */}

                    <Text
                        style={{ color: 'black', fontSize: 18, left: 100, top: 600, fontWeight: 'normal', position: 'absolute', fontStyle: 'italic' }}
                    >Powered by LogisticBlocks</Text>

                </View>

            </ImageBackground>


        );
    }
}