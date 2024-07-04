import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { assets } from '../assets/images/assets';
import { useTheme } from '../assets/theme/Theme';

const SearchBar = () => {
    const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
       
        <TextInput
          style={styles.input}
          placeholder="Search for any book or genre"
          placeholderTextColor={{color: theme.gray}}
        />
        <TouchableOpacity style={[styles.button,{}]}>
        <SvgXml xml={assets.SearchIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 32,
    width: 335,
    height: 48,
    paddingLeft: 15
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  button: {
    borderRadius: 20,
    paddingTop: 8,
    paddingBottom: 12,
    paddingHorizontal: 20,
    alignItems:'center', 
    justifyContent: 'center', 
  },
  buttonText: {
    color: '#fff',
  },
});

export default SearchBar;
