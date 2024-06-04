import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../assets/theme/Theme';
import {fonts} from '../../assets/fonts';

const Onboarding = () => {
  console.log("fonts",fonts.bold)
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
        style={{
          backgroundColor: theme.background,
          width: '100%',
          height: '100%',
          alignItems: 'center',
          paddingVertical: 30,
          paddingHorizontal: 30
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              styles.Heading,
              {color: theme.text, fontFamily: fonts.regular, marginRight: 10},
            ]}>
            Discover and
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: theme.green,
              width: 114,
              height: 37,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              borderBottomColor: theme.text,
              borderBottomWidth: 4,
              borderRightWidth: 4,
              transform: [{rotate: '-1.48deg'}],
            }}>
            <Text style={{fontFamily: fonts.regular, color: '#fff', fontSize: 24}}>
              Connect
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={[
            styles.Heading,
            {color: theme.text, fontFamily:"Roboto-Italic"},
          ]}>
          With Book Lovers
        </Text>
        <Text
          style={{
            color: theme.gray,
            width: 250,
            marginVertical: 10,
            fontFamily: fonts.regular,
          }}>
          An endless adventure in the world of books await you. Let`s start
          exploring!
        </Text>
        <TouchableOpacity style={{width: '100%',height: 48, marginVertical: 15, backgroundColor:theme.green, borderRadius: 32, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color: '#fff', fontSize: 14}}>Get Start</Text>
        </TouchableOpacity>
        <View>
          <Text>Already have an account?</Text>
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
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
