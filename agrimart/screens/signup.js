import React from 'react';
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
    useState
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { BaseUrl } from '../components/serviceUrls';
import { useTheme } from 'react-native-paper';

import { AuthContext } from '../components/context';
import { header2 } from '../env';
// import Users from '../model/users';

const Signup = (props) => {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValidEmail: true
    });

    const { colors } = useTheme();

    // const { signIn } = React.useContext(AuthContext);

    // axios.defaults.baseURL = 'http://192.168.8.101:8000/';

    const handleSignUp = async () => {
        console.log("handle signup");

        props.navigation.navigate("Signin");

        // if (!data.username.trim() || !data.password.trim() || !data.confirm_password.trim()) {

        //     alert('Please fill all the feilds and Try again...');
        //     return;
        // }
        // else if (data.username.length <= 3) {

        //     alert('username must be atleast 4 characters...And make sure to not include space between the characters...');
        //     return;
        // }
        // else if (data.password.length <= 7) {

        //     alert('password must be atleast 8 characters...Try again...');
        //     return;
        // }
        // else if (data.password !== data.confirm_password) {

        //     alert('Password does not match... Try again...');
        //     return;
        // }
        // else {

        //     await axios({
        //         method: "post",
        //         url: BaseUrl + `/api/register/`,
        //         headers: header2,
        //         data: {
        //             "username": data.username,
        //             "password": data.password
        //         }
        //     })
        //         .then(response => {
                   
        //             alert(response.data["message"])
        //         })
            
        // }

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

    const handleConfirmPasswordChange = (val) => {
        if (val.trim() == data.password) {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                confirm_password: val,
                isValidConfirmPassword: false
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




    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Customer Registration</Text>
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


                    <Text style={[styles.text_footer, {
                        color: colors.text,
                        marginTop: 35
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Password"
                            value={data.confirm_password}
                            placeholderTextColor="#666666"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
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
                    {data.isValidConfirmPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Password does not match.</Text>
                        </Animatable.View>
                    }



                    <View style={styles.textPrivate}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Terms')}
                        >
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                                Click here to see terms of the service
                    </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>



                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => handleSignUp()}
                        >
                            <LinearGradient
                                colors={['black', 'black']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                              onPress={() => props.navigation.navigate("Signin")}
                            style={[styles.signIn, {
                                borderColor: 'black',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#2c3e50'
                            }]}>Sign In</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default  Signup;

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
        paddingBottom: 20
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
        marginTop: 50
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

