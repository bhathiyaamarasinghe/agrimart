import { RENDER } from 'ci-info';
import React, { Component, component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Category extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <View style={styles.sliderContainer}>
                <ScrollView>

                    <Swiper autoplay height={200}>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/flowers.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/fruits.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/vegetables.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/grains.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/milk.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/plants.jpg')}
                                style={styles.sliderImage}
                                resizeMode="cover"
                            />
                        </View>



                    </Swiper>

                    <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={require('../../assets/mango.jpg')}
                            resizeMode="cover"
                            style={styles.cardImg}
                         
                        />
                    </View>
                  
                    <View style={styles.cardInfo}>
                        
                        <Text style={styles.cardTitle}>Mango</Text>
                        <Text style={styles.cardDetails}>Seller:Mr.Kamal Deshapriya</Text>
                        <Text style={styles.cardDetails}>Description:Sri Lankan yummy mango</Text>
                        <Text style={styles.cardPrice}>Market Price:100LKR</Text>
                        <Text style={styles.cardPrice}>Selling Price:90LKR</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3 }}>
                          
                            <TouchableOpacity
                                //    onPress={() =>
                                //     addtocart(item.id)
                                //   }
                                style={[styles.signIn, {
                                    borderColor: '#FFC300',
                                    borderWidth: 1,
                                    backgroundColor: '#FFC300'
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: 'black'
                                }]}>Success </Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>

           

                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({

    sliderContainer: {
        flex: 1, 
        alignSelf:'center'
    

    },

    searchBox: {
        position: 'absolute',
        //marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection: "row",
        backgroundColor: '#fff',
        width: '98%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 6,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8
    },
    LeftImageButton: {
        height: 100,
        width: 160,
        borderRadius: 8
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        fontWeight: 'bold'
    }, signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 140,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: 'white',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 17,

    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
    cardPrice: {
        fontSize: 15,
        color: '#444',
        fontWeight: 'bold',
    },
    signIn: {
        width: 80,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: -4
    },
    textSign: {
        color: 'black',
        fontWeight: 'bold'
    },
    SubCatecory: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 20,
    },
    button: {
        width: 20,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 50,
        flexDirection: 'row'
    },


});
