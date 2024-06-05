import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import { StyleSheet } from 'react-native';
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

const getTabBarIcon = (route, focused, size) => {
  const icon = icons[route.name];
  const iconName = focused ? icon.active : icon.inactive;
  return <SvgXml xml={iconName} width={size} height={size} />;
};

const BottomTab = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => getTabBarIcon(route, focused, size),
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 15
        },
        tabBarIconStyle: {
          marginTop: 15, 
        },
        tabBarActiveTintColor: theme.green, 
        tabBarInactiveTintColor: theme.gray, 
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBar,
          backgroundColor: theme.background,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 75, 
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default BottomTab;
