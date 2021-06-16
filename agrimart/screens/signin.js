import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    ScrollView,
    Alert,
    state,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../components/context';
import {BaseUrl} from '../components/serviceUrls';
import { header2 } from '../env';
import AsyncStorage from '@react-native-community/async-storage';


const Signin= props => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        token: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidEmail: true
    });

    const { colors } = useTheme();

    // const { signIn } = React.useContext(AuthContext);


    // axios.defaults.baseURL = 'http://192.168.8.101:8000/';



    const handleSignIN = async () => {
        console.log("handle signin");
        props.navigation.navigate("Home");
        // if (data.username.length == 0 || data.password.length == 0) {
        //     Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        //         { text: 'Okay' }
        //     ]);
        //     return;
        // }
        // if (data.username.length < 4 || data.password.length < 8) {
        //     Alert.alert('Wrong Input!', 'Username or password not match with your details.', [
        //         { text: 'Okay' }
        //     ]);
        //     return;
        // }

        // else {
        //     await axios({
        //         method: "post",
        //         url: BaseUrl+`/api/login/`,
        //         headers: header2,
        //         data: {
        //             "username": data.username,
        //             "password": data.password
        //         }
        //     })
        //         .then(response => {
        //             if(response.status === 200){
        //                 try {
        //                      AsyncStorage.setItem('token', response.data['token']);
        //                      console.log(response.data['token']);
        //                     navigation.navigate('Mainscreen');
                           
    
        //                 } catch (e) {
        //                     console.log(e);

        //                 }
        //             }else{
                    
        //                     Alert.alert('Wrong Input!', 'User is a not a valid user.', [
        //                         { text: 'Okay' }
                                
        //                     ]);
                            
                          
   
        //             }
        //             console.log(response.status);
        //             console.log(response);
                    
             
               
        //         })
        //         .catch(error => {
                  
        //             Alert.alert('Error', error.message);
        //             throw error;
        //         });
             
        // }
        // signIn(handleSignIN)
    }



    const handleUsernameChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }




    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }


    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }



    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }



    const [user, setUser] = useState({})
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '931801166988-7mcdrvm4oj27m02nvco5494ireu7siis.apps.googleusercontent.com',
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            //iosClientId: '', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
        isSignedIn()
    }, [])



    const _signIn = async () => {
        // navigation.navigate('Mainscreen')
      
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo)
            setUser(userInfo)
        } catch (error) {
            console.log('Message', error.message);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the Login Flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing In');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available or Outdated');
            } else {
                console.log('Some Other Error Happened');
            }
        }
    };

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!!isSignedIn) {
            getCurrentUserInfo()
        
        } else {
            console.log('Please Login')
        }
    };

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            setUser(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                alert('User has not signed in yet');
                console.log('User has not signed in yet');
            } else {
                alert("Something went wrong. Unable to get user's info");
                console.log("Something went wrong. Unable to get user's info");
            }
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setUser({});
        } catch (error) {
            console.error(error);
        }
    };




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>SIGN IN</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: colors.background
                }]}
            >
                <ScrollView>

                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            value={data.username}
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => handleUsernameChange(val)}

                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {data.isValidUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
                        </Animatable.View>
                    }


                    <Text style={[styles.text_footer, {
                        color: colors.text,
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            value={data.password}
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                        </Animatable.View>
                    }


                    <View style={styles.button}>
                        <TouchableOpacity

                            style={styles.signIn}
                            onPress={() => handleSignIN()}

                        >
                            <LinearGradient
                              colors={['black', 'black']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign IN</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View><Text>or</Text></View>


                        <View style={styles.main}>{!user.idToken ?
                            <GoogleSigninButton

                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Light}
                                onPress={_signIn}
                            /> :
                            <TouchableOpacity onPress={signOut}>
                                <Text>Logout</Text>
                            </TouchableOpacity>
                        }</View>




                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Signup")}
                            style={[styles.signIn, {
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#2c3e50'
                            }]}>Sign UP</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom:20
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 30
    },
    signIn: {
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
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});

