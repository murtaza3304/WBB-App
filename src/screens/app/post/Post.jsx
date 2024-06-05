import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {SvgXml} from 'react-native-svg';
import {assets} from '../../../assets/images/assets';
import {useTheme} from '../../../assets/theme/Theme';
import {fonts} from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';

const Post = ({navigation}) => {
  const theme = useTheme();
  // const numColumns= 4
  const genres = [
    { id: '1', name: 'Action' },
    { id: '2', name: 'Adventure' },
    { id: '3', name: 'Comedy' },
    { id: '4', name: 'Drama' },
    { id: '5', name: 'Fantasy' },
    { id: '6', name: 'Horror' },
    { id: '7', name: 'Romance' },
    { id: '8', name: 'Sci-Fi' },
  ];
  const Next = () => {
    navigation.navigate('Trending')
  }
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.genreButton }>
      <Text style={[styles.genreText, {color: theme.text}]}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={[styles.Container, {backgroundColor: theme.background}]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={assets.BackArrow} />
          </TouchableOpacity>
          <Text
            style={[
              styles.Heading,
              {color: theme.text, fontFamily: fonts.bold},
            ]}>
            Create a Post
          </Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View
          style={[
            {borderColor: theme.lightgray, height: 48},
            styles.inputStyle,
          ]}>
          <TextInput
            placeholder="Book Title"
            placeholderTextColor={theme.gray}
          />
        </View>
        <View
          style={[
            {borderColor: theme.lightgray, height: 183, marginTop: 10, width: '86%'},
            styles.inputStyle,
          ]}>
          <TextInput
            placeholder="Learning/Lessons?"
            placeholderTextColor={theme.gray}
            multiline={true} 
            style={{width: 300}}

          />
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 15,
              bottom: 15,
            }}>
            <TouchableOpacity style={styles.IconsStyle}>
              <SvgXml xml={assets.Upload} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconsStyle}>
              <SvgXml xml={assets.UploadFile} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.NextBtn}>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 13,
              borderRadius: 32,
              backgroundColor: theme.btnGray,
            }}>
            <Text style={{color: theme.text, fontFamily: fonts.regular}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
        <KeyboardAvoidingView>
        <View>
          <Text
            style={[
              styles.Heading,
              {color: theme.text, fontFamily: fonts.bold, fontSize: 18},
            ]}>
            Add A New Book
          </Text>
          <View
            style={[
              {borderColor: theme.lightgray, height: 48, marginTop: 10},
              styles.inputStyle,
            ]}>
            <TextInput
              placeholder="Book Title"
              placeholderTextColor={theme.gray}
              
            />
          </View>
        </View>
        </KeyboardAvoidingView>
        <View style={{marginTop: 20}}>
          <Text
            style={[
              styles.Heading,
              {color: theme.text, fontFamily: fonts.bold, fontSize: 18},
            ]}>
            Select Genre
          </Text>
          <View style={styles.genresContainer}>
        <FlatList
          data={genres}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.genreList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
        </View>
        <CustomButton title='Add Book' style={{backgroundColor: theme.green}} onPress={Next}/>
      </ScrollView>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '70%',
  },
  Heading: {
    fontSize: 20,
    color: '#000',
  },
  inputStyle: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  IconsStyle: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  NextBtn: {
    marginVertical: 10,
    paddingVertical: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  genresContainer: {
    // flex: 1,
    marginVertical: 5,
  },
  genreButton: {
    borderWidth: 1, 
    borderColor: '#D3D3D3',
    borderRadius: 16,
    height: 34, 
    width: 65,
    margin: 8,
    alignItems:'center',
    justifyContent:'center'
  },
  genreText: {
    fontSize: 12,
  },
});
