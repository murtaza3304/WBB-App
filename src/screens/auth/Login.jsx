import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { SvgFromXml, SvgXml } from 'react-native-svg';
import { assets } from '../../assets/images/assets';
import { fonts } from '../../assets/fonts';
import { useTheme } from '../../assets/theme/Theme';
import CustomButton from '../../components/CustomButton';
import { validateEmail, validateFullName, validatePassword, validateUsername } from '../../validations/validation';

const Login = ({ navigation }) => {
    const theme = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const LoginAccount = () => {
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
            // All validations passed, continue with account creation
            console.log('Account created:', {username, password });
            navigation.navigate('BottomTab');
        }
    };


    const handleGoogleSignup = () => {
        console.log('Sign up with Google');
    };

    return (
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
            <CustomButton title='Login' style={{ backgroundColor: theme.green }} onPress={LoginAccount} />
            <View style={{width:'100%', alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
            <Text>Don't have an Account</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: theme.green, fontFamily: fonts.bold, marginLeft: 10}}>SignUp</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>

        </View>
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
    }
});

export default Login;
