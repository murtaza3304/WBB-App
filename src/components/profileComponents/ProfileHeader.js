import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {assets} from '../../assets/images/assets';
import {fonts} from '../../assets/fonts';
import {useTheme} from '../../assets/theme/Theme';

const ProfileHeader = ({navigation, followButton}) => {
  const theme = useTheme();

  return (
    <View style={styles.MainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <SvgXml xml={assets.BackArrowLight} />
        </TouchableOpacity>
        <View style={styles.settingContainer}>
          
          <TouchableOpacity>
            <SvgXml xml={assets.Setting} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.profileInfoContainer}>
        <View style={styles.profileInfo}>
          <Image
            source={require('../../assets/images/profileImage.jpeg')}
            style={styles.profileImage}
          />
          <View style={styles.profileTextContainer}>
            <Text style={[styles.profileName, {fontFamily: fonts.bold}]}>
              Kelvin James
            </Text>

            <Text
              style={[
                styles.profileUsername,
                {fontFamily: fonts.regular, color: theme.gray},
              ]}>
              @therealkelvin207
            </Text>
          </View>
        </View>
        {followButton && (
          <TouchableOpacity
            style={[styles.followButton, {backgroundColor: theme.green}]}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber,{fontFamily: fonts.bold}]}>1200</Text>
          <Text style={[styles.statLabel, {fontFamily: fonts.regular,color: theme.gray}]}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={[styles.statNumber, {fontFamily: fonts.bold}]}>102</Text>
          <Text style={[styles.statLabel, {fontFamily: fonts.regular, color: theme.gray}]}>Following</Text>
        </View>
        <TouchableOpacity style={styles.shareButton}>
          <SvgXml xml={assets.CopyLink} />
          <Text style={[styles.shareButtonText, {color: theme.gray, fontFamily: fonts.regular}]}>Share link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  MainContainer: {
    height: 190,
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop:  20,
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingContainer: {
    width: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingText: {
    color: '#fff',
  },
  profileInfoContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 64,
    height: 64,
    borderRadius: 50,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 16,
  },
  profileUsername: {
    fontSize: 12,
  },
  followButton: {
    borderRadius: 4,
    width: '35%',
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  followButtonText: {
    color: '#fff',
  },
  statsContainer: {
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  statItem: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
  },
  shareButton: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareButtonText: {
    
    fontSize: 12,
  },
});
