import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import ProfileHeader from '../../../components/profileComponents/ProfileHeader';
import { useTheme } from '../../../assets/theme/Theme';
import { fonts } from '../../../assets/fonts';
import Saved from '../../../components/profileComponents/Saved';
import PostsAndComments from '../../../components/profileComponents/PostsAndComments';
import About from '../../../components/profileComponents/About';
import Books from '../../../components/profileComponents/Books';

const Profile = ({ navigation }) => {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState('Books');

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  const getCategoryStyle = (category) => {
    if (category === activeCategory) {
      return {
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 2,
        borderBottomColor: theme.green,
        padding: 3,
      };
    } else {
      return {
        color: theme.gray,
        padding: 3,
      };
    }
  };

  const renderContent = () => {
    switch (activeCategory) {
      case 'Books':
        return <Books />;
      case 'Posts & Comments':
        return <PostsAndComments />;
      case 'Saved':
        return <Saved />;
      case 'About':
        return <About />;
      default:
        return null;
    }
  };

  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
    <View style={{ flex: 1, backgroundColor: '#000', paddingTop: 20 }}>
      <ProfileHeader navigation={navigation} followButton={false} />
      <View style={styles.ContentContainer}>
        <View style={{ width: '100%', marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
          <TouchableOpacity style={{ padding: 3 }} onPress={() => handleCategoryPress('Books')}>
            <Text style={getCategoryStyle('Books')}>Books</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 3 }} onPress={() => handleCategoryPress('Posts & Comments')}>
            <Text style={getCategoryStyle('Posts & Comments')}>Posts & Comments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 3 }} onPress={() => handleCategoryPress('Saved')}>
            <Text style={getCategoryStyle('Saved')}>Saved</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 3 }} onPress={() => handleCategoryPress('About')}>
            <Text style={getCategoryStyle('About')}>About</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10,  flex: 1, width:'100%' }}>
          {renderContent()}
        </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#fff',
    width: '100%'
  },
});

export default Profile;
