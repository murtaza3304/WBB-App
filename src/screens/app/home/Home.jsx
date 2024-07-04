import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useTheme } from '../../../assets/theme/Theme';
import { fonts } from '../../../assets/fonts';
import SearchBar from '../../../components/SearchBar';
import { SvgXml } from 'react-native-svg';
import { assets } from '../../../assets/images/assets';
import PostList from '../../../components/HomeComponent/PostCard';

const Home = () => {
  const theme = useTheme();

  return (
<>
<StatusBar  barStyle="light-content" backgroundColor='transparent' translucent />
    <View style={[styles.MainContainer, { backgroundColor: '#000' }]}>
      <View style={styles.Header}>
        <Text style={[styles.HeaderText]}>WBB</Text>
      </View>
      <SearchBar />
      <View style={styles.ContentContainer}>
        <View style={styles.GenresContainer}>
          <Text style={[styles.GenresText, { color: theme.text }]}>
            Genres You Follow
          </Text>
          <TouchableOpacity
            style={[styles.LatestPostButton, { backgroundColor: theme.green }]}>
            <Text style={styles.LatestPostText}>Latest Post</Text>
            <SvgXml xml={assets.RefreshIcon} />
          </TouchableOpacity>
        </View>
        <PostList />
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 10,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 30,
    marginTop: 35, 
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  HeaderText: {
    color: '#fff',
    fontSize: 18.11,
    fontFamily: fonts.BoldItalic,
  },
 
  ContentContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 25,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  GenresContainer: {
    width: '100%',
    marginTop: 15,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  GenresText: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  LatestPostButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 24,
  },
  LatestPostText: {
    fontFamily: fonts.regular,
    color: '#fff',
    marginRight: 5,
  },
});

export default Home;
