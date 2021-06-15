import React from 'react'
import axios from 'axios'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import Swiper from 'react-native-swiper';
import { useState } from 'react';
import StarRating from '../screens/StarRating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { header2 } from '../env'
import acerImage from '../media/products/acer.jpg';
import AsyncStorage from '@react-native-community/async-storage';
import {BaseUrl} from '../components/serviceUrls';
import {ImgUrl} from '../components/serviceUrls';


const FashionScreen = ({ item,route }) => {
   
    const addtocart = async (id) => {
    
        await axios({
            method: 'post',
            url: BaseUrl+`/api/addtocart/`,
            headers: {
                Authorization: `token ${await AsyncStorage.getItem('token')}`
            },
            data: { "id": id }
            
        }).then(response => {
            console.log(response);
            console.log(id)
        }).then(err=>{
                console.log(err);
        })
    }
 

    return (
        <View>
            <ScrollView>
                <View style={styles.card}>
                    <View style={styles.cardImgWrapper}>
                        <Image
                            source={{uri:BaseUrl+item.image}}
                            resizeMode="cover"
                            style={styles.cardImg}
                         
                        />
                    </View>
                  
                    <View style={styles.cardInfo}>
                        
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDetails}>Seller:{item.seller.seller_name}</Text>
                        <Text style={styles.cardDetails}>Description:{item.description}</Text>
                        <Text style={styles.cardPrice}>Market Price:{item.marcket_price}</Text>
                        <Text style={styles.cardPrice}>Selling Price:{item.selling_price}</Text>
                        <View style={{ flexDirection: 'row', marginTop: 3 }}>
                          
                            <TouchableOpacity
                                   onPress={() =>
                                    addtocart(item.id)
                                  }
                                style={[styles.signIn, {
                                    borderColor: '#FFC300',
                                    borderWidth: 1,
                                    backgroundColor: '#FFC300'
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: 'black'
                                }]}>Add to cart </Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default FashionScreen;

const styles = StyleSheet.create({

    sliderContainer: {
        height: 550,
        width: 340,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 50,
        borderRadius: 8,

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

