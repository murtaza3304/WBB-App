import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

const {width} = Dimensions.get('window');

const books = [
  {
    id: '1',
    image: require('../assets/images/Genre1.png'),
  },
  {
    id: '2',
    image: require('../assets/images/Genre2.png'),
  },
  {
    id: '3',
    image: require('../assets/images/Genre3.png'),
  },
  {
    id: '4',
    image: require('../assets/images/Genre4.png'),
  },
  {
    id: '5',
    image: require('../assets/images/Genre5.png'),
  },
  {
    id: '6',
    image: require('../assets/images/Genre6.png'),
  },
];

const BookList = () => {
  const renderBook = ({item,index}) => {
    const randomHeight = [173, 193, 238, 246]; 

    return (
      <View style={styles.bookContainer}>
        <Image
          source={item.image}
          style={[
            styles.bookImage,
            {height: randomHeight[Math.floor(Math.random() * 3) + 1]},
          ]}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.bookTitle}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{ height: '79%', padding: 10}}>
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
    margin: 2,
    borderRadius: 0,
    overflow: 'hidden',
  },
  bookImage: {
    width: width / 2 ,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});

export default BookList;
