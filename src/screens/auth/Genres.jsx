import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useTheme} from '../../assets/theme/Theme';
import {fonts} from '../../assets/fonts';
import CustomButton from '../../components/CustomButton';

const Genres = ({navigation}) => {
  const theme = useTheme();
  const numColumns = 4;
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
      <Text style={[styles.genreText, {color: theme.text}]}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.questionContainer}>
        <Text
          style={[
            styles.question,
            {fontFamily: fonts.bold, color: theme.text},
          ]}>
          What genres are you interested in?
        </Text>
        <Text
          style={[
            styles.infoText,
            {fontFamily: fonts.regular, color: theme.gray},
          ]}>
          You can edit your preference later
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{paddingVertical: 4}}
          onPress={() => navigation.navigate('BottomTab')}>
          <Text
            style={{
              fontFamily: fonts.regular,
              color: theme.green,
              fontSize: 16,
            }}>
            Skip This
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.genresContainer}>
        <FlatList
          data={genres}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.genreList}
          horizontal={false}
          numColumns={numColumns}
        />
      </View>
      <CustomButton
        title="Save My Preference"
        style={{backgroundColor: theme.green}}
        onPress={() => navigation.navigate('BottomTab')}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  questionContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  question: {
    fontSize: 18,
    marginTop: 10,
    paddingTop: 20,
  },
  infoText: {
    fontSize: 16,
    marginTop: 5,
  },
  genresContainer: {
    marginVertical: 20,
  },
  genreList: {
    alignItems: 'flex-start',
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

  saveButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Genres;
