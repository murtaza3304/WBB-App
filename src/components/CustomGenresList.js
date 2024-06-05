import React from 'react';
import { View, FlatList, StyleSheet, Image, Text } from 'react-native';

const books = [
  {
    id: '1',
    title: 'Fantasy',
    image: require('../assets/images/Genre1.png'),
  },
  {
    id: '2',
    title: 'Horror',
    image: require('../assets/images/Genre2.png'),
  },
  {
    id: '3',
    title: 'Romance',
    image: require('../assets/images/Genre3.png'),
  },
  {
    id: '4',
    title: 'Thriller',
    image: require('../assets/images/Genre4.png'),
  },
  {
    id: '5',
    title: 'Adventure',
    image: require('../assets/images/Genre5.png'),
  },
  {
    id: '6',
    title: 'Sci-Fi',
    image: require('../assets/images/Genre6.png'),
  },
];

const GenresList = () => {
  const renderBook = ({ item }) => (
    <View style={styles.bookContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.bookImage} resizeMode="cover" />
        <View style={styles.overlay} />
        <Text style={styles.bookTitle}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={{height: '77%'}}>   
       <FlatList
      data={books}
      renderItem={renderBook}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
    />
    </View>

  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
  bookContainer: {
    flex: 1,
    aspectRatio: 0.7,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
  },
  bookTitle: {
    position: 'absolute',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default GenresList;
