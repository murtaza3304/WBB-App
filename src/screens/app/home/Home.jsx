import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '../../../assets/theme/Theme';
import {fonts} from '../../../assets/fonts';
import SearchBar from '../../../components/SearchBar';
import {SvgXml} from 'react-native-svg';
import {assets} from '../../../assets/images/assets';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const theme = useTheme();
  const handlePress = () => {
    setIsPressed(!isPressed); // Toggle the state
  };
  return (
    <>
      <View style={[styles.MainContainer, {backgroundColor: '#000'}]}>
        <View style={styles.Header}>
          <Text style={styles.HeaderText}>WBB</Text>
          <Image
            source={require('../../../assets/images/profileImage.jpeg')}
            style={styles.ProfileImage}
          />
        </View>
        <SearchBar />
        <View style={styles.ContentContainer}>
          <View style={styles.GenresContainer}>
            <Text style={[styles.GenresText, {color: theme.text}]}>
              Genres You Follow
            </Text>
            <TouchableOpacity
              style={[styles.LatestPostButton, {backgroundColor: theme.green}]}>
              <Text style={styles.LatestPostText}>Latest Post</Text>
              <SvgXml xml={assets.DropDown} />
            </TouchableOpacity>
          </View>
          <View style={styles.BgImageStyling}>
            <ImageBackground
              source={require('../../../assets/images/BgImage.png')}
              style={[styles.BackgroundImage]}
              imageStyle={{borderRadius: 16}}>
              {/* Overlay View */}
              <View style={styles.Overlay} />
              <LinearGradient
                colors={['transparent', '#000']}
                style={[styles.LinearGradient]}
                locations={[0, 0.5]}>
                <Text
                  style={[
                    {fontFamily: fonts.regular, color: '#fff', fontSize: 24},
                  ]}>
                  “Adhere to decisions once you have reached them after careful
                  deliberation”.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text style={[styles.textStyling, {fontFamily: fonts.bold}]}>
                    Book :
                  </Text>
                  <Text style={[styles.textStyling, {fontFamily: fonts.bold}]}>
                    Meditations
                  </Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text
                    style={[styles.textStyling, {fontFamily: fonts.regular}]}>
                    Genre :
                  </Text>
                  <Text
                    style={[styles.textStyling, {fontFamily: fonts.regular}]}>
                    Philosophy
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../assets/images/profileImage.jpeg')}
                    style={{width: 30, height: 30, borderRadius: 30}}
                  />
                  <Text
                    style={[
                      styles.textStyling,
                      {fontFamily: fonts.bold, marginLeft: 5},
                    ]}>
                    realanthony24
                  </Text>
                  <Text
                    style={[
                      styles.textStyling,
                      {fontFamily: fonts.regular, fontSize: 12, marginLeft: 8},
                    ]}>
                    Today, 12:14 am
                  </Text>
                </View>
              </LinearGradient>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                  paddingVertical: 10,
                  backgroundColor: '#000',
                  alignItems: 'center',
                  borderBottomRightRadius: 24,
                  borderBottomLeftRadius: 24,
                  width: '100%',
                  position: 'absolute',
                  bottom: -30,
                  paddingHorizontal: 15,
                }}>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={handlePress}>
                  <SvgXml
                    xml={isPressed ? assets.LikeThumb : assets.UnlikeThumb}
                    width={24}
                    height={24}
                    fill={isPressed ? theme.green : '#fff'}
                  />
                  <Text
                    style={[
                      styles.textStyling,
                      {
                        fontFamily: fonts.regular,
                        fontSize: 12,
                        marginLeft: 2,
                        color: isPressed ? theme.green : '#fff',
                      },
                    ]}>
                    11.2k
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgXml xml={assets.Comment} />
                  <Text
                    style={[
                      styles.textStyling,
                      {
                        fontFamily: fonts.regular,
                        fontSize: 12,
                        marginLeft: 2,
                      },
                    ]}>
                    784
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgXml xml={assets.Save} />
                  <Text
                    style={[
                      styles.textStyling,
                      {
                        fontFamily: fonts.regular,
                        fontSize: 12,
                        marginLeft: 2,
                      },
                    ]}>
                    Save
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <SvgXml xml={assets.Share} />
                  <Text
                    style={[
                      styles.textStyling,
                      {
                        fontFamily: fonts.regular,
                        fontSize: 12,
                        marginLeft: 2,
                      },
                    ]}>
                    Share
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  HeaderText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: fonts.BoldItalic,
  },
  ProfileImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  ContentContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 20,
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
  },
  GenresContainer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  GenresText: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  LatestPostButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 24,
  },
  LatestPostText: {
    fontFamily: fonts.regular,
    color: '#fff',
    marginRight: 5,
  },
  BackgroundImage: {
    width: '100%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black with 40% opacity
    borderRadius: 16,
  },
  Icon: {
    position: 'absolute',
    bottom: 50,
  },
  BgImageStyling: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 150,
    borderRadius: 20,
  },
  LinearGradient: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    paddingHorizontal: 15,
  },
  textStyling: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
});
