import React from 'react';
import { View, StyleSheet, Image, Text, Dimensions } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

const { width } = Dimensions.get('window');

const books = [
  {
    id: '1',
    image: require('../assets/images/Genre1.png'),
    title: 'Fantasy',
  },
  {
    id: '2',
    image: require('../assets/images/Genre2.png'),
    title: 'Horror',
  },
  {
    id: '3',
    image: require('../assets/images/Genre3.png'),
    title: 'Romance',
  },
  {
    id: '4',
    image: require('../assets/images/Genre4.png'),
    title: 'Thriller',
  },
  {
    id: '5',
    image: require('../assets/images/Genre5.png'),
    title: 'Adventure',
  },
  {
    id: '6',
    image: require('../assets/images/Genre6.png'),
    title: 'Sci-Fi',
  },


];

const GenresList = () => {
  const renderBook = ({ item, index }) => {
    const randomHeight = [173, 193, 238, 246]; // THIS ARE EXACTLY THE HEIGHT GIVEN IN FIGMA

    // Get a random height from the array
    const height = randomHeight[Math.floor(Math.random() * randomHeight.length)];

    return (
      <View style={[styles.bookContainer, { height }]}>
        <Image
          source={item.image}
          style={styles.bookImage}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ height: '79%', paddingVertical: 15}}>
      <MasonryList
        data={books}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderBook}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bookContainer: {
    margin: 4,
    overflow: 'hidden',
    borderRadius: 10
  },
  bookImage: {
    width: '100%',
    height: '100%', 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
  bookTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});

export default GenresList;
