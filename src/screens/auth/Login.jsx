import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView, StatusBar } from 'react-native';
import { SvgFromXml, SvgXml } from 'react-native-svg';
import { assets } from '../../assets/images/assets';
import { fonts } from '../../assets/fonts';
import { useTheme } from '../../assets/theme/Theme';
import CustomButton from '../../components/CustomButton';
import { validatePassword, validateUsername } from '../../validations/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        const checkCredentials = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                const storedPassword = await AsyncStorage.getItem('password');
                if (storedUsername && storedPassword) {
                    setUsername(storedUsername);
                    setPassword(storedPassword);
                }
            } catch (error) {
                console.error('Error retrieving credentials:', error);
            }
        };
        checkCredentials();
    }, []);

    const LoginAccount = async () => {
        let isValid = true;

        // Validate username
        const usernameError = validateUsername(username);
        if (usernameError) {
            setUsernameError(usernameError);
            isValid = false;
        } else {
            setUsernameError('');
        }

        // Validate password
        const passwordError = validatePassword(password);
        if (passwordError) {
            setPasswordError(passwordError);
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                const storedPassword = await AsyncStorage.getItem('password');

                if (username === storedUsername && password === storedPassword) {
                    navigation.navigate('BottomTab');
                } else {
                    Alert.alert('Error', 'Invalid username or password. Please sign up first.');
                }
            } catch (error) {
                console.error('Error retrieving credentials from AsyncStorage:', error);
            }
        }
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
            <View style={[styles.container, { backgroundColor: theme.background }]}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <SvgXml xml={assets.BackArrow} />
                </TouchableOpacity>
                <Text style={[styles.title, { fontFamily: fonts.bold, color: theme.text }]}>Login to Your Account</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular}]}>Username</Text>
                    <TextInput
                        style={[styles.input, { color: theme.text, borderColor: theme.lightgray }]}
                        placeholder="Pick a username"
                        placeholderTextColor='grey'
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.errorText}>{usernameError}</Text>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular }]}>Password</Text>
                    <View style={[styles.passwordContainer, {borderColor: theme.lightgray}]}>
                        <TextInput
                            style={{ color: theme.text }}
                            placeholder="Enter your password"
                            placeholderTextColor='grey'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!isPasswordVisible}
                        />
                        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)} style={styles.eyeBtn}>
                            <SvgXml xml={isPasswordVisible ? assets.HidePassword : assets.ShowPassword} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.errorText}>{passwordError}</Text>
                    {/* uncomment the custom button with bottom function  onPress={LoginAccount} and comment the bypass navigation of custom button when api is implemented */}
                    {/* <CustomButton title='Login' style={{ backgroundColor: theme.green }} onPress={LoginAccount} /> */}
                    <CustomButton title='Login' style={{ backgroundColor: theme.green }} onPress={()=>navigation.navigate('BottomTab')} />
                    <View style={{width:'100%', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                        <Text style={{color: '#000'}}>Don't have an Account</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{color: theme.green, fontFamily: fonts.bold, marginLeft: 10}}>SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white',
    },
    backButton: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    labelStyle: {
        marginVertical: 2,
        fontSize: 14
    },
    input: {
        height: 48,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    passwordContainer: {
        flexDirection: 'row',
        height: 48,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 4,
        marginTop: 16,
        borderWidth: 1,
        
    },
    googleButtonText: {
        color: 'white',
        marginLeft: 8,
        fontWeight: 'bold',
    },
    eyeBtn: {
        position: 'absolute',
        right: 20,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 5,
        marginLeft: 10,
    }
});

export default Login;
