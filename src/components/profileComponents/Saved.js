import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { assets } from '../../assets/images/assets';
import { fonts } from '../../assets/fonts';
import { useTheme } from '../../assets/theme/Theme';

const Saved = () => {
  const theme = useTheme();
  const [pressedStates, setPressedStates] = useState({});

  const handlePress = (id) => {
    setPressedStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const data = [
    {
      id: '1',
      title: 'silviajones793',
      Question: 'Diving into Horror novels. Who`s with me?',
      description:
        'This is a sample paragraph for the first card. It should be about 180 words long, but for brevity, this example is shorter. ...',
    },
    {
      id: '2',
      title: 'toniarose108',
      Question: 'Seeking Thrilling Adventures. Any Takers?',
      description:
        'This is a sample paragraph for the second card. It should be about 180 words long, but for brevity, this example is shorter. ...',
    },
  ];

  const renderItem = ({ item }) => {
    const isPressed = pressedStates[item.id] || false;

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/images/profileImage.jpeg')}
            style={styles.cardImage}
          />
          <Text
            style={[styles.cardText, { color: '#000', fontFamily: fonts.bold }]}>
            {item.title}
          </Text>
          <Text
            style={[
              styles.cardSubtitle,
              { color: theme.gray, fontFamily: fonts.regular },
            ]}>
            2 weeks ago
          </Text>
        </View>
        <Text style={[styles.cardTitle, { fontFamily: fonts.mediumBlack }]}>
          {item.Question}
        </Text>
        <Text style={[styles.cardDescription, { fontFamily: fonts.regular }]}>
          {item.description.length > 180
            ? `${item.description.slice(0, 180)}...`
            : item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            backgroundColor: '#fff',
            alignItems: 'center',
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 24,
            width: '100%',
          }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => handlePress(item.id)}>
            <SvgXml
              xml={isPressed ? assets.LikeThumb : assets.LikeGray}
              width={24}
              height={24}
              fill={isPressed ? theme.green : '#000'}
            />
            <Text
              style={[
                styles.textStyling,
                {
                  fontFamily: fonts.regular,
                  fontSize: 12,
                  marginLeft: 2,
                  color: isPressed ? theme.green : '#000',
                },
              ]}>
              11.2k
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Commentlight} />
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
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Savelight} />
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
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SvgXml xml={assets.Sharelight} />
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
        <View style={{ width: '100%', borderWidth: 1, borderColor: theme.lightgray }}></View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 24,
            backgroundColor: theme.green,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 85,
            height: 30,
            padding: 5,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 12,
              fontFamily: fonts.regular,
              marginRight: 3,
            }}>
            This Month
          </Text>
          <SvgXml xml={assets.DropDown} />
        </TouchableOpacity>
        <SvgXml xml={assets.SavedMonth} />
      </View>
      <View
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: theme.lightgray,
          marginTop: 10,
        }}></View>
      <View style={{ height: '80%' }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.CardContainer}
        />
      </View>
    </View>
  );
};

export default Saved;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '65%',
  },
  cardImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#777',
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 16,
    color: '#000',
  },
  cardDescription: {
    marginTop: 2,
    fontSize: 14,
    fontFamily: fonts.regular,
  },
});
