import React from 'react';
import { View, FlatList, StyleSheet, Image } from 'react-native';

const books = [
  {
    id: '1',
    title: 'Radiance',
    image: require('../assets/images/Book1.png'),
  },
  {
    id: '2',
    title: 'The Last House on Needless Street',
    image: require('../assets/images/Book2.png'),
  },
  {
    id: '3',
    title: 'Ghost Eaters',
    image: require('../assets/images/Book3.png'),
  },
  {
    id: '4',
    title: 'Six Crimson Cranes',
    image: require('../assets/images/Book4.png'),
  },
  {
    id: '5',
    title: 'Love on the Brain',
    image: require('../assets/images/Book5.png'),
  },
  {
    id: '6',
    title: 'Chosen Spirits',
    image: require('../assets/images/Book6.png'),
  },
];

const BookList = () => {
  const renderBook = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={item.image} style={styles.bookImage} resizeMode="cover" />
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
  bookImage: {
    width: '100%',
    height: '100%',
  },
});

export default BookList;
