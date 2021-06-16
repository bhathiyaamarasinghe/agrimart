import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

var bg = require('../../assets/background.png');
var logo = require('../../assets/farmer.png');
var welcome = require('../../assets/welcome.png')

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
                        style={{ height: 100, width: 350 }}
                    >

                    </Image>

                    <Image
                        source={logo}
                        style={{ height: 300, width: 150 }}
                    >

                    </Image>
                    {/* <Text
                        style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
                    >GPA Tracker</Text> */}

                    <Text
                        style={{ color: 'black', fontSize: 18, left: 100, top: 550, fontWeight: 'normal', position: 'absolute', fontStyle: 'italic' }}
                    >Powered by LogisticBlocks</Text>

                </View>

            </ImageBackground>


        );
    }
}