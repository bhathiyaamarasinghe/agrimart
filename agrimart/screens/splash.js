import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

var bg = require('../../assets/background.png');
var logo = require('../../assets/logo.png');

export default class Splash extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Welcome");
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
                        source={logo}
                        style={{ height: 100, width: 320 }}
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