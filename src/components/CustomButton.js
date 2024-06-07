import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../assets/theme/Theme';
import { fonts } from '../assets/fonts';

const CustomButton = ({ onPress, title, style,TextStyle }) => {
    const theme = useTheme()
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, TextStyle, {fontFamily: fonts.bold}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 48,
    marginVertical: 15,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CustomButton;
