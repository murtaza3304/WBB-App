import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView, StyleSheet, Alert } from 'react-native';
import { SvgFromXml, SvgXml } from 'react-native-svg';
import { assets } from '../../assets/images/assets';
import { fonts } from '../../assets/fonts';
import { useTheme } from '../../assets/theme/Theme';
import CustomButton from '../../components/CustomButton';
import { validateEmail, validateFullName, validatePassword, validateUsername } from '../../validations/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your Api 
import { Register } from '../../apis'; 

const SignUp = ({ navigation }) => {
    const theme = useTheme();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleCreateAccount = async () => {
        let isValid = true;

        // Validate full name
        const fullNameError = validateFullName(fullName);
        if (fullNameError) {
            setFullNameError(fullNameError);
            isValid = false;
        } else {
            setFullNameError('');
        }

        // Validate email
        const emailError = validateEmail(email);
        if (emailError) {
            setEmailError(emailError);
            isValid = false;
        } else {
            setEmailError('');
        }

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
            const result = await Register(fullName, email, username, password);

            if (result.success) {
                console.log('Account created:', result.data);
                // Store username and password in AsyncStorage
                await AsyncStorage.setItem('username', username);
                await AsyncStorage.setItem('password', password);
                navigation.navigate('Genres');
            } else {
                Alert.alert('Error', result.error);
            }
        }
    };

    const handleGoogleSignup = () => {
        console.log('Sign up with Google');
    };

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor={theme.background} />
            <View style={[styles.container, { backgroundColor: theme.background }]}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <SvgXml xml={assets.BackArrow} />
                </TouchableOpacity>
                <Text style={[styles.title, { fontFamily: fonts.bold, color: theme.text }]}>Create Your Account</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular }]}>Full Name</Text>
                    <TextInput
                        style={[styles.input, { color: theme.text, borderColor: theme.lightgray }]}
                        placeholder="Enter your full name"
                        placeholderTextColor='grey'
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <Text style={styles.errorText}>{fullNameError}</Text>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular }]}>Email Address</Text>
                    <TextInput
                        style={[styles.input, { color: theme.text, borderColor: theme.lightgray }]}
                        placeholder="Enter your email"
                        placeholderTextColor='grey'
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <Text style={styles.errorText}>{emailError}</Text>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular }]}>Username</Text>
                    <TextInput
                        style={[styles.input, { color: theme.text, borderColor: theme.lightgray }]}
                        placeholder="Pick a username"
                        placeholderTextColor='grey'
                        value={username}
                        onChangeText={setUsername}
                    />
                    <Text style={styles.errorText}>{usernameError}</Text>
                    <Text style={[styles.labelStyle, { color: theme.text, fontFamily: fonts.regular }]}>Password</Text>
                    <View style={[styles.passwordContainer, { borderColor: theme.lightgray }]}>
                        <TextInput
                            style={{ color: theme.text }}
                            placeholder="Choose a password"
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
                    <CustomButton title='Create Account' style={{ backgroundColor: theme.green }} onPress={handleCreateAccount} />
                    <TouchableOpacity style={[styles.googleButton, { backgroundColor: theme.background, borderColor: theme.lightgray }]} onPress={handleGoogleSignup}>
                        <SvgFromXml xml={assets.GoogleLogo} width={24} height={24} />
                        <Text style={[styles.googleButtonText, { color: theme.green }]}>Sign Up with Google</Text>
                    </TouchableOpacity>
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
    }
});

export default SignUp;
