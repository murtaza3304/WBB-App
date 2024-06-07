import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../assets/theme/Theme';
import {fonts} from '../../assets/fonts';
import CustomButton from '../../components/CustomButton';
import {SvgXml} from 'react-native-svg';
import {assets} from '../../assets/images/assets';

const Onboarding = ({navigation}) => {
  const handlePress =()=> {
    navigation.navigate('SignUp')
  }
  const theme = useTheme();
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImageContainer}>
        <Image
          source={require('../../assets/images/outlineBg.png')}
          style={styles.Image}
          resizeMode="cover"
        />
      </View>
      <View
        style={[styles.ContentContainer, {backgroundColor: theme.background}]}>
        <View style={styles.Row}>
          <Text
            style={[
              styles.Heading,
              {color: theme.text, fontFamily: fonts.regular},
            ]}>
            Discover and
          </Text>
          <TouchableOpacity
            style={[
              styles.ConnectButton,
              {backgroundColor: theme.green, borderBottomColor: theme.text, borderRightColor: theme.text},
            ]}>
            <Text style={styles.ConnectButtonText}>Connect</Text>
            <View
              style={{
                position: 'absolute',
                backgroundColor: theme.background,
                top: -7,
                right: -7,
                borderRadius: 50,
              }}>
              <SvgXml xml={assets.connectIcon} />
            </View>
          </TouchableOpacity>
        </View>
        <Text
          style={[styles.Heading, {color: theme.text, fontFamily: fonts.bold}]}>
          With Book Lovers
        </Text>
        <Text
          style={[
            styles.SubHeading,
            {color: theme.gray, fontFamily: fonts.regular},
          ]}>
          An endless adventure in the world of books await you. Let's start
          exploring!
        </Text>
        <CustomButton
          title="Get Start"
          onPress={handlePress}
          style={{backgroundColor: theme.green}}
         
        />
        <View style={styles.FooterRow}>
          <Text
            style={[
              styles.FooterText,
              {color: theme.gray, fontFamily: fonts.regular},
            ]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={[
                styles.FooterLink,
                {color: theme.green, fontFamily: fonts.bold},
              ]}>
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  ImageContainer: {
    width: '100%',
    height: 400,
    backgroundColor: 'green',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  ContentContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  Row: {
    flexDirection: 'row',
  },
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  ConnectButton: {
    width: 114,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    transform: [{rotate: '-1.48deg'}],
  },
  ConnectButtonText: {
    fontFamily: fonts.bold,
    color: '#fff',
    fontSize: 24,
  },
  SubHeading: {
    width: 250,
    marginVertical: 10,
  },
  FooterRow: {
    flexDirection: 'row',
  },
  FooterText: {
    marginRight: 5,
  },
  FooterLink: {
    fontSize: 14,
  },
});
