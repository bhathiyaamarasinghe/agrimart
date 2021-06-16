

import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from "react-native-maps-directions";
import { BaseUrl, key } from '../components/serviceUrls';
import { COLORS, FONTS, icons, SIZES, GOOGLE_API_KEY } from "../constants"
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
const Explore = (props) => {

    const mapView = React.useRef()

    const [restaurant, setRestaurant] = React.useState(null)
    const [streetName, setStreetName] = React.useState("")
    const [fromLocation, setFromLocation] = React.useState(null)
    const [toLocation, setToLocation] = React.useState(null)
    const [toLat, setToLat] = React.useState(6.8015)
    const [toLng, setToLng] = React.useState(79.8997)
    const [fromLat,setTofromLat] = React.useState(6.8018)
    const [fromLng,setTofromLng] = React.useState(79.9227)
    const [region, setRegion] = React.useState(null)
    const [cords, setCords] = React.useState([])
    const [duration, setDuration] = React.useState(0)
    const [isReady, setIsReady] = React.useState(false)
    const [userLocation, setUserLocation] = React.useState(null)
    const [angle, setAngle] = React.useState(0)
    const [userToken, setuserToken] = React.useState(null)

    React.useEffect(async () => {

        axios.get(BaseUrl + `/api/seller/`)
            .then(res => {
                const cords = res.data;
                setCords(cords)
                console.log({ cords })
            })

        axios.get(BaseUrl + `/api/sellerpoint/`)
            .then(res => {
                const sellerLocation = res.data.sellerpoint;
                 setTofromLat(sellerLocation[0].sellerLat);
                 setTofromLng(sellerLocation[1].sellerLng);
                console.log(sellerLocation[0].sellerLat)
                console.log(sellerLocation[1].sellerLng)
            })


        const tokenID = await AsyncStorage.getItem('token');
        setuserToken(tokenID);

        let fromLoc = {
            latitude: fromLat,
            longitude: fromLng
        }
        let toLoc = {
            latitude: toLat,
            longitude: toLng
        }


        let mapRegion = {
            latitude: (fromLoc.latitude + toLoc.latitude) / 2,
            longitude: (fromLoc.longitude + toLoc.longitude) / 2,
            latitudeDelta: Math.abs(fromLoc.latitude - toLoc.latitude) * 2,
            longitudeDelta: Math.abs(fromLoc.longitude - toLoc.longitude) * 2
        }

        setRestaurant(restaurant)
        setFromLocation(fromLoc)
        setToLocation(toLoc)
        setRegion(mapRegion)

    }, [])

    const calculateAngle = (coordinates) => {
        let startLat = coordinates[0]["latitude"]
        let startLng = coordinates[0]["longitude"]
        let endLat = coordinates[1]["latitude"]
        let endLng = coordinates[1]["longitude"]
        let dx = endLat - startLat
        let dy = endLng - startLng

        return Math.atan2(dy, dx) * 180 / Math.PI
    }

    const mapMarkers = () => {
        return cords?.map((report) => <Marker
            key={report.id}
            coordinate={{ latitude: report.lat, longitude: report.lng }}
            title={report.seller_name}
        >
        </Marker >)
    }


    const zoomIn = () => {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta / 2,
            longitudeDelta: region.longitudeDelta / 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    const zoomOut = () => {
        let newRegion = {
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta * 2,
            longitudeDelta: region.longitudeDelta * 2
        }

        setRegion(newRegion)
        mapView.current.animateToRegion(newRegion, 200)
    }

    const address = (data) => {
        console.log(data.description);
        Geocoder.init(key);
        Geocoder.from(data.description)
            .then(json => {
                var location = json.results[0].geometry.location;
                setToLat(location.lat)
                setToLng(location.lng)
                setUserLocation(data.description)
                console.log('lat', toLat);
                console.log('lat', toLng);
                axios.post(BaseUrl + '/api/user/', {
                    "userToken": userToken,
                    "lat": toLat,
                    "lng": toLng,

                })
            })
            .catch(error => console.warn(error));

    }

    const getdistance = async () => {
        await axios({
            method: "get",
            url: BaseUrl + `/api/distance/`
        }).then(response => {

            alert(response.data["message"])


        }).catch(error => console.error('Error', error))
    }

    const renderMap = () => {
        const destinationMarker = () => (
            <Marker
                coordinate={toLocation}
            >
                <View
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.white
                    }}
                >
                    <View
                        style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Image
                            source={icons.pin}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: COLORS.white
                            }}
                        />
                    </View>
                </View>
            </Marker>
        )

        const carIcon = () => (
            <Marker
                coordinate={fromLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                rotation={angle}
            >
                <Image
                    source={icons.car}
                    style={{
                        width: 40,
                        height: 40
                    }}
                />
            </Marker>
        )

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapView}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={region}
                    style={{ flex: 1 }}
                >
                    {mapMarkers()}
                    <MapViewDirections
                       
                        origin={fromLocation}
                        destination={toLocation}
                        apikey={GOOGLE_API_KEY}
                        strokeWidth={5}
                        strokeColor={COLORS.primary}
                        optimizeWaypoints={true}
                        onReady={result => {
                            setDuration(result.duration)

                            if (!isReady) {
                               
                                mapView.current.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: (SIZES.width / 20),
                                        bottom: (SIZES.height / 4),
                                        left: (SIZES.width / 20),
                                        top: (SIZES.height / 8)
                                    }
                                })

                                let nextLoc = {
                                    latitude: result.coordinates[0]["latitude"],
                                    longitude: result.coordinates[0]["longitude"]
                                }

                                if (result.coordinates.length >= 2) {
                                    let angle = calculateAngle(result.coordinates)
                                    setAngle(angle)
                                }

                                setFromLocation(nextLoc)
                                setIsReady(true)
                            }
                        }}
                    />
                    {destinationMarker()}
                    {carIcon()}
                </MapView>
            </View>
        )
    }

    const renderDestinationHeader = () => {
        return (
            <View style={{
                position: 'absolute',
                marginTop: Platform.OS === 'ios' ? 40 : 20,
                flexDirection: "row",
                backgroundColor: '#fff',
                width: '90%',
                alignSelf: 'center',
                borderRadius: 5,
                padding: 2,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
                shadowRadius: 3,
                elevation: 1,
            }}
            >
                <Ionicons name="ios-search" size={25} />

                <GooglePlacesAutocomplete
                    placeholder='Search'
                    // onPress={(data, details = null) => {

                    //   console.log(data, details);
                    // }}
                    onPress={(data) => address(data)}
                    query={{
                        key: key,
                        language: 'en',
                    }}
                />

            </View>
        )
    }

    const renderDeliveryInfo = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        width: SIZES.width * 0.9,
                        paddingVertical: SIZES.padding * 3,
                        paddingHorizontal: SIZES.padding * 2,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {/* Avatar */}
                        <Image
                            source={restaurant?.courier.avatar}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 25
                            }}
                        />

                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            {/* Name & Rating */}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ ...FONTS.h4 }}>user Location:{userLocation}</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {/* <Image
                                        source={require('../../assets/logo.png')}
                                        style={{ width: 58, height: 48, marginRight: SIZES.padding }}
                                    /> */}
                                    <Text style={{ ...FONTS.body3 }}>{restaurant?.rating}</Text>
                                </View>
                            </View>

                            {/* Restaurant */}
                            <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{restaurant?.name}</Text>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding * 2,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                marginRight: 10,
                                backgroundColor: "#FFC300",
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => getdistance()}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Buy</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                flex: 1,
                                height: 50,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}
                            onPress={() => props.navigation.navigate("Home")}
                        >
                            <Text style={{ ...FONTS.h4, color: COLORS.white }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    const renderButtons = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: SIZES.height * 0.35,
                    right: SIZES.padding * 2,
                    width: 60,
                    height: 130,
                    justifyContent: 'space-between'
                }}
            >
                {/* Zoom In */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomIn()}
                >
                    <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>

                {/* Zoom Out */}
                <TouchableOpacity
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        backgroundColor: COLORS.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => zoomOut()}
                >
                    <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>
            </View>

        )
    }

    return (
        <View style={{ flex: 1 }}>
            {renderMap()}
            {renderDestinationHeader()}
            {renderDeliveryInfo()}
            {renderButtons()}
        </View>
    )
}

export default Explore;