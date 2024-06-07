import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Home from '../screens/app/home/Home';
import Discover from '../screens/app/discover/Discover';
import Post from '../screens/app/post/Post';
import Profile from '../screens/app/profile/Profile';
import { assets } from '../assets/images/assets'; // Ensure this path is correct
import { useTheme } from '../assets/theme/Theme';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    active: assets.TabBarIcons.Active.Home,
    inactive: assets.TabBarIcons.Inactive.Home,
  },
  Discover: {
    active: assets.TabBarIcons.Active.Discover,
    inactive: assets.TabBarIcons.Inactive.Discover,
  },
  Post: {
    active: assets.TabBarIcons.Active.Post,
    inactive: assets.TabBarIcons.Inactive.Post,
  },
  Profile: {
    active: assets.TabBarIcons.Active.Profile,
    inactive: assets.TabBarIcons.Inactive.Profile,
  },
};

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const theme = useTheme();

  return (
    <View style={[styles.tabBar, { backgroundColor: theme.background }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const icon = icons[route.name];
        const iconName = isFocused ? icon.active : icon.inactive;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, { borderTopColor: isFocused ? theme.green : 'transparent' }]}
          >
            <SvgXml xml={iconName} width={24} height={24} />
            <Text style={{ color: isFocused ? theme.green : theme.gray, fontSize: 12 }}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 75,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
    borderTopWidth: 2,
  },
});

export default BottomTab;
