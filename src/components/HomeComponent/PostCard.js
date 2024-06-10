import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useTheme } from '../../assets/theme/Theme';
import { fonts } from '../../assets/fonts';
import { assets } from '../../assets/images/assets';
import LinearGradient from 'react-native-linear-gradient';
import { HomeApiData } from '../../apis';

const PostCard = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);
  const theme = useTheme();
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  // UNCOMMENT THE USEEFFECT FUNTION WHEN API IS IMPLEMENT AND USE THE DATA OF THIS API TO SHOW DATA ON SCREEN
  // useEffect(() => {
  //   const fetchDataFromApi = async () => {
  //     try {
  //       const responseData = await HomeApiData();
  //          console.log(responseData, "This is Api Response")
  //       setData(responseData);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };

  //   fetchDataFromApi();
  // }, []);

  return (
    <View style={styles.BgImageStyling}>
      <ImageBackground
        source={item.bgImage}
        style={styles.BackgroundImage}
        imageStyle={{ borderRadius: 16 }}>
        {/* Overlay View */}
        <View style={styles.Overlay} />
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.LinearGradient}
          locations={[0, 0.5]}>
          <Text style={{ fontFamily: fonts.regular, color: '#fff', fontSize: 24 }}>
           {item.Title}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={[styles.textStyling, { fontFamily: fonts.bold }]}>Book :</Text>
            <Text style={[styles.textStyling, { fontFamily: fonts.bold }]}>{item.BookName}</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={[styles.textStyling, { fontFamily: fonts.regular }]}>Genre :</Text>
            <Text style={[styles.textStyling, { fontFamily: fonts.regular }]}>{item.GenreName}</Text>
          </View>
          <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('../../assets/images/profileImage.jpeg')}
              style={{ width: 30, height: 30, borderRadius: 30 }}
            />
            <Text style={[styles.textStyling, { fontFamily: fonts.bold, marginLeft: 5 }]}>
              {item.UserName}
            </Text>
            <Text style={[styles.textStyling, { fontFamily: fonts.regular, fontSize: 12, marginLeft: 8 }]}>
              Today, 12:14 am
            </Text>
          </View>
        </LinearGradient>
        <View style={styles.IconContainer}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={handlePress}>
            <SvgXml
              xml={isPressed ? assets.LikeThumb : assets.UnlikeThumb}
              width={24}
              height={24}
              fill={isPressed ? theme.green : '#fff'}
            />
            <Text style={[styles.textStyling, {
              fontFamily: fonts.regular,
              fontSize: 12,
              marginLeft: 2,
              color: isPressed ? theme.green : '#fff',
            }]}>
              {item.Like}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Comment} />
            <Text style={[styles.textStyling, { fontFamily: fonts.regular, fontSize: 12, marginLeft: 2 }]}>
              {item.Comments}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Save} />
            <Text style={[styles.textStyling, { fontFamily: fonts.regular, fontSize: 12, marginLeft: 2 }]}>
              Save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Share} />
            <Text style={[styles.textStyling, { fontFamily: fonts.regular, fontSize: 12, marginLeft: 2 }]}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const PostList = () => {
  const data = [
    { id: '1', text: 'Item 1', bgImage: require('../../assets/images/BgImage.png'), Title: ' Adhere to decisions once you have reached them after careful deliberation', BookName: 'Meditations', GenreName: 'Thriller', Like: '20K', BookName: 'Seven Days in Tibbat', UserName: 'John_Cena', Comments: '322' },
    { id: '2', text: 'Item 2', bgImage: require('../../assets/images/Genre3.png'), Title: ' Adhere to decisions once you have reached them after careful deliberation', BookName: 'Meditations', GenreName: 'Adventure',Like: '13.2K',BookName: 'The Habbits',  UserName: 'Mahul_Bhandari' , Comments: '102' },
    { id: '3', text: 'Item 3', bgImage: require('../../assets/images/image1.png'), Title: ' Adhere to decisions once you have reached them after careful deliberation', BookName: 'Meditations', GenreName: 'Romance',Like: '1.2K',BookName: 'jane eyrs', UserName: 'RealName34', Comments: '722' },
    { id: '3', text: 'Item 3', bgImage: require('../../assets/images/image4.png'), Title: ' Adhere to decisions once you have reached them after careful deliberation', BookName: 'Meditations', GenreName: 'Horror',Like: '13.3K',BookName: 'My Habbits', UserName: 'Mark_34', Comments: '122'  },
    // Add more items as needed
  ];

  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => <PostCard item={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.flatListContentContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  BgImageStyling: {
    width: '100%',
    height: 450, // Adjust height as needed
    // marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 10,
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 16,
  },
  LinearGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '53%',
    paddingHorizontal: 15,
  },
  textStyling: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 8,
    paddingBottom: 15,
    backgroundColor: '#000',
    alignItems: 'center',
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 15,
  },
});

export default PostList;
