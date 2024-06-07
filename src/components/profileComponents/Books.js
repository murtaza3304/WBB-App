// Books.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../../assets/fonts';
import {useTheme} from '../../assets/theme/Theme';
import { SvgXml } from 'react-native-svg';
import { assets } from '../../assets/images/assets';

const Books = () => {
  const theme = useTheme();
  const ReadingBooks = [
    {id: '1', src: require('../../assets/images/Genre1.png')},
    {id: '2', src: require('../../assets/images/Genre2.png')},
    {id: '3', src: require('../../assets/images/Genre3.png')},
  ];
  const CompletedBooks = [
    {id: '1', src: require('../../assets/images/Genre4.png')},
    {id: '2', src: require('../../assets/images/Genre5.png')},
    {id: '3', src: require('../../assets/images/Genre6.png')},
  ];
  const genres = [
    {id: '1', name: 'Action'},
    {id: '2', name: 'Adventure'},
    {id: '3', name: 'Comedy'},
    {id: '4', name: 'Drama'},
    {id: '5', name: 'Fantasy'},
    {id: '6', name: 'Horror'},
    {id: '7', name: 'Romance'},
    {id: '8', name: 'Sci-Fi'},
  ];
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.genreButton}>
      <Text style={[styles.genreText, {color: theme.text, fontFamily: fonts.bold}]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.MainContainer}>
      <Text style={{color: '#000', fontSize: 16, fontFamily: fonts.bold}}>
        Books Reading
      </Text>
      <View style={{marginTop: 20}}>
        <FlatList
          data={ReadingBooks}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image source={item.src} style={styles.image} />
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text
        style={{
          color: '#000',
          fontSize: 16,
          fontFamily: fonts.bold,
          marginTop: 20,
        }}>
        Completed Books
      </Text>
      <View style={{marginTop: 10}}>
        <FlatList
          data={CompletedBooks}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image source={item.src} style={styles.image} />
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems:'center', marginTop: 20, marginBottom: 5}}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontFamily: fonts.bold,
          }}>
          Favorite Genres
        </Text>
        <TouchableOpacity style={{flexDirection: 'row', alignItems:'center', justifyContent:'center', marginLeft: 10}}>
          <SvgXml xml={assets.Edit}/>
          <Text style={{color: theme.green, fontFamily: fonts.regular, fontSize: 14, marginLeft: 4}}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={genres}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.genreList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Books;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    marginHorizontal: 3,
  },
  image: {
    width: 120,
    height: 106,
    borderRadius: 8,
  },
  genreButton: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 16,
    height: 34,
    width: 65,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreText: {
    fontSize: 12,
  },
});
