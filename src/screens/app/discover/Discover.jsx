import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { assets } from '../../../assets/images/assets';
import { useTheme } from '../../../assets/theme/Theme';
import { fonts } from '../../../assets/fonts';
import BookList from '../../../components/CustomBookList';
import GenresList from '../../../components/CustomGenresList';

const Discover = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Trending Books');
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={{
          width: '60%',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgXml xml={assets.BackArrow} />
        </TouchableOpacity>
        <Text style={[styles.header, { fontFamily: fonts.bold, color: theme.text }]}>
          Discover
        </Text>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Trending Books')}
          style={[styles.tab, selectedTab === 'Trending Books' && styles.activeTab]}
        >
          <Text style={[styles.tabText, selectedTab === 'Trending Books' && styles.activeTabText]}>
            Trending Books
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Genres')}
          style={[styles.tab, selectedTab === 'Genres' && styles.activeTab]}
        >
          <Text style={[styles.tabText, selectedTab === 'Genres' && styles.activeTabText]}>
            Genres
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === 'Trending Books' && <BookList />}
      {selectedTab === 'Genres' && (
        <GenresList/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 18,
    color: '#555',
  },
  activeTabText: {
    color: '#000',
  },
  genresContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genresText: {
    fontSize: 18,
    color: '#555',
  },
});

export default Discover;
